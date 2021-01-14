var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}

// bron: is van sanne zijn codepen. https://codepen.io/shooft/pen/BaKGKwm

// var ulElement = document.querySelector('header nav ul:first-of-type');
// var button = document.querySelector('nav button');

// function toggleClass() {
// ulElement.classList.toggle("menu")
// }

// button.addEventListener('click', toggleClass);
