

import { en } from "./en.js";
import { refs } from "./refs.js";
import { fr } from "./fr.js";
import { ua } from "./ua.js";
const {
  p: { p_ua, p_en, p_fr },
  text
} = refs;


function changeLanguge(lang) {
  
  for (let key in text) {
    const el = text[key];
    el.textContent = lang[key];
  
}
};
p_ua.addEventListener("click", () => {
  changeLanguge(ua);
});
p_en.addEventListener("click", () => {
  changeLanguge(en);
});
p_fr.addEventListener("click", () => {
  changeLanguge(fr);
})


