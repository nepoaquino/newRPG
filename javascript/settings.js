// In another module (e.g., volumeController.js)
import { audio } from "./gameSetup.js";

const storyParagraphContainer = document.querySelector(
  "#storyParagraphContainer"
);
const increaseTextSizeButton = document.querySelector(
  "#increaseTextSizeButton"
);
const decreaseTextSizeButton = document.querySelector(
  "#decreaseTextSizeButton"
);

const fontSizeText = document.querySelector("#fontSizeText");
const volumeUP = document.querySelector("#volumeUP");
const volumeDOWN = document.querySelector("#VolumeDOWN");
const volumePercentage = document.querySelector("#volumePercentage");

let currentFontSize = 1.5;
let currentFontSizeText = 10;
let currentVolumeLevel = 1;

//TEXT SIZE CONTROLLER/OPTIONS
function updateFontSize() {
  let roundedFontSize = currentFontSize.toFixed(1); // Calculate the rounded font size
  storyParagraphContainer.style.fontSize = `${roundedFontSize}rem`; // Update the font size
  fontSizeText.innerHTML = `${currentFontSizeText}`; // Update the displayed font size
}

function increaseTextSize() {
  if (currentFontSize < 2) {
    currentFontSize += 0.1;
    currentFontSizeText++;
    updateFontSize(); // Update the font size and display
  }
}

function decreaseTextSize() {
  if (currentFontSize > 1) {
    currentFontSize -= 0.1;
    currentFontSizeText--;
    updateFontSize(); // Update the font size and display
  }
}

// VOLUME CONTROLLER/OPTIONS
export function updateVolumeText() {
  volumePercentage.innerHTML = `${Math.round(currentVolumeLevel * 100)}%`;
}

function increaseVolume() {
  if (currentVolumeLevel < 1) {
    currentVolumeLevel += 0.1;
    if (currentVolumeLevel > 1) {
      currentVolumeLevel = 1; // Ensure volume doesn't go below 0
    }
    audio.volume = currentVolumeLevel;
    updateVolumeText();
  }
}

function decreaseVolume() {
  if (currentVolumeLevel > 0) {
    currentVolumeLevel -= 0.1;
    if (currentVolumeLevel < 0) {
      currentVolumeLevel = 0; // Ensure volume doesn't go below 0
    }
    audio.volume = currentVolumeLevel;
    updateVolumeText();
  }
}

// Event listeners
increaseTextSizeButton.addEventListener("click", () => {
  increaseTextSize();
});

decreaseTextSizeButton.addEventListener("click", () => {
  decreaseTextSize();
});

volumeUP.addEventListener("click", () => {
  increaseVolume();
});

volumeDOWN.addEventListener("click", () => {
  decreaseVolume();
});

const confirmSettingsButton = document.querySelector("#confirmSettingsButton");

confirmSettingsButton.addEventListener("click", closeSettingsMenu);

const resumeButton = document.querySelector("#resumeButton");

function closeSettingsMenu() {
  gameSettingsContainer.style.display = "none";
} // CONFIRM AND CLOSE THE SETTINGS MENU

resumeButton.addEventListener("click", closeSettingsMenu);
