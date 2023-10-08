// Variables for DOM elements
const statsOverview = document.querySelector("#statsOverview");
const statsButton = document.querySelector("#statsButton");
const statsConfirmButton = document.querySelector("#statsConfirm");
const availablePointsElement = document.querySelector("#availablePointsValue");

// Initial available points
let availablePoints = 10;

// Character stats
let stats = {
  str: 0,
  dex: 0,
  int: 0,
  vit: 0,
  att: 0,
  agi: 0,
  currentHP: 100,
  currentMP: 100,
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

// Function to update the displayed character information
function updateCharacterInformation() {
  // Extract character information
  const {
    currentHP,
    permanentHP,
    currentMP,
    permanentMP,
    currentExperience,
    totalExperience,
    level,
    gold,
  } = permanentlyAllocatedStats;

  // Update elements showing different stats
  document.querySelector("#displayedHealth").textContent = `Health: ${currentHP} / ${permanentHP}`;
  document.querySelector("#displayedMana").textContent = `Mana: ${currentMP} / ${permanentMP}`;
  document.querySelector("#displayedExperience").textContent = `Experience: ${currentExperience} / ${totalExperience}`;
  document.querySelector("#displayedLevel").textContent = `Level: ${level}`;
  document.querySelector("#displayedGold").textContent = `Gold: ${gold}`;
}

// Function to update the stats view with current allocations
function updateStatsView() {
  // Extract stats for easier usage
  const { vit, int, str, att, dex, agi } = stats;

  // Apply bonuses for VIT and INT
  stats.currentHP = 100 + vit;
  stats.permanentHP = 100 + vit;
  stats.currentMP = 100 + int;
  stats.permanentMP = 100 + int;

  // Calculate the bonuses for each allocated stat
  stats.physicalDmg = str + att;
  stats.physicalDef = str + vit;
  stats.magicDmg = int;
  stats.magicDef = vit + int;
  stats.critRate = (att * 0.1 + dex * 0.1).toFixed(1); // Round to 1 decimal place
  stats.critDmg = 100 + int + att * 2;
  stats.hitRate = dex + agi;
  stats.blockRate = str + vit;
  stats.resistance = dex;
  stats.evasion = agi * 2;

  // Update the elements showing different stats
  document.querySelector("#strValue").textContent = str;
  document.querySelector("#dexValue").textContent = dex;
  document.querySelector("#intValue").textContent = int;
  document.querySelector("#vitValue").textContent = vit;
  document.querySelector("#attValue").textContent = att;
  document.querySelector("#agiValue").textContent = agi;
  document.querySelector("#currentHP").textContent = `${stats.currentHP} /`;
  document.querySelector("#currentMP").textContent = `${stats.currentMP} /`;
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

  // Temporarily change the font color to green for the updated stat values
  for (const stat in stats) {
    const statElement = document.querySelector(`#${stat}Value`);
    if (stats[stat] !== permanentlyAllocatedStats[stat]) {
      statElement.classList.add("temp-green");
    } else {
      statElement.classList.remove("temp-green");
    }
  }
}

// Function to handle stat modifications
function handleStatModification(event) {
  if (event.target.tagName === "BUTTON") {
    const stat = event.target.dataset.stat;

    // Check if the plus button is clicked and there are available points
    if (event.target.classList.contains("plusButton") && availablePoints > 0) {
      stats[stat]++; // Increment the stat value
      availablePoints--; // Decrease available points
    } else if (event.target.classList.contains("minusButton") && stats[stat] > permanentlyAllocatedStats[stat]) {
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

// Initialize the character information
updateCharacterInformation();
