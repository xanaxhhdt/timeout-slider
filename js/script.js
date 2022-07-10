'use strict';

const slide = document.querySelectorAll('.slide');

let time = 2000;
let activeSlide = 3;
slide[activeSlide].classList.add('slide_active');

function changeSlide() {
   if (activeSlide < slide.length - 1) {
      slide[activeSlide].classList.remove('slide_active');
      activeSlide++;
      slide[activeSlide].classList.add('slide_active');
   } else {
      slide[activeSlide].classList.remove('slide_active');
      activeSlide = 0;
      slide[activeSlide].classList.add('slide_active');
   }
   setTimeout(changeSlide, time);
}
changeSlide();