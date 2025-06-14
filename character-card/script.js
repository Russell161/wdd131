const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
    } else {
      this.health = 0;
      alert('Character Died');
    }
  },
  levelUp() {
    this.level += 1;
    this.health += 20;
  }
};


const imgEl = document.querySelector('.image');
const nameEl = document.querySelector('.name');
const classEl = document.getElementById('class');
const levelEl = document.getElementById('level');
const healthEl = document.getElementById('health');
const logEl = document.getElementById('log');
const attackedBtn = document.getElementById('attacked');
const levelUpBtn = document.getElementById('levelup');

function updateDisplay() {
  imgEl.src = character.image;
  imgEl.alt = character.name;
  nameEl.textContent = character.name;
  classEl.textContent = character.class;
  levelEl.textContent = character.level;
  healthEl.textContent = character.health;
}


function hideStaticStats() {
  const staticStats = document.getElementById('staticStats');
  if (staticStats) {
    staticStats.style.display = 'none';
  }
}

attackedBtn.addEventListener('click', () => {
  hideStaticStats();

  const prevHealth = character.health;
  character.attacked();
  updateDisplay();

  if (character.health < prevHealth) {
    logEl.textContent = `${character.name} took 20 damage.`;
    logEl.style.color = 'coral';
  } else {
    logEl.textContent = `${character.name} has no health left.`;
    logEl.style.color = '#f0f4f8';
  }
});

levelUpBtn.addEventListener('click', () => {
  hideStaticStats();

  character.levelUp();
  updateDisplay();
  logEl.textContent = `${character.name} leveled up!`;
  logEl.style.color = 'lightgreen';
});
