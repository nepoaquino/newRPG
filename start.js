const startGameButton = document.getElementById("startGameButton");
const header = document.querySelector("header"); 
const characterSelection = document.getElementById("characterSelection");

startGameButton.addEventListener("click", () => {
  header.style.display = "none";
  characterSelection.style.display = "flex";
});