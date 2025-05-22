let words = [];
let currentIndex = 0;
const wordDisplay = document.getElementById("wordDisplay");
const input = document.getElementById("newWordInput");

function loadWords() {
  const saved = localStorage.getItem("words");
  if (saved) {
    try {
      words = JSON.parse(saved);
    } catch (e) {
      console.error("Error parsing saved words:", e);
      words = [];
    }
  }

  if (!Array.isArray(words) || words.length === 0) {
    words = ["Hello", "World", "JavaScript", "Fun"];
  }
}

function saveWords() {
  localStorage.setItem("words", JSON.stringify(words));
}

function showNextWord() {
  wordDisplay.textContent = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;
}

function addWord() {
  const newWord = input.value.trim();
  if (newWord !== "") {
    words.push(newWord);
    saveWords();
    input.value = "";
    alert(`Added "${newWord}" to the list!`);
  }
}


function resetWords() {
  localStorage.removeItem("words");
  words = ["Hello", "World", "JavaScript", "Fun"];
  currentIndex = 0;
  alert("Word list has been reset.");
}


loadWords();
setInterval(showNextWord, 2000);
showNextWord();
