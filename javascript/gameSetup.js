// In another module, e.g., gameSetup.js or settings.js
import { saveStatsAndToggle } from "./stats.js";
import { updateVolumeText } from "./settings.js";

// Select elements
const elements = {
  header: document.querySelector("header"),
  startBtn: document.getElementById("startGameButton"),
  genderSection: document.getElementById("genderSelection"),
  genderText: document.getElementById("genderSelectText"),
  selectedGenderMale: document.getElementById("selectedGenderMale"),
  selectedGenderFemale: document.getElementById("selectedGenderFemale"),
  classSection: document.getElementById("characterClass"),
  warrior: document.getElementById("warriorImage"),
  mage: document.getElementById("mageImage"),
  assassin: document.getElementById("assassinImage"),
  archer: document.getElementById("archerImage"),
  selectRoleButtons: document.querySelectorAll(".selectRoleButton"),
  gameView: document.getElementById("gameView"),
  mainMenuContainer: document.getElementById("mainMenuContainer"),
  audio: document.getElementById("bgAudio"),
  settingsButton: document.querySelector("#settingsButton"),
  gameSettingsContainer: document.querySelector("#gameSettingsContainer"),
  statsButton: document.querySelector("#statsButton"),
  statsOverview: document.querySelector("#statsOverview"),
  skillsButton: document.querySelector("#skillsButton"),
  CharacterSkillsList: document.querySelector("#CharacterSkillsList"),

  characterProfilePicture: document.getElementById("characterProfilePicture"),
};
export let audio = elements.audio;

// TOGGLE BUTTONS
elements.statsButton.addEventListener("click", toggleStats); //STATS BUTTON
elements.skillsButton.addEventListener("click", toggleSkills); //SKILL BUTTON
elements.settingsButton.addEventListener("click", toggleSettings); //SETTINGS BUTTON

// Initialize visibility
elements.gameSettingsContainer.style.display = "none";
elements.CharacterSkillsList.style.display = "none";
elements.statsOverview.style.display = "none";

let gender = "";
let selectedCharacterRoles = "";

// Function to hide something
function hide(element) {
  element.style.display = "none";
}

// Function to show something
function show(element, display = "block") {
  element.style.display = display;
}

// Event listeners
elements.startBtn.addEventListener("click", () => {
  hide(elements.header);
  show(elements.genderText);
  show(elements.genderSection, "flex");
  elements.audio.volume = 1;
  elements.audio.play();
});

elements.selectedGenderMale.addEventListener("click", () => {
  selectGender("male");
});

elements.selectedGenderFemale.addEventListener("click", () => {
  selectGender("female");
});

// GENDER SELECTION
function selectGender(selectedGender) {
  elements.genderText.innerHTML = "Select Role";
  elements.genderText.style.margin = "10px 0";
  hide(elements.genderSection);
  show(elements.classSection, "grid");
  elements.warrior.src = `character/${selectedGender}/Warrior.png`;
  elements.mage.src = `character/${selectedGender}/Mage.png`;
  elements.assassin.src = `character/${selectedGender}/Assassin.png`;
  elements.archer.src = `character/${selectedGender}/Archer.png`;
  gender = selectedGender;
}

// ROLE SELECTION
elements.selectRoleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    show(elements.mainMenuContainer, "flex");
    show(elements.gameView);
    hide(elements.classSection);
    hide(elements.genderText);
    saveStatsAndToggle();

    const roleToImage = {
      WarriorSelected: "Warrior.png",
      MageSelected: "Mage.png",
      AssassinSelected: "Assassin.png",
      ArcherSelected: "Archer.png",
    };

    if (roleToImage.hasOwnProperty(button.id)) {
      selectedCharacterRoles = roleToImage[button.id];
    }

    elements.characterProfilePicture.src = `character/${gender}/${selectedCharacterRoles}`;
  });
});

function toggleStats() {
  elements.statsOverview.style.display =
    elements.statsOverview.style.display === "none" ? "block" : "none";
}

function toggleSkills() {
  elements.CharacterSkillsList.style.display =
    elements.CharacterSkillsList.style.display === "none" ? "block" : "none";
}

function toggleSettings() {
  elements.gameSettingsContainer.style.display =
    elements.gameSettingsContainer.style.display === "none" ? "block" : "none";
  updateVolumeText();
}
