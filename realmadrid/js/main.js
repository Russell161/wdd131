const stats = [
  { name: "Shots on Target", team: "Madrid", value: 11 },
  { name: "Shots on Target", team: "Juventus", value: 2 },
  { name: "Possession (%)", team: "Madrid", value: 57.2 },
  { name: "Possession (%)", team: "Juventus", value: 42.8 },
  { name: "Pass Accuracy (%)", team: "Madrid", value: 92 },
  { name: "Pass Accuracy (%)", team: "Juventus", value: 90 },
];

function displayStats() {
  const container = document.getElementById("statsContainer");
  if (!container) return;

  const grouped = stats.reduce((acc, stat) => {
    if (!acc[stat.name]) acc[stat.name] = [];
    acc[stat.name].push(stat);
    return acc;
  }, {});

  Object.keys(grouped).forEach(key => {
    const block = document.createElement("div");
    const content = grouped[key]
      .map(s => `${s.team}: ${s.value}`)
      .join(" | ");
    block.textContent = `${key}: ${content}`;
    container.appendChild(block);
  });
}

function setupSentimentToggle() {
  const button = document.getElementById("toggleSentiment");
  const display = document.getElementById("sentimentDisplay");

  if (!button || !display) return;

  let shown = false;
  button.addEventListener("click", () => {
    shown = !shown;
    button.textContent = shown ? "Hide Sentiment" : "Show Sentiment";

    if (shown) {
      const reactions = [
        "GONZALO GARCIA is the future!",
        "Midfield was bossed again by Valverde, Bellingham, Tchouameni, and Arda Guler.",
        "Courtois is playing up to his 2022 level again!"
      ];
      display.innerHTML = "";
      reactions.forEach(r => {
        const p = document.createElement("p");
        p.textContent = r;
        display.appendChild(p);
      });
    } else {
      display.innerHTML = "";
    }
  });
}

displayStats();
setupSentimentToggle();


const fedeThumb = document.getElementById('fedeImg');
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalFullImg');
const modalClose = document.querySelector('.modal-close');

fedeThumb.addEventListener('click', () => {
  modal.style.display = 'block';
  modalImg.src = fedeThumb.src;
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
