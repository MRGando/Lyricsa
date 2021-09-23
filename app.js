//Variables
const upperRow = document.querySelector(".upper");
const lowerRow = document.querySelector(".lower");
const menu = document.querySelector(".menu");
const sosaniBtn = document.querySelector(".sosani");
const ceremiBtn = document.querySelector(".ceremi");
const blackBtn = document.querySelector(".black");
const textarea = document.querySelector(".textarea");
const songTitle = document.querySelector(".songTitle");
const audio = document.querySelector(".audio");
const audioLink = document.querySelector(".audioLink");
const songLoadBtn = document.querySelector(".loadBtn");

//Toggling menu
const menuToggle = document
  .querySelector(".toggleMenu")
  .addEventListener("click", () => {
    toggleMenu();
  });
//loading song button
songLoadBtn.addEventListener("click", () => {
  loadLink();
});
//Theme_ActivatingButtons
sosaniBtn.addEventListener("click", () => {
  sosaniTheme();
});
ceremiBtn.addEventListener("click", () => {
  ceremiTheme();
});
blackBtn.addEventListener("click", () => {
  blackTheme();
});

//Themes
function sosaniTheme() {
  document.body.style.backgroundColor = "#E0BBe4";
  textarea.style.color = "#000000";
  songTitle.style.color = "#000000";
  textarea.style.border = "none";
  textarea.style.boxShadow = "0px 0px 30px -10px black";
  toggleMenu();
}
function ceremiTheme() {
  document.body.style.backgroundColor = "#FFDFD3";
  textarea.style.color = "#000000";
  textarea.style.border = "none";
  songTitle.style.color = "#000000";
  textarea.style.boxShadow = "0px 0px 30px -10px black";
  toggleMenu();
}
function blackTheme() {
  document.body.style.backgroundColor = "#000000";
  textarea.style.color = "#f5f5f5";
  textarea.style.borderColor = "#f5f5f5";
  songTitle.style.color = "#f5f5f5";
  textarea.style.border = "none";
  textarea.style.boxShadow = "0px 0px 30px -10px whitesmoke";
  toggleMenu();
}

//Functions
function toggleMenu() {
  upperRow.classList.toggle("row1");
  lowerRow.classList.toggle("row3");
  menu.classList.toggle("menuOn");
}

//Loading link to play
function loadLink() {
  audio.src = audioLink.value;
}
