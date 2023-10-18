// Get the start button and different sections
const header = document.querySelector("header");
const startBtn = document.getElementById("startGameButton");
const genderSection = document.getElementById("genderSelection");
const genderText = document.getElementById("genderSelectText");
const maleBtn = document.getElementById("selectedGenderMale");
const femaleBtn = document.getElementById("selectedGenderFemale");
const classSection = document.getElementById("characterClass");
const warrior = document.getElementById("warriorImage");
const mage = document.getElementById("mageImage");
const assasin = document.getElementById("assasinImage");
const archer = document.getElementById("archerImage");
const selectRoleButtons = document.querySelectorAll(".selectRoleButton");
const mainMenuContainer = document.getElementById("mainMenuContainer");

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

// When you click the male
maleBtn.addEventListener("click", () => {
  genderText.innerHTML = "Select Role";
  hide(genderSection);
  show(classSection, "grid"); // show as Grid
  warrior.src = "character/male/Warrior.png";
  mage.src = "character/male/Mage.png";
  assasin.src = "character/male/Assasin.png";
  archer.src = "character/male/Archer.png";
});

// When you click the female
femaleBtn.addEventListener("click", () => {
  genderText.innerHTML = "Select Role";
  hide(genderSection);
  show(classSection, "grid"); // show as Grid
  warrior.src = "character/female/Warrior.png";
  mage.src = "character/female/Mage.png";
  assasin.src = "character/female/Assasin.png";
  archer.src = "character/female/Archer.png";
});

selectRoleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    show(mainMenuContainer, "flex");
    hide(classSection);
    hide(genderText);
  });
});

// Expandable text function
// document.addEventListener("DOMContentLoaded", function () {
//   const expandableText = document.querySelectorAll(".expandable-text");

//   expandableText.forEach((text) => {
//     text.addEventListener("click", function () {
//       this.classList.toggle("expanded");
//     });
//   });
// });

// MAIN MENU NAVIGATION
document
  .getElementById("hamburgerButton")
  .addEventListener("click", function () {
    const menu = document.getElementById("menu");
    const expanded = this.getAttribute("aria-expanded") === "true";

    if (expanded) {
      menu.style.display = "none";
      this.setAttribute("aria-expanded", "false");
    } else {
      menu.style.display = "block";
      this.setAttribute("aria-expanded", "true");
    }
  });
