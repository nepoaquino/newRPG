// Variables for DOM elements
const statsOverview = document.querySelector("#statsOverview");
const statsButton = document.querySelector("#statsButton");
const statsConfirmButton = document.querySelector("#statsConfirm");
const availablePointsElement = document.querySelector("#availablePointsValue");

// Rest of your code remains the same.

// Initial available points
let availablePoints = 10;

// Character stats
let stats = {
  str: 0,
  int: 0,
  vit: 0,
  agi: 0,
  currentHP: 80,
  currentMP: 80,
  permanentHP: 100,
  permanentMP: 100,
  currentExperience: 0,
  totalExperience: 100,
  level: 1,
  gold: 0,
  physicalDmg: 0,
  magicDmg: 0,
  hitRate: 0,
  physicalDef: 0,
  evasion: 0,
  magicDef: 0,
  blockRate: 0,
  critRate: 0,
  resistance: 0,
  critDmg: 100,
};

// Permanently allocated stats object
let permanentlyAllocatedStats = { ...stats };

// Function to update the stats view with current allocations
function updateStatsView() {
  // Extract stats for easier usage
  const { vit, int, str, agi } = stats;

  // Apply bonuses for VIT and INT
  stats.currentHP =  80 + vit;
  stats.permanentHP = 100 + vit;
  stats.currentMP = 80 + int;
  stats.permanentMP = 100 + int;

  // Calculate the bonuses for each allocated stat
  stats.physicalDmg = str;
  stats.physicalDef = str + vit;
  stats.magicDmg = int;
  stats.magicDef = vit + int;
  stats.critRate = (0.1 * 0.1).toFixed(1); // Round to 1 decimal place
  stats.critDmg = 100 + int * 2;
  stats.hitRate = agi;
  stats.blockRate = str + vit;
  stats.resistance = agi;
  stats.evasion = agi * 2;

  // Update the elements showing different stats
  document.querySelector("#strValue").textContent = str;
  document.querySelector("#intValue").textContent = int;
  document.querySelector("#vitValue").textContent = vit;
  document.querySelector("#agiValue").textContent = agi;
  document.querySelector("#currentHP").textContent = `${stats.currentHP}/`;
  document.querySelector("#currentMP").textContent = `${stats.currentMP}/`;
  document.querySelector("#permanentHP").textContent = stats.permanentHP;
  document.querySelector("#permanentMP").textContent = stats.permanentMP;
  document.querySelector("#physicalDmg").textContent = stats.physicalDmg;
  document.querySelector("#magicDmg").textContent = stats.magicDmg;
  document.querySelector("#hitRate").textContent = stats.hitRate;
  document.querySelector("#physicalDef").textContent = stats.physicalDef;
  document.querySelector("#evasion").textContent = stats.evasion;
  document.querySelector("#magicDef").textContent = stats.magicDef;
  document.querySelector("#blockRate").textContent = stats.blockRate;
  document.querySelector("#critRate").textContent = `${stats.critRate}%`;
  document.querySelector("#resistance").textContent = stats.resistance;
  document.querySelector("#critDmg").textContent = `${stats.critDmg}%`;
}

// Function to handle stat modifications
function handleStatModification(event) {
  if (event.target.tagName === "BUTTON") {
    const stat = event.target.dataset.stat;

    // Check if the plus button is clicked and there are available points
    if (event.target.classList.contains("plusButton") && availablePoints > 0) {
      stats[stat]++; // Increment the stat value
      availablePoints--; // Decrease available points
    } else if (
      event.target.classList.contains("minusButton") &&
      stats[stat] > permanentlyAllocatedStats[stat]
    ) {
      stats[stat]--; // Decrement the stat value
      availablePoints++; // Increase available points
    }

    // Update the available points display
    availablePointsElement.textContent = availablePoints;

    // Update the stats view to reflect the changes
    updateStatsView();
  }
}

statsOverview.style.display = "none";
// Function to toggle the visibility of statsOverview
function toggleStats() {
  if (statsOverview.style.display === "none") {
    statsOverview.style.display = "block";
    updateStatsView(); // Update the stats view with current allocations
  } else {
    statsOverview.style.display = "none";
  }
}

// Function to save the stats allocations and toggle the visibility of statsOverview
function saveStatsAndToggle() {
  // Update the permanently allocated stats
  permanentlyAllocatedStats = { ...stats };

  // Hide the statsOverview
  statsOverview.style.display = "none";

  // Auto Update the character information
  updateCharacterInformation();
}

// Event delegation for plus and minus buttons
const statModifiers = document.querySelector("#statModifiers");
statModifiers.addEventListener("click", handleStatModification);

// Event listener for the statsButton click
statsButton.addEventListener("click", toggleStats);

// Event listener for the statsConfirmButton click
statsConfirmButton.addEventListener("click", saveStatsAndToggle);

// Event listener for the "CANCEL" button
const statsCancelButton = document.querySelector("#statsCancel");
statsCancelButton.addEventListener("click", function () {
  // Hide the statsOverview
  statsOverview.style.display = "none";
});
