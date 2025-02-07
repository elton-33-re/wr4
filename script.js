function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "Regina" && password === "260409") {
      document.getElementById("loginPage").classList.add("hidden");
      document.getElementById("romanticPage").classList.remove("hidden");
      startRomanticWords();
    } else {
      alert("Username atau password salah!");
    }
  }
  
  function startRomanticWords() {
    const wordsContainer = document.getElementById("wordsContainer");
    const words = [
      "You are my shining star",
      "Together, we light up the galaxy",
      "To the moon and back, I love you",
      "Our love is infinite as the universe",
      "You are my cosmic destiny",
      "The stars aligned for us",
      "Like stardust, my love for you never fades",
      "I found my universe in you",
      "Your love is my brightest constellation",
      "Our love transcends time and space"
    ];
  
    let index = 0;
    setInterval(() => {
      const word = document.createElement("div");
      word.classList.add("animated-word");
      word.textContent = words[index];
      wordsContainer.appendChild(word);
  
      setTimeout(() => {
        wordsContainer.removeChild(word);
      }, 4000);
  
      index = (index + 1) % words.length;
    }, 3000);
  }