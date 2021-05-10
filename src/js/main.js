import modals from "./module/modals";
import sliders from "./module/sliders";
import forms from "./module/forms";
import mask from "./module/mask";
import checkTextInput from "./module/CheckTextInput";
import showMoreStyles from "./module/showMoreStyles";
import calc from "./module/calc";

window.addEventListener('DOMContentLoaded', ()=>{
   "use strict";
    document.body.style.overflowX = "hidden";
    modals();
    sliders('.feedback-slider-item','','.main-prev-btn', '.main-next-btn',true);
    sliders('.main-slider-item','vertical');
    forms();
    mask('[name="phone"]');
    checkTextInput('[name="name"]');
    checkTextInput('[name="message"]');
    showMoreStyles('.button-styles','#showCards');
    calc('#size', '#material', '#options','.promocode', '.calc-price');
});