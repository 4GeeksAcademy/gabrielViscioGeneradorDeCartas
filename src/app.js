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

// Función para cambiar el tamaño de la carta
function resizeCard() {
  let height = document.getElementById("heightInput").value;
  if (height >= 100 && height <= 500) {
    let card = document.getElementById("card");
    card.style.height = height + "px";
    card.style.width = height / 1.67 + "px"; // Mantiene la proporción 3:5
  } else {
    alert("Por favor, introduce un valor entre 100 y 500.");
  }
}

window.onload = function() {
  generateRandomCard();
  setInterval(generateRandomCard, 10000);
};
