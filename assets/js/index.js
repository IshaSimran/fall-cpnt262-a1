'use strict';

// Variables

const menu = document.querySelector('.menu');
const listItem = document.querySelectorAll('.listItem');
const button = document.querySelector('.button');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

// Function Statement 

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

// Event Listeners

button.addEventListener('click', toggleMenu);

listItem.forEach(
  function (listItem) {
    listItem.addEventListener('click', toggleMenu);
  }
)