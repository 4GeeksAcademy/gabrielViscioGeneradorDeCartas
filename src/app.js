/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateRandomCard() {
    let suits = ["spade", "club", "heart", "diamond"];
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

    let card = document.getElementById("card");
    card.className = "card " + randomSuit;
    card.innerHTML = randomValue;

    console.log("generateRandomCard");
  }

  generateRandomCard();

  window.generateRandomCard = generateRandomCard;
};
