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
  characterProfilePicture: document.getElementById("characterProfilePicture"),
};

// Initialize visibility
elements.gameSettingsContainer.style.display = "none";
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

elements.selectRoleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    show(elements.mainMenuContainer, "flex");
    show(elements.gameView);
    hide(elements.classSection);
    hide(elements.genderText);

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

elements.statsButton.addEventListener("click", toggleStats);
elements.settingsButton.addEventListener("click", toggleSettings);

// Functions
function selectGender(selectedGender) {
  elements.genderText.innerHTML = "Select Role";
  hide(elements.genderSection);
  show(elements.classSection, "grid");
  elements.warrior.src = `character/${selectedGender}/Warrior.png`;
  elements.mage.src = `character/${selectedGender}/Mage.png`;
  elements.assassin.src = `character/${selectedGender}/Assassin.png`;
  elements.archer.src = `character/${selectedGender}/Archer.png`;
  gender = selectedGender;
}

function toggleStats() {
  elements.statsOverview.style.display =
    elements.statsOverview.style.display === "none" ? "block" : "none";
  if (elements.statsOverview.style.display === "block") {
    updateStatsView();
  }
}

function toggleSettings() {
  elements.gameSettingsContainer.style.display =
    elements.gameSettingsContainer.style.display === "none" ? "grid" : "none";
  if (elements.statsOverview.style.display === "grid") {
    updateStatsView();
  }
}
