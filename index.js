const iconBar = document.querySelector(".fa-bars");
const menuBar = document.querySelector(".menu");

iconBar.addEventListener("click", () => {
  menuBar.classList.toggle("show-menu");
});