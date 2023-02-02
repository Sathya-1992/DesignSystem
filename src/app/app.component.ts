import { Component } from '@angular/core';
import { QuickStyleService } from 'src/model/quick-style.service';
import { AfterViewInit, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DesignSystem';
  styleSheet = document.styleSheets[1];
  divParentEle !: HTMLElement;

  @ViewChild('input') inputEle!: ElementRef<HTMLElement>;
  @ViewChild('button') buttonEle!: ElementRef<HTMLElement>;
  @ViewChild('radio') radioEle!: ElementRef<HTMLElement>;

  constructor(public dataService: QuickStyleService, private renderer: Renderer2) { }

  ngOnInit(): void {
    let resetCss = this.dataService.designSystem.styles.all['default'];
    let variableCss = this.dataService.designSystem.styles[':root'];
    let fontSizeCss = this.dataService.designSystem.styles['html'];
    let rootVariable = this.dataService.designSystem.styles.variable;
    let rootObj;
    for (const property in rootVariable) {
      rootObj = Object.assign(variableCss, rootVariable[property]);
    }
    let groupCss: any = this.dataService.designSystem.styles.group;
    this.generateStylesheetProperty('*', resetCss);
    this.generateStylesheetProperty('html',fontSizeCss);
    this.generateStylesheetProperty(":root", rootObj);
    let groupNames: string[] = Object.keys(groupCss);

    if (groupNames.length) {
      groupNames.forEach((groupName: string) => {
        this.getStyleSheetProperty(groupCss, groupName);

      })
    }
  }

  ngAfterViewInit(): void {
    this.generateComponentList();
  }
  generateStylesheetProperty(selectorText: string, cssText: any) {
    let cssProp = '';
    for (const [property, value] of Object.entries(cssText)) {
      cssProp += `${property}: ${value};`;
    }
    if (selectorText === "*") {
      this.styleSheet.insertRule(`${selectorText} { ${cssProp} }`, 0);
    }
    else {
      this.styleSheet.insertRule(`${selectorText} { ${cssProp} }`, this.styleSheet.cssRules.length);
    }

  }

  getStyleSheetProperty(path: any, propName: string) {
    let states: string[] = Object.keys(path[propName]);
    if (states.length) {
      states.forEach((stateName: string) => {
        if (path[propName].hasOwnProperty(stateName)) {
          if (Object.keys(path[propName][stateName]).length) {
            if (stateName === 'default') {
              if (propName === 'specific') {
                this.generateStylesheetProperty(`${path.tagName}[${Object.keys(path.attributes)[0]}=${Object.values(path.attributes)[0]}]`, path[propName][stateName]);
              }
              else {
                this.generateStylesheetProperty(`.${propName}`, path[propName][stateName]);
                this.generateStylesheetProperty(`.${propName}-${stateName}`, path[propName][stateName]);
              }
            }
            else {
              if (propName === 'specific') {
                this.generateStylesheetProperty(`${path.tagName}[${Object.keys(path.attributes)[0]}=${Object.values(path.attributes)[0]}]:${stateName}`, path[propName][stateName]);

                this.generateStylesheetProperty(`${path.tagName}[${path.tagName}${Object.values(path.attributes)[0]}${stateName}=true]`, path[propName][stateName]);
                this.generateStateComponent(path, stateName);
              }
              else {
                this.generateStylesheetProperty(`.${propName}:${stateName}`, path[propName][stateName]);
                this.generateStylesheetProperty(`.${propName}-${stateName}`, path[propName][stateName])
              }
            }
          }
          else {
            if (propName === 'specific' && stateName !== "default") {
              this.generateStateComponent(path, stateName);
            }
          }
        }
      })
    }
  }

  generateComponentList() {
    let compList = this.dataService.designSystem.componentList;
    let parentElement: HTMLElement;
    compList.forEach((list: any) => {
      this.divParentEle = this.renderer.createElement("div");
      this.divParentEle.classList.add("states");
      let element = document.createElement(list.tagName);
      if (list.hasOwnProperty("attributes") && Object.keys(list.attributes).length) {
        for (const [key, value] of Object.entries(list.attributes)) {
          element.setAttribute(key, value);
        }
      }

      if (list.tagName === "select" && list.hasOwnProperty("options")) {
        this.generateSelectBoxComponenet(list, element);
      }
      else if (list.tagName === "input" && list.hasOwnProperty("autoSuggest") && list.hasOwnProperty("options")) {
        this.generateAutosuggestBoxComp(list);
      }
      else if (list.tagName === "input" && list.hasOwnProperty("switchBox")) {
        let labelEle: HTMLElement = document.createElement("label");
        labelEle.className = list.groupName;
        labelEle.appendChild(element);
        element = labelEle;
      }
      else if (list.tagName === "input" && (list.attributes.type === "radio" || list.attributes.type === "checkbox") && list.hasOwnProperty("options")) {
        let divElement: HTMLElement = document.createElement("div");
        let parent: HTMLElement = this.generateCheckboxComp(list, divElement);
        this.divParentEle.appendChild(parent);
      }
      if (list.hasOwnProperty("groupName") && list.groupName != "switchGroup") {
        element.className = list.groupName;
      }
      if (list.hasOwnProperty("textContent")) {
        element.textContent = list.textContent;
      }
      if (!(list.tagName === "input" && (list.attributes.type === "radio" || list.attributes.type === "checkbox") && list.hasOwnProperty("options"))) {
        this.divParentEle.appendChild(element);
      }


      if (list.hasOwnProperty("specific")) {
        this.getStyleSheetProperty(list, 'specific')
      }

      if (list.tagName === "input" && (list.attributes.type === "radio" || list.attributes.type === "checkbox")) {
        parentElement = this.radioEle.nativeElement;
      }
      else if (list.tagName === "button") {
        parentElement = this.buttonEle.nativeElement;
      }
      else if (list.tagName === "input" || list.tagName === "textarea" || list.tagName === "select") {
        parentElement = this.inputEle.nativeElement
      }
      this.divParentEle.setAttribute("data-before", list.name);
      this.renderer.appendChild(parentElement, this.divParentEle);

    })
  }

  generateStateComponent(compDetails: any, stateName: string) {
    let element = document.createElement(compDetails.tagName);
    let labelEle: HTMLElement;
    if (compDetails.hasOwnProperty("attributes") && Object.keys(compDetails.attributes).length) {
      for (const [key, value] of Object.entries(compDetails.attributes)) {
        element.setAttribute(key, value);
      }
      element.setAttribute(`${compDetails.tagName}${Object.values(compDetails.attributes)[0]}${stateName}`, true);
    }
    if (compDetails.hasOwnProperty("groupName")) {
      if (compDetails.groupName === "switchGroup") {
        labelEle = document.createElement("label");
        labelEle.classList.add(`${compDetails.groupName}-default`, `${compDetails.groupName}-${stateName}`);
        labelEle.appendChild(element);
        element = labelEle;
      }
      else {
        element.classList.add(`${compDetails.groupName}-default`, `${compDetails.groupName}-${stateName}`);
      }
    }
    if (compDetails.hasOwnProperty("textContent")) {
      element.textContent = compDetails.textContent;
    }
    this.divParentEle.appendChild(element);
  }

  generateSelectBoxComponenet(list: any, element: HTMLElement) {
    list.options.forEach((optValue: string) => {
      let optionEle = document.createElement("option");
      optionEle.setAttribute("value", optValue);
      optionEle.textContent = optValue;
      element.appendChild(optionEle);
    })
  }

  generateAutosuggestBoxComp(list: any) {
    let dataInput = document.createElement("datalist");
    dataInput.setAttribute("id", `${Object.values(list.attributes)[0]}`);
    list.options.forEach((optValue: string) => {
      let optionEle = document.createElement("option");
      optionEle.setAttribute("value", optValue);
      optionEle.textContent = optValue;
      dataInput.appendChild(optionEle);
    })
    this.divParentEle.appendChild(dataInput);
  }

  generateCheckboxComp(list: any, divElement: HTMLElement) {
    if (list.hasOwnProperty("options") && Object.keys(list.options).length) {
      list.options.forEach((prop: any) => {
        let divEle = this.renderer.createElement("div");
        divEle.className = "flexAlign";
        let inputEle: HTMLInputElement = document.createElement(list.tagName);
        inputEle.id = prop.label;
        inputEle.className = list.groupName;
        if (list.hasOwnProperty("attributes") && Object.keys(list.attributes).length) {
          for (const [key, value] of Object.entries(list.attributes)) {
            inputEle.setAttribute(key, value as string);
          }
        }
        divEle.appendChild(inputEle);
        if (prop.hasOwnProperty("label")) {
          let labEle = document.createElement("label");
          labEle.setAttribute("for", prop.label);
          labEle.textContent = prop.label;
          divEle.appendChild(labEle);
        }
        if (prop.hasOwnProperty("default") && Object.keys(prop.default).length) {
          this.generateStylesheetProperty(`${list.tagName}[id=${prop.label}]`, prop.default);
        }
        if (prop.hasOwnProperty("checked") && Object.keys(prop.checked).length) {
          this.generateStylesheetProperty(`${list.tagName}[id=${prop.label}]:checked`, prop.checked);
        }
        divElement.appendChild(divEle);
      })
    }
    return divElement;
  }
}
