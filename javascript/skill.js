const imageSkill1 = document.querySelector("#imageSkill1");
const imageSkill2 = document.querySelector("#imageSkill2");
const imageSkill3 = document.querySelector("#imageSkill3");
const imageSkill4 = document.querySelector("#imageSkill4");
const imageSkill5 = document.querySelector("#imageSkill5");

const skillName1 = document.querySelector("#skillName1");
const skillName2 = document.querySelector("#skillName2");
const skillName3 = document.querySelector("#skillName3");
const skillName4 = document.querySelector("#skillName4");
const skillName5 = document.querySelector("#skillName5");

const skillDescription1 = document.querySelector("#skillDescription1");
const skillDescription2 = document.querySelector("#skillDescription2");
const skillDescription3 = document.querySelector("#skillDescription3");
const skillDescription4 = document.querySelector("#skillDescription4");
const skillDescription5 = document.querySelector("#skillDescription5");

const manaCost1 = document.querySelector("#manaCost1");
const manaCost2 = document.querySelector("#manaCost2");
const manaCost3 = document.querySelector("#manaCost3");
const manaCost4 = document.querySelector("#manaCost4");
const manaCost5 = document.querySelector("#manaCost5");

const cooldown1 = document.querySelector("#cooldown1");
const cooldown2 = document.querySelector("#cooldown2");
const cooldown3 = document.querySelector("#cooldown3");
const cooldown4 = document.querySelector("#cooldown4");
const cooldown5 = document.querySelector("#cooldown5");

//WARRIOR SKILLS LIST
document.getElementById("WarriorSelected").addEventListener("click", () => {
  //First Skill Properties
  skillName1.innerHTML = `Cleave`;
  imageSkill1.src = `icon/skills/warrior/cleave.PNG`;
  skillDescription1.innerHTML = `The warrior delivers a powerful, sweeping attack to enemy dealing
  (20 + 50% Total STR) Physical Damage.`;
  manaCost1.innerHTML = `Mana Cost: 15`;
  cooldown1.innerHTML = `Cooldown: 2 Turns`;

  //Second Skill Properties
  skillName2.innerHTML = `Crushing Blow`;
  imageSkill2.src = `icon/skills/warrior/blow.PNG`;
  skillDescription2.innerHTML = `The warrior strikes an opponent with immense force, dealing (30 +
    100% Total STR) Physical Damage. This attack also has a 50% chance
    to stun the opponent for 1 turn.`;
  manaCost2.innerHTML = `Mana Cost: 20`;
  cooldown2.innerHTML = `Cooldown: 3 Turns`;

  //Third Skill Properties
  skillName3.innerHTML = `Raging Frenzy`;
  imageSkill3.src = `icon/skills/warrior/rage.PNG`;
  skillDescription3.innerHTML = `The warrior enters a state of pure rage, increasing their Total
  Attack Damage by 30% for 3 turns.`;
  manaCost3.innerHTML = `Mana Cost: 20`;
  cooldown3.innerHTML = `Cooldown: 3 Turns`;

  //Fourth Skill Properties
  skillName4.innerHTML = `Mend Wounds`;
  imageSkill4.src = `icon/skills/warrior/heal.PNG`;
  skillDescription4.innerHTML = `Restores 30% of the warrior's health, allowing them to recover
  during battles.`;
  manaCost4.innerHTML = `Mana Cost: 25`;
  cooldown4.innerHTML = `Cooldown: 5 Turns`;

  //Fifth Skill Properties
  skillName5.innerHTML = `Defensive Stance`;
  imageSkill5.src = `icon/skills/warrior/defensive.PNG`;
  skillDescription5.innerHTML = `Boosts the warrior's defenses for 50% in 3 turns while reducing
  their damage output by 50% for the same duration.`;
  manaCost5.innerHTML = `Mana Cost: 20`;
  cooldown5.innerHTML = `Cooldown: 4 Turns`;
});

// MAGE SKILLS LIST
document.getElementById("MageSelected").addEventListener("click", () => {
  // First Skill Properties
  skillName1.innerHTML = `Fireball`;
  imageSkill1.src = `icon/skills/mage/fireball.PNG`;
  skillDescription1.innerHTML = `The mage hurls a searing fireball at the enemy, dealing (25 + 60% Total INT) Magic Damage.`;
  manaCost1.innerHTML = `Mana Cost: 20`;
  cooldown1.innerHTML = `Cooldown: 2 Turns`;

  // Second Skill Properties
  skillName2.innerHTML = `Frosbite`;
  imageSkill2.src = `icon/skills/mage/frostbite.PNG`;
  skillDescription2.innerHTML = `Encases an enemy unit in ice, dealing (45 + 90% Total INT) Magic Damage and freezing them for 1 turn.`;
  manaCost2.innerHTML = `Mana Cost: 40`;
  cooldown2.innerHTML = `Cooldown: 5 Turns`;

  // Third Skill Properties
  skillName3.innerHTML = `Mana Shield`;
  imageSkill3.src = `icon/skills/mage/manaShield.PNG`;
  skillDescription3.innerHTML = `Generates a protective barrier that transforms incoming damage into mana over a duration of 3 turns.`;
  manaCost3.innerHTML = `Mana Cost: 50`;
  cooldown3.innerHTML = `Cooldown: 4 Turns`;

  // Fourth Skill Properties
  skillName4.innerHTML = `Shadowmute`;
  imageSkill4.src = `icon/skills/mage/shadowMute.PNG`;
  skillDescription4.innerHTML = `The mage releases a powerful burst of magical energy, dealing (40 + 90% Total INT) Magic Damage to a single target and silencing them for 1 turn, preventing them from using spells.`;
  manaCost4.innerHTML = `Mana Cost: 45`;
  cooldown4.innerHTML = `Cooldown: 3 Turns`;

  // Fifth Skill Properties
  skillName5.innerHTML = `Life Drain`;
  imageSkill5.src = `icon/skills/mage/lifeDrain.PNG`;
  skillDescription5.innerHTML = `Taps into the dark arts, draining (25 + 50% Total INT) health from the enemy and adding it to your own HP pool.`;
  manaCost5.innerHTML = `Mana Cost: 35`;
  cooldown5.innerHTML = `Cooldown: 4 Turns`;
});

// ASSASSIN SKILLS LIST
document.getElementById("AssassinSelected").addEventListener("click", () => {
  // First Skill Properties
  skillName1.innerHTML = `lorem ipsum`;
  imageSkill1.src = `lorem ipsum`;
  skillDescription1.innerHTML = `lorem ipsum`;
  manaCost1.innerHTML = `lorem ipsum`;
  cooldown1.innerHTML = `lorem ipsum`;

  // Second Skill Properties
  skillName2.innerHTML = `lorem ipsum`;
  imageSkill2.src = `lorem ipsum`;
  skillDescription2.innerHTML = `lorem ipsum`;
  manaCost2.innerHTML = `lorem ipsum`;
  cooldown2.innerHTML = `lorem ipsum`;

  // Third Skill Properties
  skillName3.innerHTML = `lorem ipsum`;
  imageSkill3.src = `lorem ipsum`;
  skillDescription3.innerHTML = `lorem ipsum`;
  manaCost3.innerHTML = `lorem ipsum`;
  cooldown3.innerHTML = `lorem ipsum`;

  // Fourth Skill Properties
  skillName4.innerHTML = `lorem ipsum`;
  imageSkill4.src = `lorem ipsum`;
  skillDescription4.innerHTML = `lorem ipsum`;
  manaCost4.innerHTML = `lorem ipsum`;
  cooldown4.innerHTML = `lorem ipsum`;

  // Fifth Skill Properties
  skillName5.innerHTML = `lorem ipsum`;
  imageSkill5.src = `lorem ipsum`;
  skillDescription5.innerHTML = `lorem ipsum`;
  manaCost5.innerHTML = `lorem ipsum`;
  cooldown5.innerHTML = `lorem ipsum`;
});

// ARCHER SKILLS LIST
document.getElementById("ArcherSelected").addEventListener("click", () => {
  // First Skill Properties
  skillName1.innerHTML = `lorem ipsum`;
  imageSkill1.src = `lorem ipsum`;
  skillDescription1.innerHTML = `lorem ipsum`;
  manaCost1.innerHTML = `lorem ipsum`;
  cooldown1.innerHTML = `lorem ipsum`;

  // Second Skill Properties
  skillName2.innerHTML = `lorem ipsum`;
  imageSkill2.src = `lorem ipsum`;
  skillDescription2.innerHTML = `lorem ipsum`;
  manaCost2.innerHTML = `lorem ipsum`;
  cooldown2.innerHTML = `lorem ipsum`;

  // Third Skill Properties
  skillName3.innerHTML = `lorem ipsum`;
  imageSkill3.src = `lorem ipsum`;
  skillDescription3.innerHTML = `lorem ipsum`;
  manaCost3.innerHTML = `lorem ipsum`;
  cooldown3.innerHTML = `lorem ipsum`;

  // Fourth Skill Properties
  skillName4.innerHTML = `lorem ipsum`;
  imageSkill4.src = `lorem ipsum`;
  skillDescription4.innerHTML = `lorem ipsum`;
  manaCost4.innerHTML = `lorem ipsum`;
  cooldown4.innerHTML = `lorem ipsum`;

  // Fifth Skill Properties
  skillName5.innerHTML = `lorem ipsum`;
  imageSkill5.src = `lorem ipsum`;
  skillDescription5.innerHTML = `lorem ipsum`;
  manaCost5.innerHTML = `lorem ipsum`;
  cooldown5.innerHTML = `lorem ipsum`;
});
