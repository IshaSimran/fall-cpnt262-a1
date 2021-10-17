'use strict';

// Variables

const menu = document.querySelector('.menu');
const button = document.querySelector('.button');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const food = document.querySelectorAll('.food');

// Function Statement to display menu

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
  }
}

// Menu button clicker

button.addEventListener('click', toggleMenu);

food.forEach(
  function (food) {
    food.addEventListener('click', toggleMenu);
  }
);