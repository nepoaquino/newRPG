// Define skill categories and their respective skills
const skillCategories = {
  Warrior: [
    // Warrior skills
    {
      name: "Cleave",
      image: "icon/skills/warrior/cleave.PNG",
      description:
        "Delivers a powerful, sweeping attack to the enemy dealing (20 + 50% Total STR) Physical Damage.",
      manaCost: "Mana Cost: 15",
      cooldown: "Cooldown: 2 Turns",
    },
    {
      name: "Crushing Blow",
      image: "icon/skills/warrior/crushingBlow.PNG",
      description:
        "Strikes an opponent with immense force, dealing (30 + 100% Total STR) Physical Damage. This attack also stuns the enemy for 1 turn.",
      manaCost: "Mana Cost: 20",
      cooldown: "Cooldown: 3 Turns",
    },
    {
      name: "Raging Frenzy",
      image: "icon/skills/warrior/ragingFrenzy.PNG",
      description:
        "Enters a state of pure rage, increasing your Total Attack Damage by 40% for the next 3 turns.",
      manaCost: "Mana Cost: 20",
      cooldown: "Cooldown: 3 Turns",
    },
    {
      name: "Mend Wounds",
      image: "icon/skills/warrior/mendWounds.PNG",
      description:
        "Restores 30% health, allowing you to recover during battles.",
      manaCost: "Mana Cost: 25",
      cooldown: "Cooldown: 5 Turns",
    },
    {
      name: "Defensive Stance",
      image: "icon/skills/warrior/defensiveStance.PNG",
      description:
        "Boosts your defense by 50% but also reduces your damage output by 20% for the next 3 turns.",
      manaCost: "Mana Cost: 20",
      cooldown: "Cooldown: 4 Turns",
    },
  ],
  Mage: [
    // Mage skills
    {
      name: "Fireball",
      image: "icon/skills/mage/fireball.PNG",
      description:
        "Hurls a searing fireball at the enemy, dealing (25 + 60% Total INT) Magic Damage and causing 10 additional damage over 2 turns.",
      manaCost: "Mana Cost: 20",
      cooldown: "Cooldown: 2 Turns",
    },
    {
      name: "Frostbite",
      image: "icon/skills/mage/frostbite.PNG",
      description:
        "Encases an enemy unit in ice, dealing (45 + 90% Total INT) Magic Damage and freezing them for 1 turn.",
      manaCost: "Mana Cost: 40",
      cooldown: "Cooldown: 5 Turns",
    },
    {
      name: "Mana Shield",
      image: "icon/skills/mage/manaShield.PNG",
      description:
        "Generates a protective barrier that transforms incoming damage into mana over a duration of 3 turns.",
      manaCost: "Mana Cost: 50",
      cooldown: "Cooldown: 4 Turns",
    },
    {
      name: "Shadowmute",
      image: "icon/skills/mage/shadowMute.PNG",
      description:
        "Release a powerful burst of magical energy, dealing (40 + 90% Total INT) Magic Damage to a single target and silencing them for 1 turn, preventing them from using spells.",
      manaCost: "Mana Cost: 45",
      cooldown: "Cooldown: 3 Turns",
    },
    {
      name: "Life Drain",
      image: "icon/skills/mage/lifeDrain.PNG",
      description:
        "Taps into the dark arts, draining (25 + 50% Total INT) health from the enemy and adding it to your own HP pool.",
      manaCost: "Mana Cost: 35",
      cooldown: "Cooldown: 4 Turns",
    },
  ],
  Assassin: [
    // Assassin skills
    {
      name: "Backstab",
      image: "icon/skills/assassin/backstab.PNG",
      description:
        "Sneaks up on an enemy and delivers a deadly backstab, dealing (20 + 50% Total DEX) Physical Damage and having a 50% chance to critically hit for double damage.",
      manaCost: "Energy Cost: 20",
      cooldown: "Cooldown: 2 Turns",
    },
    {
      name: "Deadly Throw",
      image: "icon/skills/assassin/deadlyThrow.PNG",
      description:
        "Expertly throws a deadly dagger at the enemy, dealing (25 + 70% Total DEX) Physical Damage. This skill also applies a bleeding effect, causing 10 additional damage over 2 turns.",
      manaCost: "Energy Cost: 20",
      cooldown: "Cooldown: 4 Turns",
    },
    {
      name: "Venomous Coating",
      image: "icon/skills/assassin/venomousCoating.PNG",
      description:
        "Applies a potent venom to the weapon for the next 3 turns, the assassin's attacks deal additional (10 + 50% Total DEX) poison damage over time. This effect does not stack.",
      manaCost: "Energy Cost: 30",
      cooldown: "Cooldown: 5 Turns",
    },
    {
      name: "Vampiric Strike",
      image: "icon/skills/assassin/vampiricStrike.PNG",
      description:
        "Delivers a vampiric strike, draining the enemy's life force. This attack deals (20 + 60% Total DEX) Physical Damage and heals you for an amount equal to 50% of the damage dealt.",
      manaCost: "Energy Cost: 35",
      cooldown: "Cooldown: 4 Turns",
    },
    {
      name: "Assassinate",
      image: "icon/skills/assassin/assassinate.PNG",
      description:
        "Deliver a lethal blow that instantly kills the enemy if their health is below 10%. Otherwise, it deals (50 + 100% Total DEX) Physical Damage.",
      manaCost: "Energy Cost: 50",
      cooldown: "Cooldown: 6 Turns",
    },
  ],
  Archer: [
    // Archer skills
    {
      name: "Precision Shot",
      image: "icon/skills/archer/precisionShot.PNG",
      description:
        "Takes precise aim and delivers a true strike that bypasses the enemy's evasion, inflicting (30 + 50% Total DEX) Physical Damage. This attack is assured to strike its intended target.",
      manaCost: "Energy Cost: 15",
      cooldown: "Cooldown: 2 Turns",
    },
    {
      name: "Explosive Shot",
      image: "icon/skills/archer/explosiveShot.PNG",
      description:
        "Fires an explosive arrow at the enemy, dealing (45 + 90% Total DEX) Physical Damage and applying a burning effect that deals 10 damage over time for 2 turns.",
      manaCost: "Mana Cost: 50",
      cooldown: "Cooldown: 6 Turns",
    },
    {
      name: "WindRun",
      image: "icon/skills/archer/windRun.PNG",
      description:
        "Harnesses the power of the wind, granting incredible speed. Guaranteed to evade all physical attacks from the enemy for the next 2 turns.",
      manaCost: "Mana Cost: 45",
      cooldown: "Cooldown: 7 Turns",
    },
    {
      name: "Poison Arrow",
      image: "icon/skills/archer/poisonArrow.PNG",
      description:
        "Fires a poison-coated arrow that deals (30 + 70% Total DEX) Physical Damage and deals 10 damage over time for 2 turns.",
      manaCost: "Mana Cost: 35",
      cooldown: "Cooldown: 5 Turns",
    },
    {
      name: "Headshot",
      image: "icon/skills/archer/headshot.PNG",
      description:
        "Take precise aim at the enemy's head, dealing (50 + 150% Total DEX) Physical Damage, stunning the target for 1 turn.",
      manaCost: "Mana Cost: 40",
      cooldown: "Cooldown: 6 Turns",
    },
  ],
};

// Function to set skill properties based on the selected category
function setSkillProperties(category) {
  // Get the skills for the selected category
  const skills = skillCategories[category];

  // Loop through 5 skill slots (assuming you have 5 skill slots)
  for (let i = 1; i <= 5; i++) {
    // Get the HTML elements for each skill slot
    const imageSkill = document.querySelector(`#imageSkill${i}`);
    const skillName = document.querySelector(`#skillName${i}`);
    const skillDescription = document.querySelector(`#skillDescription${i}`);
    const manaCost = document.querySelector(`#manaCost${i}`);
    const cooldown = document.querySelector(`#cooldown${i}`);

    // Get the skill information for the current slot
    const skill = skills[i - 1]; // Because the skillCategories[] start its index by 0

    // Update the HTML elements with the skill properties
    imageSkill.src = skill.image;
    skillName.innerHTML = skill.name;
    skillDescription.innerHTML = skill.description;
    manaCost.innerHTML = skill.manaCost;
    cooldown.innerHTML = skill.cooldown;
  }
}

// Add event listeners to handle category selections
document.getElementById("WarriorSelected").addEventListener("click", () => {
  setSkillProperties("Warrior");
});

document.getElementById("MageSelected").addEventListener("click", () => {
  setSkillProperties("Mage");
});

document.getElementById("AssassinSelected").addEventListener("click", () => {
  setSkillProperties("Assassin");
});

document.getElementById("ArcherSelected").addEventListener("click", () => {
  setSkillProperties("Archer");
});
