// Get the start button and different sections
const header = document.querySelector("header");
const startBtn = document.getElementById("startGameButton");
const genderSection = document.getElementById("genderSelection");
const genderText = document.getElementById("genderSelectText");
const selectedGenderMale = document.getElementById("selectedGenderMale");
const selectedGenderFemale = document.getElementById("selectedGenderFemale");
const classSection = document.getElementById("characterClass");
const warrior = document.getElementById("warriorImage");
const mage = document.getElementById("mageImage");
const assassin = document.getElementById("assassinImage");
const archer = document.getElementById("archerImage");
const selectRoleButtons = document.querySelectorAll(".selectRoleButton");
// const gameOverview = document.getElementById("gameOverview");
const gameView = document.getElementById("gameView");
const mainMenuContainer = document.getElementById("mainMenuContainer");

let gender = "";
const characterProfilePicture = document.getElementById(
  "characterProfilePicture"
);

let selectedCharacterRoles = "";

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
selectedGenderMale.addEventListener("click", () => {
  genderText.innerHTML = "Select Role";
  hide(genderSection);
  show(classSection, "grid"); // show as Grid
  warrior.src = "character/male/Warrior.png";
  mage.src = "character/male/Mage.png";
  assassin.src = "character/male/Assassin.png";
  archer.src = "character/male/Archer.png";
  gender = "male";
});

// When you click the female
selectedGenderFemale.addEventListener("click", () => {
  genderText.innerHTML = "Select Role";
  hide(genderSection);
  show(classSection, "grid"); // show as Grid
  warrior.src = "character/female/Warrior.png";
  mage.src = "character/female/Mage.png";
  assassin.src = "character/female/Assassin.png";
  archer.src = "character/female/Archer.png";
  gender = "female";
});

// WHEN USER SELECT CHARACTER ROLE CHANGE THE MAIN MENU IMAGE ACCORDINGLY
selectRoleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    show(mainMenuContainer, "flex");
    // show(gameOverview, "flex");
    show(gameView);
    hide(classSection);
    hide(genderText);
    permanentlyAllocatedStats = { ...stats };

    // Define a map for character role to image filename
    const roleToImage = {
      WarriorSelected: "Warrior.png",
      MageSelected: "Mage.png",
      AssassinSelected: "Assassin.png",
      ArcherSelected: "Archer.png",
    };

    // Check if the button's ID is in the map, and set the selectedCharacterRoles accordingly
    if (roleToImage.hasOwnProperty(button.id)) {
      selectedCharacterRoles = roleToImage[button.id];
    }

    characterProfilePicture.src = `character/${gender}/${selectedCharacterRoles}`;
  });
});
