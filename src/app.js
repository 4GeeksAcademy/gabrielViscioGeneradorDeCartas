function generateRandomCard() {
  let suits = ["&spades;", "&clubs;", "♥", "♦"];
  let values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  document.getElementById("suitTop").innerHTML = randomSuit;
  document.getElementById("value").innerHTML = randomValue;
  document.getElementById("suitBottom").innerHTML = randomSuit;

  // Añade clases para los colores
  let suitTop = document.getElementById("suitTop");
  let suitBottom = document.getElementById("suitBottom");
  suitTop.className = suitBottom.className = "";

  if (randomSuit === "♥" || randomSuit === "♦") {
    suitTop.classList.add("heart");
    suitBottom.classList.add("heart");
  } else {
    suitTop.classList.add("spade");
    suitBottom.classList.add("spade");
  }
}

window.onload = generateRandomCard;
