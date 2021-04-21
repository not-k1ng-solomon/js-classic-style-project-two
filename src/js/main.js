import modals from "./module/modals";
import sliders from "./module/sliders";
import forms from "./module/forms";


window.addEventListener('DOMContentLoaded', ()=>{
   "use strict";
    document.body.style.overflowX = "hidden";
    modals();
    sliders('.feedback-slider-item','','.main-prev-btn', '.main-next-btn',true);
    sliders('.main-slider-item','vertical');
    forms();

});