// DOM elements
const statsConfirmButton = document.querySelector("#statsConfirm");
const availablePointsElement = document.querySelector("#availablePointsValue");
const statModifiers = document.querySelector("#statModifiers");
const statsCancelButton = document.querySelector("#statsCancel");

let INITIAL_AVAILABLE_POINTS = 5;
const INITIAL_HP = 100;
const INITIAL_MP = 100;
const INITIAL_CRIT_DMG = 100;
const BASE_CRIT_RATE = 0.1;

let availablePoints = INITIAL_AVAILABLE_POINTS;

// Character stats (unchanged)
let stats = {
  str: 0,
  int: 0,
  vit: 0,
  agi: 0,
  currentHP: INITIAL_HP,
  currentMP: INITIAL_MP,
  permanentHP: INITIAL_HP,
  permanentMP: INITIAL_MP,
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
  critDmg: INITIAL_CRIT_DMG,
};
// Permanently allocated stats object
let permanentlyAllocatedStats = { ...stats };

// Event listeners
statModifiers.addEventListener("click", handleStatModification);

statsConfirmButton.addEventListener("click", saveStatsAndToggle);
statsCancelButton.addEventListener("click", revertStatsAndToggle);

// Event listeners for character selection
document
  .getElementById("WarriorSelected")
  .addEventListener("click", () => selectCharacter(3, 1, 4, 2));
document
  .getElementById("MageSelected")
  .addEventListener("click", () => selectCharacter(2, 4, 1, 3));
document
  .getElementById("AssassinSelected")
  .addEventListener("click", () => selectCharacter(1, 2, 3, 4));
document
  .getElementById("ArcherSelected")
  .addEventListener("click", () => selectCharacter(2, 3, 1, 4));

// Function to update the stats view with current allocations
function updateStatsView() {
  const { vit, int, str, agi } = stats;
  stats.currentHP = INITIAL_HP + vit * 5;
  stats.permanentHP = INITIAL_HP + vit * 5;
  stats.currentMP = INITIAL_MP + int * 5;
  stats.permanentMP = INITIAL_MP + int * 5;
  stats.physicalDmg = str;
  stats.physicalDef = str + vit;
  stats.magicDmg = int * 1.5;
  stats.magicDef = vit + int * 1.5;
  stats.critRate = parseFloat(
    (BASE_CRIT_RATE * BASE_CRIT_RATE + agi / 5).toFixed(1)
  );
  stats.critDmg = INITIAL_CRIT_DMG + int * 2;
  stats.hitRate = agi;
  stats.blockRate = str + vit;
  stats.resistance = agi + vit;
  stats.evasion = agi;

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

  // Temporarily change the font color to green for the updated stat values
  for (const stat in stats) {
    const statElement = document.querySelector(`#${stat}Value`);
    if (statElement) {
      // Add this conditional check
      if (stats[stat] !== permanentlyAllocatedStats[stat]) {
        statElement.classList.add("temp-color");
      } else {
        statElement.classList.remove("temp-color");
      }
    }
  }

  // Temporarily change the font color to green for all <span> elements inside #statsView
  const statValueElements = document.querySelectorAll(".stat-value");
  if (statValueElements) {
    statValueElements.forEach((statElement) => {
      const statId = statElement.id;
      if (statElement && stats[statId] !== permanentlyAllocatedStats[statId]) {
        statElement.classList.add("temp-color");
      } else if (statElement) {
        statElement.classList.remove("temp-color");
      }
    });
  }

  Health_Percentage();
  Mana_Percentage();
}

// Function to handle stat modifications
function handleStatModification(event) {
  if (event.target.tagName === "BUTTON") {
    const stat = event.target.dataset.stat;

    if (event.target.classList.contains("plusButton") && availablePoints > 0) {
      stats[stat]++;
      availablePoints--;
    } else if (
      event.target.classList.contains("minusButton") &&
      stats[stat] > permanentlyAllocatedStats[stat]
    ) {
      stats[stat]--;
      availablePoints++;
    }

    availablePointsElement.textContent = availablePoints;
    updateStatsView();
  }
}

// Function to set character stats and update view
function selectCharacter(vitValue, intValue, strValue, agiValue) {
  stats.vit = vitValue;
  stats.int = intValue;
  stats.str = strValue;
  stats.agi = agiValue;

  updateStatsView();
}

// Save stats and toggle visibility
function saveStatsAndToggle() {
  permanentlyAllocatedStats = { ...stats };
  statsOverview.style.display = "none";
  availablePointsElement.textContent = availablePoints;
  INITIAL_AVAILABLE_POINTS = availablePoints;
  updateStatsView();
}

// Revert stats and toggle visibility
function revertStatsAndToggle() {
  stats = { ...permanentlyAllocatedStats };
  availablePoints = INITIAL_AVAILABLE_POINTS;
  statsOverview.style.display = "none";
  availablePointsElement.textContent = availablePoints;
  updateStatsView();
}

const healthElements = document.querySelectorAll(".health");
const HP_PercentageText = document.querySelector("#HP_Percentage");

function Health_Percentage() {
  // Calculate the HP percentage
  const percentage =
    (stats.currentHP / permanentlyAllocatedStats.currentHP) * 100;

  // Loop through each health element and update its width
  healthElements.forEach((healthElement) => {
    healthElement.style.width = `${percentage.toFixed(0)}%`;
  });

  // Update the HP percentage text
  // HP_PercentageText.innerHTML = `${percentage.toFixed(0)}%`;

  HP_PercentageText.innerHTML = `${stats.currentHP} / ${permanentlyAllocatedStats.currentHP}`;
}

const manaElements = document.querySelectorAll(".mana");
const MP_PercentageText = document.querySelector("#MP_Percentage");

function Mana_Percentage() {
  // Calculate the HP percentage
  const percentage =
    (stats.currentMP / permanentlyAllocatedStats.currentMP) * 100;

  // Loop through each health element and update its width
  manaElements.forEach((manaElement) => {
    manaElement.style.width = `${percentage.toFixed(0)}%`;
  });

  MP_PercentageText.innerHTML = `${stats.currentMP} / ${permanentlyAllocatedStats.currentMP}`;
}
