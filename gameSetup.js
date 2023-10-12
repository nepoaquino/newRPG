// Get the start button and different sections
const startBtn = document.getElementById("startGameButton");
const header = document.querySelector("header");
const genderSection = document.getElementById("genderSelection");
const genderText = document.getElementById("genderSelectText");
const maleBtn = document.getElementById("selectedGenderMale");
const femaleBtn = document.getElementById("selectedGenderFemale");
const classSection = document.getElementById("characterClass");

// Function to hide something
function hide(element) {
  element.style.display = "none";
}

// Function to show something
function show(element, display = "block") {
  element.style.display = display;
}

// When you click the start button
startBtn.addEventListener("click", () => {
  hide(header);
  show(genderText);
  show(genderSection, "flex"); // show as Flex
});

// When you click the male or female button
maleBtn.addEventListener("click", () => {
  genderText.innerHTML="Select Role";
  hide(genderSection);
  show(classSection, "grid"); // show as Grid
});

femaleBtn.addEventListener("click", () => {
  genderText.innerHTML="Select Role";
  hide(genderSection);
  show(classSection, "grid"); // show as Grid
});
