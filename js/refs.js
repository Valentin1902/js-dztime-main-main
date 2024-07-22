import {ua} from "./ua.js"



export const refs = {
  p: {
    p_ua: document.querySelector(".header_p_UA"),
    p_en: document.querySelector(".header_p_EN"),
    p_fr: document.querySelector(".header_p_FR"),
  },
  text: {
    
  },
};

for (let key in ua) {
refs.text[key] = document.querySelector("."+ key)
}
