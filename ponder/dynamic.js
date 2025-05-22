    let words = ["Hello", "World", "JavaScript", "Fun"];
    let currentIndex = 0;

    const wordDisplay = document.getElementById("wordDisplay");

    function showNextWord() {
      wordDisplay.textContent = words[currentIndex];
      currentIndex = (currentIndex + 1) % words.length;
    }

    function addWord() {
      const input = document.getElementById("newWordInput");
      const newWord = input.value.trim();
      if (newWord !== "") {
        words.push(newWord);
        input.value = "";
        alert(`Added "${newWord}" to the list!`);
      }
    }

    // Cycle through words every 2 seconds
    setInterval(showNextWord, 2000);
    showNextWord(); // Show first word immediately