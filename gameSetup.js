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
const hamburgerButton = document.getElementById("hamburgerButton");
const selectRoleButtons = document.getElementsByClassName("selectRoleButton");

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
  genderText.innerHTML = "Select Role";
  hide(genderSection);
  show(classSection, "grid"); // show as Grid
  warrior.src = "character/male/Warrior.png";
  mage.src = "character/male/Mage.png";
  assasin.src = "character/male/Assasin.png";
  archer.src = "character/male/Archer.png";
});

femaleBtn.addEventListener("click", () => {
  genderText.innerHTML = "Select Role";
  hide(genderSection);
  show(classSection, "grid"); // show as Grid
  warrior.src = "character/female/Warrior.png";
  mage.src = "character/female/Mage.png";
  assasin.src = "character/female/Assasin.png";
  archer.src = "character/female/Archer.png";
});

// Hamburger MENU
document
  .getElementById("hamburgerButton")
  .addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const expanded = this.classList.toggle("active");

    if (expanded) {
      this.textContent = "✕"; // Use a close symbol (✕) when the menu is active
    } else {
      this.textContent = "☰"; // Revert to the hamburger icon (☰) when the menu is closed
    }

    menu.classList.toggle("active");
    event.stopPropagation(); // Prevent the click event from propagating to the document.
  });

// Prevent clicks inside the menu from closing the menu.
// document.getElementById("menu").addEventListener("click", function (event) {
//   event.stopPropagation();
// });



// Convert HTMLCollection to an array and loop through each button
Array.from(selectRoleButtons).forEach((button) => {
  button.addEventListener("click", () => {
    show(hamburgerButton);
    hide(classSection); // Now classSection is defined and can be accessed
    hide(genderText); // Now genderText is defined and can be accessed
  });
});
