/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  let suitRNG = Math.floor(Math.random() * suits.length);
  console.log(suitRNG);
  let rankRNG = Math.floor(Math.random() * ranks.length);
  console.log(rankRNG);

  document.querySelector("#rank").innerHTML = ranks[rankRNG];
  if (suitRNG === 0 || suitRNG === 2) document.querySelector("#rank").setAttribute("class", "text-danger");
  document.querySelector("#img-1").setAttribute("src", suits[suitRNG]);
  document.querySelector("#img-2").setAttribute("src", suits[suitRNG]);
};

const ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

const heart = `https://www.adda52.com/blog/wp-content/uploads/2013/10/adda52-heart-suit-card_poker-150x150.png`;
const club = `https://www.adda52.com/blog/wp-content/uploads/2013/10/club-suit-card-poker-adda52.png`;
const diamond = `https://www.adda52.com/blog/wp-content/uploads/2013/10/diamond-suit-card-poker-adda52.png`;
const spade = `https://www.adda52.com/blog/wp-content/uploads/2013/10/spade-suit-card-poker-adda52.png`;

const suits = [heart, club, diamond, spade];