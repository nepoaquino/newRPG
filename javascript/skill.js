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
  skillDescription1.innerHTML = `Delivers a powerful, sweeping attack to enemy dealing
  (20 + 50% Total STR) Physical Damage.`;
  manaCost1.innerHTML = `Mana Cost: 15`;
  cooldown1.innerHTML = `Cooldown: 2 Turns`;

  //Second Skill Properties
  skillName2.innerHTML = `Crushing Blow`;
  imageSkill2.src = `icon/skills/warrior/crushingBlow.PNG`;
  skillDescription2.innerHTML = `Strikes an opponent with immense force, dealing (30 +
    100% Total STR) Physical Damage. This attack also stun the enemy for 1 turn.`;
  manaCost2.innerHTML = `Mana Cost: 20`;
  cooldown2.innerHTML = `Cooldown: 3 Turns`;

  //Third Skill Properties
  skillName3.innerHTML = `Raging Frenzy`;
  imageSkill3.src = `icon/skills/warrior/ragingFrenzy.PNG`;
  skillDescription3.innerHTML = `Enters a state of pure rage, increasing your Total
  Attack Damage by 30% for 3 turns.`;
  manaCost3.innerHTML = `Mana Cost: 20`;
  cooldown3.innerHTML = `Cooldown: 3 Turns`;

  //Fourth Skill Properties
  skillName4.innerHTML = `Mend Wounds`;
  imageSkill4.src = `icon/skills/warrior/mendWounds.PNG`;
  skillDescription4.innerHTML = `Restores 30% health, allowing you to recover
  during battles.`;
  manaCost4.innerHTML = `Mana Cost: 25`;
  cooldown4.innerHTML = `Cooldown: 5 Turns`;

  //Fifth Skill Properties
  skillName5.innerHTML = `Defensive Stance`;
  imageSkill5.src = `icon/skills/warrior/defensiveStance.PNG`;
  skillDescription5.innerHTML = `Boosts the your defense by 50% but also reducing
  your damage output by 20% for the next 3 turns.`;
  manaCost5.innerHTML = `Mana Cost: 20`;
  cooldown5.innerHTML = `Cooldown: 4 Turns`;
});

// MAGE SKILLS LIST
document.getElementById("MageSelected").addEventListener("click", () => {
  // First Skill Properties
  skillName1.innerHTML = `Fireball`;
  imageSkill1.src = `icon/skills/mage/fireball.PNG`;
  skillDescription1.innerHTML = `Hurls a searing fireball at the enemy, dealing (25 + 60% Total INT) Magic Damage and causing 10 additional damage over 2 turns.`;
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
  skillDescription4.innerHTML = `Release a powerful burst of magical energy, dealing (40 + 90% Total INT) Magic Damage to a single target and silencing them for 1 turn, preventing them from using spells.`;
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
  skillName1.innerHTML = `Backstab`;
  imageSkill1.src = `icon/skills/assassin/backstab.PNG`;
  skillDescription1.innerHTML = `Sneaks up on enemy and delivers a deadly backstab, dealing (20 + 50% Total DEX) Physical Damage and having a 50% chance to critically hit for double damage.`;
  manaCost1.innerHTML = `Energy Cost: 20`;
  cooldown1.innerHTML = `Cooldown: 2 Turns`;

  // Second Skill Properties
  skillName2.innerHTML = `Deadly Throw`;
  imageSkill2.src = `icon/skills/assassin/deadlyThrow.PNG`;
  skillDescription2.innerHTML = `Expertly throws a deadly dagger at the enemy, dealing (25 + 70% Total DEX) Physical Damage. This skill also apply a bleeding effect, causing 10 additional damage over 2 turns.`;
  manaCost2.innerHTML = `Energy Cost: 20`;
  cooldown2.innerHTML = `Cooldown: 4 Turns`;

  // Third Skill Properties
  skillName3.innerHTML = `Venomous Coating`;
  imageSkill3.src = `icon/skills/assassin/venomousCoating.PNG`;
  skillDescription3.innerHTML = `Applies a potent venom to weapon for the next 3 turns, the assassin's attacks deal additional (10 + 50% Total DEX) poison damage over time. This effect does not stack.`;
  manaCost3.innerHTML = `Energy Cost: 30`;
  cooldown3.innerHTML = `Cooldown: 5 Turns`;

  // Fourth Skill Properties
  skillName4.innerHTML = `Vampiric Strike`;
  imageSkill4.src = `icon/skills/assassin/vampiricStrike.PNG`;
  skillDescription4.innerHTML = `Delivers a vampiric strike, draining the enemy's life force. This attack deals (20 + 60% Total DEX) Physical Damage and heals you for an amount equal to 50% of the damage dealt.`;
  manaCost4.innerHTML = `Energy Cost: 35`;
  cooldown4.innerHTML = `Cooldown: 4 Turns`;

  // Fifth Skill Properties
  skillName5.innerHTML = `Assassinate`;
  imageSkill5.src = `icon/skills/assassin/assassinate.PNG`;
  skillDescription5.innerHTML = `Deliver a lethal blow that instantly kills the enemy if their health is below 10%. Otherwise, it deals (50 + 100% Total DEX) Physical Damage.`;
  manaCost5.innerHTML = `Energy Cost: 50`;
  cooldown5.innerHTML = `Cooldown: 6 Turns`;
});

// ARCHER SKILLS LIST
document.getElementById("ArcherSelected").addEventListener("click", () => {
  // First Skill Properties
  skillName1.innerHTML = `Precision Shot`;
  imageSkill1.src = `icon/skills/archer/precisionShot.PNG`;
  skillDescription1.innerHTML = `Takes precise aim and delivers a true strike that bypasses the enemy's evasion, inflicting (30 + 50% Total DEX) Physical Damage. This attack is assured to strike its intended target`;

  manaCost1.innerHTML = `Energy Cost: 15`;
  cooldown1.innerHTML = `Cooldown: 2 Turns`;

  // Fifth Skill Properties
  skillName2.innerHTML = `Explosive Shot`;
  imageSkill2.src = `icon/skills/archer/explosiveShot.PNG`;
  skillDescription2.innerHTML = `Fires an explosive arrow at the enemy, dealing (45 + 90% Total DEX) Physical Damage and applying a burning effect that deals 10 damage over time for 2 turns.`;
  manaCost2.innerHTML = `Mana Cost: 50`;
  cooldown2.innerHTML = `Cooldown: 6 Turns`;

  // Third Skill Properties
  skillName3.innerHTML = `WindRun`;
  imageSkill3.src = `icon/skills/archer/windRun.PNG`;
  skillDescription3.innerHTML = `Harnesses the power of the wind, granting incredible speed. Guaranteed to evade all physical attacks from the enemy for the next 2 turns.`;
  manaCost3.innerHTML = `Mana Cost: 45`;
  cooldown3.innerHTML = `Cooldown: 7 Turns`;

  // Fourth Skill Properties
  skillName4.innerHTML = `Poison Arrow`;
  imageSkill4.src = `icon/skills/archer/poisonArrow.PNG`;
  skillDescription4.innerHTML = `Fires a poisoned coated arrow that deals (30 + 70% Total DEX) Physical Damage and deals 10 damage over time for 2 turns.`;
  manaCost4.innerHTML = `Mana Cost: 35`;
  cooldown4.innerHTML = `Cooldown: 5 Turns`;

  // Fifth Skill Properties
  skillName5.innerHTML = `Headshot`;
  imageSkill5.src = `icon/skills/archer/headshot.PNG`;
  skillDescription5.innerHTML = `Take precise aim at the enemy's head, dealing (50 + 150% Total DEX) Physical Damage, stunning the target for 1 turn`;
  manaCost5.innerHTML = `Mana Cost: 40`;
  cooldown5.innerHTML = `Cooldown: 6 Turns`;
});
