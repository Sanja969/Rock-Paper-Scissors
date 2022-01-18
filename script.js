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
    document.querySelector(".result").textContent ="Computer got the score!" + computerPlay + " beats " + playerPlay;
  }
  
  else if (playerPlay == computerPlay) {
    console.log("No one wins!" + "There are two " + computerPlay);
  }
  
  else {
    console.log("You win!" + playerPlay + " beats " + computerPlay);
    playerScore++;
    document.querySelector(".playerScore").textContent = playerScore;
    document.querySelector(".result").textContent ="You got the score!" + computerPlay + " beats " + playerPlay;
    
  }
  if(playerScore==5){
    
    document.querySelector("body").style.backgroundImage = "url('Images/giphy.gif')";
    document.querySelector("main").style.display='none';
    
  }
  if (computerScore == 5) {
    document.querySelector("body").style.backgroundImage ="url('Images/lost.gif')";
    document.querySelector("main").style.display = "none";
    
    
  }
}


