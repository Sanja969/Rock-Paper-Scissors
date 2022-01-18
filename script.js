"use strict";
var playerScore = 0;
var computerScore = 0;


function computerSelection() {
    
  let random = Math.floor(Math.random() * 9) + 1;
  if (random <= 3) {
    return "Rock";
  } else if (random > 3 && random <= 6) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playerSelection(playerSel) {
    RockPaperScissors(playerSel);
    return playerSel;
}



function RockPaperScissors(playerPlay) {
  let computerPlay = computerSelection();
  document.querySelector(".computerSelection").textContent = computerPlay;
  document.querySelector(".playerSelection").textContent = playerPlay;

  if (
    (computerPlay == "Rock" && playerPlay == "Scissors") ||
    (computerPlay == "Scissors" && playerPlay == "Paper") ||
    (computerPlay == "Paper" && playerPlay == "Rock")
  ) {
    computerScore++;
    document.querySelector(".computerScore").textContent = computerScore;
    document.querySelector(".result").textContent =
      "Computer got the score!" + computerPlay + " beats " + playerPlay;

  } else if (playerPlay == computerPlay) {
    console.log("No one wins!" + "There are two " + computerPlay);
    document.querySelector(".result").textContent =
      "No one wins!" + "There are two " + playerPlay;

  } else {
    playerScore++;
    document.querySelector(".playerScore").textContent = playerScore;
    document.querySelector(".result").textContent =
      "You got the score!" + computerPlay + " beats " + playerPlay;
  }

  if (playerScore == 5) {
    document.querySelector("body").style.backgroundImage =
      "url('Images/giphy.gif')";
    document.querySelector("main").style.display = "none";
    document.querySelector(".again").style.display = "inline-block";

    let btn = document.createElement("button");
    document.body.appendChild(btn);
  }
  if (computerScore == 5) {
    document.querySelector("body").style.backgroundImage =
      "url('Images/lost.gif')";
    document.querySelector("main").style.display = "none";
    document.querySelector(".again").style.display = "inline-block";
  }

  
}


function Again() {
  document.querySelector("main").style.display = "block";
  document.querySelector(".again").style.display = "none";
  document.querySelector("body").style.backgroundImage = 'url("Images/RockPaperScissors.png")';
  playerScore = 0;
  computerScore = 0;
  document.querySelector(".playerScore").textContent = 0;
  document.querySelector(".computerScore").textContent = 0;
  document.querySelector(".result").textContent = "Go ahead!";
  document.querySelector(".computerSelection").textContent = "";
  document.querySelector(".playerSelection").textContent = "";
}