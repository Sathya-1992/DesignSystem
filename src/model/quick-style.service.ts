import { Attribute, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickStyleService {

  constructor() { }

  designSystem: { styles: { ":root": { [key in string]: {} }, "variable": { [key in string]: {} }, all: { [key in string]: {} }, group: { [key in string]: {} } }, componentList: {}[] } = {
    styles: {
      ":root": {

      },
      "variable": {
        "background-color" : {
          "--primary-bg-color" : "#007bff",
          "--primary-fg-color" : "#ffffff",
          "--secondary-bg-color" : "#6c757d",
          "--secondary-fg-color" : "#1E40AF",
          "--tertiary-bg-color" : "#F4F4F4",
          "--tertiary-fg-color" : "000000",
          "--success-bg-color" : "#28a745",
          "--success-fg-color" : "#ffffff",
          "--warning-bg-color" : "#6200EE",
          "--warning-fg-color" : "#ffffff",
          "--danger-bg-color" : "#dc3545",
          "--danger-fg-color" : "#ffffff",
          "--info-bg-color" : "#17a2b8",
          "--info-fg-color" : "#ffffff",
          "--light-bg-color" : "#f8f9fa",
          "--light-fg-color" : "#000000",
          "--dark-bg-color" : "#343a40",
          "--dark-fg-color" : "#ffffff"
        },
        "radius" : {
          "--radius-none" : "0px",
          "--radius-xs" : "0.125rem",
          "--radius-s" : "0.25rem",
          "--radius-m" : "0.375rem",
          "--radius-l" : "0.5rem",
          "--radius-xl" : "0.75rem",
          "--radius-2xl" : "1rem",
          "--radius-3xl" : "1.5rem",
          "--radius-rounded" : "50%"
        },
        "spacing":{
          "spacing-none" : "0rem",
          "--spacing-xs" : "1px",
          "--spacing-s" : "0.125rem",
          "--spacing-m" : "0.25rem",
          "--spacing-l" : "0.375rem",
          "--spacing-xl" :  "0.5rem",
          "--spacing-2xl" : "0.75rem",
          "--spacing-3xl" : '1rem',
          "--spacing-4xl" : "1.5rem",
          "--spacing-5xl" : "2rem"
        },
        "dimensions":{
          "--dimension-none": "0rem",
          "--dimension-xs" : "1rem",
          "--dimension-s" : "2rem",
          "--dimension-m" : "3rem",
          "--dimension-l" : "4rem",
          "--dimension-xl" : "5rem",
          "--dimension-2xl" : "6rem",
          "--dimension-3xl" : "7rem",
          "--dimension-4xl" : "8rem",
          "--dimension-5xl" : "9rem",
          "--dimension-6xl" : "10rem",
          "--dimension-7xl" : "11rem",
          "--dimension-8xl" : "12rem",
          "--dimension-9xl" : "15rem"
        },
        "typography": { 
          "--font-family-sans" : "ui-sans-serif, sans-serif,Segoe UI Emoji, Segoe UI Symbol",
          "--font-family-sherif" : "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
          "--font-family-mono" : "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
          "--font-weight-thin" : "100",
          "--font-weight-light" : "300",
          "--font-weight-medium" : "500",
          "--font-weight-bold" : "700",
          "--font-weight-xbold" : "900",
          "--font-size-xs" : "0.75rem",
          "--font-size-s" : "1rem",
          "--font-size-m" : "1.5rem",
          "--font-size-l" : "2rem",
          "--font-size-xl" : "3rem",
          "--font-size-2xl" : "5rem"
        },
        "box-shadow": {
          "--box-shadow-none" : "none",
          "--box-shadow1" : "0 0 0 2px rgb(5 145 255 / 20%)",
          "--box-shadow2" : "0 2px 5px 1px rgb(64 60 67 / 16%)",
          "--box-shadow3" : "0 2px 8px 1px rgb(64 60 67 / 24%)",
          "--box-shadow4" : "0 0 0 3px #93C5FD",
          "--box-shadow5" : "0 0 0 3px rgb(72 180 97 / 50%)",
          "--box-shadow6" : "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
          "--box-shadow7" : "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)"
        },
        "image": {
          "--radio-img" : "url(http://cdn.onlinewebfonts.com/svg/img_504781.png)",
          "--radio-checked-img": "url(https://www.svgrepo.com/download/88683/woman.svg)",
          "--checkbox-img" : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uRfFFTdwtJBBRDuybKlX1oyQXQjCPa3RVw&usqp=CAU)"
        }
        
      },
      all: {
        default: {
          "box-sizing": "border-box",
          "padding": 0,
          "margin": 0,
          "color": "black",
          "font-family": "sans-serif",
        },
        // hover:{

        // },
        // focus:{

        // },
        // disabled:{

        // }
      },
      group: {
        inputGroup: {
          default: {
            "height": "var(--dimension-s)",
            "width": "var(--dimension-9xl)", 
            "padding": "4px 10px",
            "border": "var(--spacing-s) solid var(--primary-bg-color)",
            "border-radius": "var(--radius-m)",
            "outline": "none",
          },
          hover: {
            "border": "var(--spacing-xs)solid var(--primary-bg-color)"
          },
          focus: {
            "border": "var(--spacing-xs) solid var(--primary-bg-color)",
            "box-shadow": "var(--box-shadow1)"
          },
          disabled: {
            "background-color": "#ccc",
            "border": "var(--spacing-xs)solid #ccc"
          }
        },
        buttonGroup: {
          default: {
            "padding": "var(--spacing-xl) var(--spacing-3xl)",
            "border-radius": "var(--radius-m)",
            "border": "var(--spacing-none)",
            "cursor":"pointer",
            "background-color": "var(--primary-bg-color)",
            "color" : "var(--primary-fg-color)"
          },
          hover: {
            "border": "2px solid rgb(0 0 0 / 14%)"
          },
          focus: {

          },
          active: {

          },
          disabled: {

          }
        },
        radioGroup: {
          default: {
            "height":"var(--dimension-s)",
            "width":"var(--dimension-s)",
            "appearance": "none",
            "border": "var(--spacing-xs) solid black",
            "cursor":"pointer",
          },
          hover: {
            "border": "var(--spacing-s) solid var(--primary-bg-color)"
          },
          focus: {

          },
          checked : {

          },
          disabled: {

          }
        },
        switchGroup: {
          default: {
            "display":"flex",
            "width":"var(--dimension-m)",
            "height":"1.5rem",
            "border":"var(--spacing-xs) solid black",
            "border-radius":"var(--radius-3xl)",
            "background-color":"var(--tertiary-bg-color)",
            "align-items" : "center",
            "padding" : "var(--spacing-s)"
          },
          hover: {
            
          },
          focus: {

          },
          checked : {

          },
          disabled: {

          }
        }
      }
    },
    componentList: [
      {
        name : "textBox",
        tagName: "input",
        attributes: {
          type: "text",
          placeholder: "text"
        },
        groupName: "inputGroup",
        specific: {  
          default: {
            "border": "var(--spacing-xs) solid transparent",
            "box-shadow": "var(--box-shadow2)",
            "border-radius": "var(--radius-3xl)"
          },
          hover: {
            "box-shadow": "var(--box-shadow3)",
            "border": "var(--spacing-xs) solid rgba(223,225,229,0)"
          },
          focus: {
            "width": "300px",
            "box-shadow": "var(--box-shadow3)",
            "border": "var(--spacing-xs) solid rgba(223,225,229,0)",
            "transition": "0.3s width"
          },
          disabled: {

          }
        }
      },
      {
        name:"numberBox",
        tagName: "input",
        attributes: {
          type: "number",
          placeholder: "number"
        },
        groupName: "inputGroup",
        specific: {
          default: {

          },
          hover: {

          },
          focus: {

          },
          disabled: {

          }
        }
      },
      {
        name:"emailBox",
        tagName: "input",
        attributes: {
          type: "email",
          placeholder: "abc@gmail.com"
        },
        groupName: "inputGroup",
        specific: {
          default: {
            "border": "var(--spacing-none)",
            "border-bottom": "var(--spacing-xs) solid #8D8D8D",
            "background-color": "var(--tertiary-bg-color)",   
            "border-radius" : "var(--radius-none)", 
            "border-top-left-radius": "var(--radius-s)",
            "border-top-right-radius": "var(--radius-s)"   
          },
          hover: {
            "border": "var(--spacing-none)",
            "background-color": "#EBECF0",
            "border-bottom": "var(--spacing-xs) solid #8D8D8D"
          },
          focus: {
            "box-shadow" : "var(--box-shadow-none)",
            "border": "var(--spacing-none)",
            "border-bottom": "var(--spacing-s) solid var(--warning-bg-color)",
            "transition" : "border-color 0.2s linear"
          },
          disabled: {

          }
        }
      },
      {
        name:"password",
        tagName: "input",
        attributes: {
          type: "password",
          placeholder: "password"
        },
        groupName: "inputGroup",
        specific: {
          default: {

          },
          hover: {

          },
          focus: {

          },
          disabled: {

          }
        }
      },
      {
        name:"date",
        tagName: "input",
        attributes: {
          type: "date",
        },
        groupName: "inputGroup",
        specific: {
          default: {
            "background-color": "var(--tertiary-bg-color)",
            "border": "var(--spacing-xs) solid var(--tertiary-bg-color)"
          },
          hover: {
            "background-color": "var(--tertiary-bg-color)",
            "border": "var(--spacing-s) solid #EBECF0"
          },
          focus: {
            "background-color": "#fff",
            "box-shadow": "var(--box-shadow-none)",

          },
          disabled: {

          }
        }
      },
      {
        name:"textarea",
        tagName: "textarea",
        attributes: {
          placeholder: "textarea"
        },
        groupName: "inputGroup",
        specific: {
          default: {
            "height": "100px",
            "background-color": "var(--tertiary-bg-color)",
            "border": "2px solid #DFE1E6"
          },
          hover: {
            "background-color": "#EBECF0",
            "border": "2px solid #DFE1E6"
          },
          focus: {
            "background-color": "#FFFFFF",
            "border": "2px solid var(--primary-bg-color)",
            "box-shadow": "var(--box-shadow-none)"
          },
          disabled: {

          }
        }
      },
      {
        name : "primary-btn",
        tagName: "button",
        attributes: {
          value: "primary"
        },
        textContent: "Primary",
        groupName: "buttonGroup",
        specific: {
          default: {
            "background-color": "var(--primary-bg-color)",
            "color" : "var(--primary-fg-color)"
          },
          hover: {
            "background-color": "#1D4ED8",
          },
          focus: {
            "box-shadow": "var(--box-shadow4)"
          },
          active: {
            "background-color": "#1E40AF"
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        name :"secondary-btn",
        tagName: "button",
        attributes: {
          value: "secondary"
        },
        textContent: "Secondary",
        groupName: "buttonGroup",
        specific: {
          default: {
            "background-color": "var(--secondary-bg-color)",
            "color": "var(--secondary-fg-color)",
            "border-radius": "var(--radius-3xl)"
          },
          hover: {
            "background-color": "#DBEAFE",
          },
          focus: {
            "box-shadow": "var(--box-shadow4)"
          },
          active: {
            "background-color": "#EEF2FF"
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        name:"success-btn",
        tagName: "button",
        attributes: {
          value: "success"
        },
        textContent: "Success",
        groupName: "buttonGroup",
        specific: {
          default: {
            "background-color": "var(--success-bg-color)",
            "color" : "var(--success-fg-color)"
          },
          hover: {
            "background-color": "#218838",
            "border": "1px solid #1E7E34"
          },
          focus: {
            "box-shadow": "var(--box-shadow5)"
          },
          active: {
            "background-color": "#1E7E34",
            "border": "var(--spacing-s) solid #1C7430"
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        name:"add-btn",
        tagName: "button",
        attributes: {
          value: "add"
        },
        textContent: "+",
        groupName: "buttonGroup",
        specific: {
          default: {
            "height": "var(--dimension-m)",
            "width": "var(--dimension-m)",
            "background-color": "var(--warning-bg-color)",
            "color" : "var(--warning-fg-color)",
            "border-radius": "var(--radius-rounded)",
            "padding": "0px",
            "font-size": "var(--font-size-m)",
            "display": "flex",
            "align-items": "center",
            "justify-content": "center"
          },
          hover: {
            "box-shadow": "var(--box-shadow6)"
          },
          focus: {
            "box-shadow": "var(--box-shadow6)"
          },
          active: {
            "box-shadow": "var(--box-shadow7)"
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        name:"selectBox",
        tagName: "select",
        attributes: {
          name: "colors"
        },
        options: ["Red", "Green", "Blue", "Yellow"],
        groupName: "inputGroup",
        specific: {
          default: {

          },
          hover: {

          },
          focus: {

          },
          disabled: {

          }
        }
      },
      {
        name:"autoSuggest",
        tagName: "input",
        attributes: {
          list: "colors"
        },
        autoSuggest: true,
        options: ["Red", "Green", "Blue", "Yellow"],
        groupName: "inputGroup",
        specific: {
          default: {
            "background-color": "var(--tertiary-bg-color)",
            "border": "var(--spacing-s) solid #DFE1E6"
          },
          hover: {
            "background-color": "#EBECF0",
            "border": "var(--spacing-s) solid #DFE1E6"
          },
          focus: {
            "background-color": "#FFFFFF",
            "border": "var(--spacing-s) solid var(--primary-bg-color)",
            "box-shadow": "var(--box-shadow-none)"
          },
          disabled: {

          }
        }
      },
      {
        name:"radio-btn",
        tagName: "input",
        attributes: {
          type: "radio",
          name: "gender",
          id: "man"
        },
        groupName: "radioGroup",
        labelName: "man",
        specific: {
          default: {
            "border-radius": "var(--radius-rounded)",
            "background-image": "var(--radio-img)",
            "background-size": "cover"
          },
          hover: {
            
          },
          checked: {
            "background-image": "var(--radio-checked-img)",
          },  
          focus:{

          },
          disabled: {
           "opacity":0.6
          }
        }
      },
      {
        name :"checkBox",
        tagName: "input",
        attributes: {
          type: "checkbox",
          name: "colors",
          id: "red"
        },
        groupName: "radioGroup",
        labelName: "red",
        specific: {
          default: {
            "background-size": "cover", 
            "border-radius":"var(--radius-m)"
          },
          hover: {
            
          },
          checked: {
            "background-image":"var(--checkbox-img)"
          },
          focus:{

          },
          disabled: {
            "opacity":0.6
          }
        }
      },
      {
        name:"switchBox",
        tagName: "input",
        attributes: {
          class:"slider",
          type : "checkbox"
        },
        switchBox :true,
        groupName : "switchGroup",
        specific: {
          default: {
            "appearance" : "none",
            "height" :"var(--dimension-xs)",
            "width" : "var(--dimension-xs)",
            "background-color":"var(--danger-bg-color)",
            "transition" :"0.4s",
            "border-radius" : "var(--radius-rounded)"  
          },
          hover: {

          },
          checked: {
            "background-color" : "var(--success-bg-color)",
            "transform" : "translateX(22px)"
          },
          focus:{

          },
          disabled: {
            "opacity":0.6
          }
        }
      },
    ]
  }

}
