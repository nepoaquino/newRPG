// START GAME BUTTON
const startGameButton = document.getElementById("startGameButton");
const genderSelectText = document.getElementById("genderSelect");
const header = document.querySelector("header"); 
const characterSelection = document.getElementById("characterSelection");

startGameButton.addEventListener("click", () => {
  header.style.display = "none"; // HIDE <header>
  genderSelectText.style.display = "block"; // Display <h2>
  characterSelection.style.display = "flex"; // Display <div id="characterSelection">
});

// Prevent image dragging
document.addEventListener("dragstart", function(event) {
  if (event.target.classList.contains("no-drag")) {
      event.preventDefault();
  }
});
