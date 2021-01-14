var deButton = document.querySelector("nav button");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}

// bron: is van sanne zijn codepen. https://codepen.io/shooft/pen/BaKGKwm