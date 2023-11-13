

import "./style.css";

let number = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "R", "J", "A"];
let cards = ["♣", "♥", "♦", "♠"];
cards;
window.onload = function() {
  
  let random_numbers = number[Math.floor(Math.random() * number.length)];
  let random_card = cards[Math.floor(Math.random() * cards.length)];

  
  document.querySelector(".top-icon").innerHTML = random_card;
  document.querySelector(".under-icon").innerHTML = random_card;
  document.querySelector(".numero").innerHTML = random_numbers;
  if (
    document.querySelector(".top-icon").innerHTML &&
    document.querySelector(".under-icon").innerHTML == "♥"
  ) {
    document.querySelector(".top-icon").classList.add("red");
    document.querySelector(".under-icon").classList.add("red");
  }
};
