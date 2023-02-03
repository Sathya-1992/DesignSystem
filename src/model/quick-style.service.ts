import { NONE_TYPE } from '@angular/compiler';
import { Attribute, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickStyleService {

  constructor() { }

  designSystem: { styles: { ":root": { [key in string]: {} }, "html": {}, "variable": { [key in string]: {} }, all: { [key in string]: {} }, group: { [key in string]: {} } }, componentList: {}[] } = {
    styles: {
      ":root": {

      },
      "html": {
        "font-size": "16px"
      },
      "variable": {
        "color-palette": {
          "--blue-bg-color": "#007bff",
          "--blue-hov-color": "#1D4ED8",
          "--blue-act-color": "#1e40af",
          "--gray-bg-color": "#6c757d",
          "--lightgray-bg-color": "#F4F4F4",
          "--gray-hov-color": "#dfe1e6",
          "--lightgray-hov-color": "#ebecf0",
          "--gray-bdr-color": "#8D8D8D",
          "--yellow-bg-color": "#eac54f",
          "--yellow-hov-color": "#d4a72c",
          "--yellow-act-color": "#bf8700",
          "--purple-bg-color": "#6200EE",
          "--purple-outlined-fg-color": "#814dde",
          "--purple-outlined-bdr-color": "#e1cbff",
          "--purple-outline-hov-color": "#f4eaff",
          "--purple-outline-bdr-hov-color": "#c69eff",
          "--purple-outline-act-color": "#e1cbff",
          "--green-bg-color": "#28a745",
          "--green-hov-color": "#218838",
          "--green-act-color": "#1e7e34",
          "--red-bg-color": "#dc3545",
          "--light-bg-color": "#ffffff",
          "--dark-bdr-color": "#000000",
          "--disabled-bg-color": "#ccc",
          "--light-fg-color": "#ffffff",
          "--dark-fg-color": "#000000",

        },
        "background-color": {
          "--input-grp-bg-color": "var(--light-bg-color)",
          "--input-grp-fg-color": "var(--dark-fg-color)",
          "--input-grp-bdr-color": "var(--blue-bg-color)",
          "--input-grp-hov-color": "var(--blue-bg-color)",
          "--input-grp-foc-color": "var(--blue-bg-color)",
          // "--input1-bg-color" : "var(--light-bg-color)",
          // "--input1-fg-color" : "var(--dark-fg-color)",
          "--input1-hov-color": "var(--gray-hov-color)",
          // "--input2-bg-color" : "var(--light-bg-color)",
          // "--input2-fg-color" : "var(--dark-fg-color)",
          // "--input2-hov-color" : "var(--blue-bg-color)",
          "--input3-bg-color": "var(--lightgray-bg-color)",
          // "--input3-fg-color" : "var(--dark-fg-color)",
          "--input3-hov-color": "var(--lightgray-hov-color)",
          "--input3-bdr-color": "var(--gray-bdr-color)",
          "--input3-foc-color": "var(--purple-bg-color)",
          "--input4-bg-color": "var(--lightgray-bg-color)",
          // "--input4-fg-color" : "var(--dark-fg-color)",
          "--input4-hov-color": "var(--lightgray-hov-color)",
          "--input4-bdr-color": "var(--lightgray-bg-color)",
          "--input4-foc-color": "var(--light-bg-color)",
          "--input5-bg-color": "var(--lightgray-bg-color)",
          // "--input5-fg-color" : "var(--dark-fg-color)",
          "--input5-hov-color": "var(--lightgray-hov-color)",
          "--input5-bdr-color": "var(--gray-hov-color)",
          "--input5-foc-color": "var(--light-bg-color)",
          "--input5-foc-bdr-color": "var(--blue-bg-color)",

          "--button-grp-bg-color": "var(--blue-bg-color)",
          "--button-grp-fg-color": "var(--light-fg-color)",
          "--primary-btn-bg-color": "var(--blue-bg-color)",
          "--primary-btn-hov-color": "var(--blue-hov-color)",
          "--primary-btn-act-color": "var(--blue-act-color)",
          "--secondary-btn-bg-color": "var(--yellow-bg-color)",
          "--secondary-btn-hov-color": "var(--yellow-hov-color)",
          "--secondary-btn-act-color": "var(--yellow-act-color)",
          "--secondary-btn-fg-color": "var(--dark-fg-color)",
          "--success-btn-bg-color": "var(--green-bg-color)",
          "--success-btn-hov-color": "var(--green-hov-color)",
          "--success-btn-act-color": "var(--green-act-color)",
          "--add-btn-outlinedbg-color": "var(--light-bg-color)",
          "--add-btn-outlinedfg-color": "var(--purple-outlined-fg-color)",
          "--add-btn-outlinebdr-color": "var(--purple-outlined-bdr-color)",
          "--add-btn-outline-hov-color": "var(--purple-outline-hov-color)",
          "--add-btn-outline-bdrhov-color": "var(--purple-outline-bdr-hov-color)",
          "--add-btn-outline-act-color": "var(--purple-outline-act-color)",

          "--radio-grp-bdr-color": "var(--dark-bdr-color)",
          "--radio-grp-hov-color": "var(--blue-hov-color)",
          "--red-label-color": "var(--red-bg-color)",
          "--green-label-color": "var(--green-bg-color)",
          "--blue-label-color": "var(--blue-bg-color)",

          "--switch-grp-bg-color": "var(--light-bg-color)",
          "--slider-offbg-color": "var(--red-bg-color)",
          "--slider-onbg-color": "var(--green-bg-color)"

        },
        "radius": {
          "--radius-none": "0px",
          "--radius-xs": "0.125rem",
          "--radius-s": "0.25rem",
          "--radius-m": "0.375rem",
          "--radius-l": "0.5rem",
          "--radius-xl": "0.75rem",
          "--radius-2xl": "1rem",
          "--radius-3xl": "1.5rem",
          "--radius-rounded": "50%"
        },
        "spacing": {
          "spacing-none": "0rem",
          "--spacing-xs": "1px",
          "--spacing-s": "0.125rem",
          "--spacing-m": "0.25rem",
          "--spacing-l": "0.375rem",
          "--spacing-xl": "0.5rem",
          "--spacing-2xl": "0.75rem",
          "--spacing-3xl": '1rem',
          "--spacing-4xl": "1.5rem",
          "--spacing-5xl": "2rem"
        },
        "dimensions": {
          "--dimension-none": "0rem",
          "--dimension-xs": "1rem",
          "--dimension-s": "2rem",
          "--dimension-m": "3rem",
          "--dimension-l": "4rem",
          "--dimension-xl": "5rem",
          "--dimension-2xl": "6rem",
          "--dimension-3xl": "7rem",
          "--dimension-4xl": "8rem",
          "--dimension-5xl": "9rem",
          "--dimension-6xl": "10rem",
          "--dimension-7xl": "11rem",
          "--dimension-8xl": "12rem",
          "--dimension-9xl": "15rem"
        },
        "typography": {
          "--font-family-sans": "ui-sans-serif, sans-serif,Segoe UI Emoji, Segoe UI Symbol",
          "--font-family-sherif": "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
          "--font-family-mono": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
          "--font-weight-thin": "100",
          "--font-weight-light": "300",
          "--font-weight-medium": "500",
          "--font-weight-bold": "700",
          "--font-weight-xbold": "900",
          "--font-size-xs": "0.75rem",
          "--font-size-s": "1rem",
          "--font-size-m": "1.5rem",
          "--font-size-l": "2rem",
          "--font-size-xl": "3rem",
          "--font-size-2xl": "5rem"
        },
        "box-shadow": {
          "--box-shadow-none": "none",
          "--box-shadow1": "0 0 0 2px rgb(5 145 255 / 20%)",
          "--box-shadow2": "0 2px 5px 1px rgb(64 60 67 / 16%)",
          "--box-shadow3": "0 2px 8px 1px rgb(64 60 67 / 24%)",
          "--box-shadow4": "0 0 0 3px #93C5FD",
          "--box-shadow5": "0 0 0 3px rgb(72 180 97 / 50%)",
          "--box-shadow6": "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
          "--box-shadow7": "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)"
        },
        "image": {
          "--radio-img": "url(./assets/radio-btn1.png)",
          "--radio-checked-img": "url(./assets/radio-checked.svg)",
          "--checkbox-img": "url(./assets/checkbox1.png)",
          "--radio-bike-img": "url(./assets/bike.png)",
          "--radio-car-img": "url(./assets/car.svg)",
          "--radio-bus-img": "url(./assets/bus.jpeg)"
        },
        "transition": {
          "--transition-1": "0.1s",
          "--transition-2": "0.2s",
          "--transition-3": "0.3s",
          "--transition-4": "0.4s",
          "--transition-5": "0.5s"
        }

      },
      all: {
        default: {
          "box-sizing": "border-box",
          "padding": 0,
          "margin": 0,
          "color": "var(--dark-fg-color)",
          "font-family": "var(--font-family-sans)",
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
            "padding": "var(--spacing-m) var(--spacing-2xl)",
            "border": "var(--spacing-s) solid var(--input-grp-bdr-color)",
            "border-radius": "var(--radius-m)",
            "outline": "none",
            "background-color": "var(--input-grp-bg-color)",
            "color": "var(--input-grp-fg-color)",
          },
          hover: {
            "border": "var(--spacing-xs)solid var(--input-grp-hov-color)"
          },
          focus: {
            "border": "var(--spacing-xs) solid var(--input-grp-foc-color)",
            "box-shadow": "var(--box-shadow1)"
          },
          disabled: {
            "background-color": "var(--disabled-bg-color)",
            "border": "var(--spacing-xs)solid var(--disabled-bg-color)"
          }
        },
        buttonGroup: {
          default: {
            "padding": "var(--spacing-xl) var(--spacing-3xl)",
            "border-radius": "var(--radius-m)",
            "border": "var(--spacing-none)",
            "cursor": "pointer",
            "background-color": "var(--button-grp-bg-color)",
            "color": "var(--button-grp-fg-color)"
          },
          hover: {

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
            "height": "var(--dimension-s)",
            "width": "var(--dimension-s)",
            "appearance": "none",
            "border": "var(--spacing-xs) solid var(--radio-grp-bdr-color)",
            "cursor": "pointer",
          },
          hover: {
            "border": "var(--spacing-s) solid var(--radio-grp-hov-color)"
          },
          focus: {

          },
          checked: {

          },
          disabled: {

          }
        },
        switchGroup: {
          default: {
            "display": "flex",
            "width": "var(--dimension-m)",
            "height": "var(--spacing-4xl)",
            "border": "var(--spacing-xs) solid var(--radio-grp-bdr-color)",
            "border-radius": "var(--radius-3xl)",
            "background-color": "var(--switch-grp-bg-color)",
            "align-items": "center",
            "padding": "var(--spacing-s)"
          },
          hover: {

          },
          focus: {

          },
          checked: {

          },
          disabled: {

          }
        }
      }
    },
    componentList: [
      {
        name: "textBox",
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
            "border": "var(--spacing-xs) solid var(--input1-hov-color)"
          },
          focus: {
            "width": "300px",
            "box-shadow": "var(--box-shadow3)",
            "border": "var(--spacing-xs) solid var(--input1-hov-color)",
            "transition": "var(--transition-3) width"
          },
          disabled: {

          }
        }
      },
      {
        name: "numberBox",
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
        name: "emailBox",
        tagName: "input",
        attributes: {
          type: "email",
          placeholder: "abc@gmail.com"
        },
        groupName: "inputGroup",
        specific: {
          default: {
            "border": "var(--spacing-none)",
            "border-bottom": "var(--spacing-xs) solid var(--input3-bdr-color)",
            "background-color": "var(--input3-bg-color)",
            "border-radius": "var(--radius-none)",
            "border-top-left-radius": "var(--radius-s)",
            "border-top-right-radius": "var(--radius-s)"
          },
          hover: {
            "border": "var(--spacing-none)",
            "background-color": "var(--input3-hov-color)",
            "border-bottom": "var(--spacing-xs) solid var(--input3-bdr-color)"
          },
          focus: {
            "box-shadow": "var(--box-shadow-none)",
            "border": "var(--spacing-none)",
            "border-bottom": "var(--spacing-s) solid var(--input3-foc-color)",
            "transition": "border-color var(--transition-2) linear"
          },
          disabled: {

          }
        }
      },
      {
        name: "password",
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
        name: "date",
        tagName: "input",
        attributes: {
          type: "date",
        },
        groupName: "inputGroup",
        specific: {
          default: {
            "background-color": "var(--input4-bg-color)",
            "border": "var(--spacing-xs) solid var(--input4-bg-color)"
          },
          hover: {
            "background-color": "var(--input4-bg-color)",
            "border": "var(--spacing-s) solid var(--input4-hov-color)"
          },
          focus: {
            "background-color": "var(--input4-foc-color)",
            "box-shadow": "var(--box-shadow-none)",

          },
          disabled: {

          }
        }
      },
      {
        name: "textarea",
        tagName: "textarea",
        attributes: {
          placeholder: "textarea"
        },
        groupName: "inputGroup",
        specific: {
          default: {
            "height": "var(--dimension-2xl)",
            "background-color": "var(--input5-bg-color)",
            "border": "var(--spacing-s) solid var(--input5-bdr-color)"
          },
          hover: {
            "background-color": "var(--input5-hov-color)",
            "border": "var(--spacing-s) solid var(--input5-bdr-color)"
          },
          focus: {
            "background-color": "var(--input5-foc-color)",
            "border": "var(--spacing-s) solid var(--input5-foc-bdr-color)",
            "box-shadow": "var(--box-shadow-none)"
          },
          disabled: {

          }
        }
      },
      {
        name: "primary-btn",
        tagName: "button",
        attributes: {
          value: "primary"
        },
        textContent: "Primary",
        groupName: "buttonGroup",
        specific: {
          default: {
            "background-color": "var(--primary-btn-bg-color)",
          },
          hover: {
            "background-color": "var(--primary-btn-hov-color)",
          },
          focus: {
            "box-shadow": "var(--box-shadow4)"
          },
          active: {
            "background-color": "var(--primary-btn-act-color)"
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        name: "secondary-btn",
        tagName: "button",
        attributes: {
          value: "secondary"
        },
        textContent: "Secondary",
        groupName: "buttonGroup",
        specific: {
          default: {
            "background-color": "var(--secondary-btn-bg-color)",
            "border-radius": "var(--radius-3xl)",
            "color": "var(--secondary-btn-fg-color)"
          },
          hover: {
            "background-color": "var(--secondary-btn-hov-color)",
          },
          focus: {
            "box-shadow": "var(--box-shadow4)"
          },
          active: {
            "background-color": "var(--secondary-btn-act-color)"
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        name: "success-btn",
        tagName: "button",
        attributes: {
          value: "success"
        },
        textContent: "Success",
        groupName: "buttonGroup",
        specific: {
          default: {
            "background-color": "var(--success-btn-bg-color)",
          },
          hover: {
            "background-color": "var(--success-btn-hov-color)",
            "border": "1px solid var(--success-btn-act-color)"
          },
          focus: {
            "box-shadow": "var(--box-shadow5)"
          },
          active: {
            "background-color": "var(--success-btn-act-color)",
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        name: "add-btn",
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
            "background-color": "var(--add-btn-outlinedbg-color)",
            "border": "1px solid var(--add-btn-outlinebdr-color)",
            "color": "var(--add-btn-outlinedfg-color)",
            "border-radius": "var(--radius-rounded)",
            "padding": "0px",
            "font-size": "var(--font-size-m)",
            "display": "flex",
            "align-items": "center",
            "justify-content": "center"
          },
          hover: {
            "background-color": "var(--add-btn-outline-hov-color)",
            "border": "1px solid var(--add-btn-outline-bdrhov-color)"
            // "box-shadow": "var(--box-shadow6)"
          },
          focus: {
            "box-shadow": "var(--box-shadow6)"
          },
          active: {
            "background-color": "var(--add-btn-outline-act-color)"
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        name: "selectBox",
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
        name: "autoSuggest",
        tagName: "input",
        attributes: {
          list: "colors"
        },
        autoSuggest: true,
        options: ["Red", "Green", "Blue", "Yellow"],
        groupName: "inputGroup",
        specific: {
          default: {
            "background-color": "var(--input5-bg-color)",
            "border": "var(--spacing-s) solid var(--input5-bdr-color)"
          },
          hover: {
            "background-color": "var(--input5-hov-color)",
            "border": "var(--spacing-s) solid var(--input5-bdr-color)"
          },
          focus: {
            "background-color": "var(--input5-foc-color)",
            "border": "var(--spacing-s) solid var(--input5-foc-bdr-color)",
            "box-shadow": "var(--box-shadow-none)"
          },
          disabled: {

          }
        }
      },
      {
        name: "radio-btn",
        tagName: "input",
        attributes: {
          type: "radio",
          name: "gender",
          id: "man"
        },
        groupName: "radioGroup",
        options:[{label:"woman"}],
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
          focus: {

          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        name: "checkBox",
        tagName: "input",
        attributes: {
          type: "checkbox",
          name: "color",
        },
        groupName: "radioGroup",
        options:[{label:"test"}],
        specific: {
          default: {
            "background-size": "cover",
            "border-radius": "var(--radius-m)"
          },
          hover: {

          },
          checked: {
            "background-image": "var(--checkbox-img)"
          },
          focus: {

          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        name: "checkBox",
        tagName: "input",
        attributes: {
          type: "checkbox",
          name: "colors",
        },
        groupName: "radioGroup",
        options : [{label:"red"},{label:"green"},{label:"blue"}],
       
        specific: {
          default: {
            all : {
              "border-radius": "var(--radius-m)"
            },
            options : {
              red : {},
              green : {},
              blue : {}
            }   
          },
          hover: {

          },
          checked: {
            options : {  
              red : { "background-color": "var(--red-label-color)"},
              green : {"background-color": "var(--green-label-color)"},
              blue : {"background-color": "var(--blue-label-color)"}
            }  
          },
          focus: {

          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        name: "radio-btn",
        tagName: "input",
        attributes: {
          type: "radio",
          name: "vehicle",
        },
        groupName: "radioGroup",
        options : [{
          "label": "bike",
        },
        {
          "label": "car",
        },
        {
          "label": "bus",
        }],
        specific: {
          default: {
            all : {
             "border-radius": "var(--radius-rounded)",
              "background-size": "cover"
            },
            options : {
              "bike": {"background-image": "none"},
              "car" : {"background-image": "none"},
              "bus" : {"background-image": "none"}
            }
          },
          hover: {

          },
          checked: {
            all:{
            },
            options : {
              "bike": {"background-image": "var(--radio-bike-img)"},
              "car" : {"background-image": "var(--radio-car-img)"},
              "bus" : {"background-image": "var(--radio-bus-img)"}
            }
          },
          focus: {

          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
        name: "switchBox",
        tagName: "input",
        attributes: {
          class: "slider",
          type: "checkbox"
        },
        switchBox: true,
        groupName: "switchGroup",
        specific: {
          default: {
            "appearance": "none",
            "height": "var(--dimension-xs)",
            "width": "var(--dimension-xs)",
            "background-color": "var(--slider-offbg-color)",
            "transition": "var(--transition-4)",
            "border-radius": "var(--radius-rounded)"
          },
          hover: {

          },
          checked: {
            "background-color": "var(--slider-onbg-color)",
            "transform": "translateX(22px)"
          },
          focus: {

          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
    ]
  }

}
