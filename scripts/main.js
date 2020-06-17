'use strict';

const carousel = document.querySelector('#carousel');
const dots = document.querySelector('#dots');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let curentSlide = 0;

function createHandler(control) {
  let moveSlide;

  switch (control) {
    case 'prev':
      moveSlide = (a, b) => {
        return a - b;
      };
      break;
    case 'next':
      moveSlide = (a, b) => {
        return a + b;
      };
      break;
  }

  return () => {
    if (!carousel.children[moveSlide(curentSlide, 1)]) {
      return;
    }

    const transformation = carousel.children[0].getBoundingClientRect().left
    - carousel.children[moveSlide(curentSlide, 1)].getBoundingClientRect().left;

    carousel.style.transform = `translate(${transformation}px)`;
    dots.children[curentSlide].classList.remove('carousel__dot_active');
    curentSlide = moveSlide(curentSlide, 1);
    dots.children[curentSlide].classList.add('carousel__dot_active');
  };
}

next.addEventListener('click', createHandler('next'));
prev.addEventListener('click', createHandler('prev'));
