// Get the start button and different sections
const startBtn = document.getElementById("startGameButton");
const header = document.querySelector("header");
const genderSection = document.getElementById("genderSelection");
const genderText = document.getElementById("genderSelectText");
const maleBtn = document.getElementById("selectedGenderMale");
const femaleBtn = document.getElementById("selectedGenderFemale");
const classSection = document.getElementById("characterClass");
const warrior = document.getElementById("warriorImage");
const mage = document.getElementById("mageImage");
const assasin = document.getElementById("assasinImage");
const archer = document.getElementById("archerImage");

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
  warrior.src="character/male/Warrior.jpg";
  mage.src="character/male/Mage.jpg";
  assasin.src="character/male/Assasin.jpg";
  archer.src="character/male/Archer.jpg";
 
});

femaleBtn.addEventListener("click", () => {
  genderText.innerHTML="Select Role";
  hide(genderSection);
  show(classSection, "grid"); // show as Grid
  warrior.src="character/female/Warrior.jpg";
  mage.src="character/female/Mage.jpg";
  assasin.src="character/female/Assasin.jpg";
  archer.src="character/female/Archer.jpg";
});



// Expandable text function
document.addEventListener("DOMContentLoaded", function () {
  const expandableText = document.querySelectorAll(".expandable-text");

  expandableText.forEach((text) => {
    text.addEventListener("click", function () {
      this.classList.toggle("expanded");
    });
  });
});
