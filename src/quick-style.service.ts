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
          "--secondary-bg-color" : "#6c757d",
          "--tertiary-bg-color" : "#F4F4F4",
          "--success-bg-color" : "#28a745",
          "--warning-bg-color" : "#6200EE",
          "--danger-bg-color" : "#dc3545",
          "--info-bg-color" : "#17a2b8",
          "--light-bg-color" : "#f8f9fa",
          "--dark-bg-color" : "#343a40"
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
          "--font-size-xs" : "0.75rem",
          "--font-size-s" : "1rem",
          "--font-size-m" : "1.5rem",
          "--font-size-l" : "2rem",
          "--font-size-xl" : "3rem",
          "--font-size-2xl" : "5rem"
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
            "box-shadow": "0 0 0 2px rgb(5 145 255 / 20%)"
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
            "color": "#fff",
            "border": "none",
            "cursor":"pointer",
          },
          hover: {

          },
          focus: {

          },
          active: {

          },
          disabled: {

          }
        }
      }
    },
    componentList: [
      {
        tagName: "input",
        attributes: {
          type: "text",
          placeholder: "text"
        },
        groupName: "inputGroup",
        specific: {  
          default: {
            "border": "var(--spacing-xs) solid transparent",
            "box-shadow": "0 2px 5px 1px rgb(64 60 67 / 16%)",
            "border-radius": "var(--radius-3xl)"
          },
          hover: {
            "box-shadow": "0 2px 8px 1px rgb(64 60 67 / 24%)",
            "border": "var(--spacing-xs) solid rgba(223,225,229,0)"
          },
          focus: {
            "width": "300px",
            "box-shadow": "0 2px 8px 1px rgb(64 60 67 / 24%)",
            "border": "var(--spacing-xs) solid rgba(223,225,229,0)",
            "transition": "0.3s width"
          },
          disabled: {

          }
        }
      },
      {
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
            "border-radius": "var(--radius-none)"
          },
          hover: {
            "border": "var(--spacing-none)",
            "border-bottom": "var(--spacing-xs) solid #8D8D8D",
          },
          focus: {
            "outline": "var(--spacing-s) solid var(--primary-bg-color)",
            "border": "var(--spacing-none)"
          },
          disabled: {

          }
        }
      },
      {
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
            "box-shadow": "none",

          },
          disabled: {

          }
        }
      },
      {
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
            "box-shadow": "none"
          },
          disabled: {

          }
        }
      },
      {
        tagName: "button",
        attributes: {
          value: "primary"
        },
        textContent: "Primary",
        groupName: "buttonGroup",
        specific: {
          default: {
            "background-color": "var(--primary-bg-color)",
          },
          hover: {
            "background-color": "#1D4ED8",
          },
          focus: {
            "box-shadow": "0 0 0 3px #93C5FD"
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
        tagName: "button",
        attributes: {
          value: "secondary"
        },
        textContent: "Secondary",
        groupName: "buttonGroup",
        specific: {
          default: {
            "background-color": "var(--secondary-bg-color)",
            "color": "#1E40AF",
            "border-radius": "var(--radius-3xl)"
          },
          hover: {
            "background-color": "#DBEAFE",
          },
          focus: {
            "box-shadow": "0 0 0 3px #93C5FD"
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
        tagName: "button",
        attributes: {
          value: "success"
        },
        textContent: "Success",
        groupName: "buttonGroup",
        specific: {
          default: {
            "background-color": "var(--success-bg-color)",
          },
          hover: {
            "background-color": "#218838",
            "border": "1px solid #1E7E34"
          },
          focus: {
            "box-shadow": "0 0 0 3px rgb(72 180 97 / 50%)"
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
            "border-radius": "var(--radius-rounded)",
            "padding": "0px",
            "font-size": "var(--font-size-m)",
            "display": "flex",
            "align-items": "center",
            "justify-content": "center"
          },
          hover: {
            "box-shadow": "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
          },
          focus: {
            "box-shadow": "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
          },
          active: {
            "box-shadow": "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)"
          },
          disabled: {
            "opacity": 0.6
          }
        }
      },
      {
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
            "box-shadow": "none"
          },
          disabled: {

          }
        }
      },
      {
        tagName: "input",
        attributes: {
          type: "radio",
          name: "gender",
          id: "man"
        },
        labelName: "man",
        specific: {
          default: {
            "height":"var(--dimension-s)",
            "width":"var(--dimension-s)",
            "appearance": "none",
            "border": "var(--spacing-xs) solid black",
            "border-radius": "var(--radius-rounded)",
            "background-image": "var(--radio-img)",
            "background-size": "cover", 
            "cursor":"pointer",
          },
          hover: {
            "border": "var(--spacing-s) solid var(--primary-bg-color)",
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
        tagName: "input",
        attributes: {
          type: "checkbox",
          name: "colors",
          id: "red"
        },
        labelName: "red",
        specific: {
          default: {
            "height":"var(--dimension-s)",
            "width":"var(--dimension-s)",
            "appearance": "none",
            "border": "var(--spacing-xs) solid black",
            "background-size": "cover", 
            "cursor":"pointer",
            "border-radius":"var(--radius-m)"
          },
          hover: {
            "border": "var(--spacing-s) solid var(--primary-bg-color)",
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
    ]
  }

}
