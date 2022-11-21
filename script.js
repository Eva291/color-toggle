const bodyElement = document.body;
const menu = document.getElementById("menu");

function dropMenu() {
  menu.classList.toggle("show");
}

function closeMenu() {
  menu.classList.remove("show");
}

function changeBodyBg(color) {
  bodyElement.style.background = color;
  closeMenu();
}
