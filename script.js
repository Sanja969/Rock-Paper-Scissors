



function computerSelection()
{
   let random= Math.floor(Math.random()*9)+1;
   if(random<=3){
       return "Rock";
   }
   else if(random>3 && random <=6){
       return "Paper";
   }
   else{
    return "Scissors";
   }
}

function playerSelection(playerSel){
    console.log("You Selected "+playerSel);
    console.log("Computer Selected "+computerSelection());
return playerSel;
}




function RockPaperScissors(playerPlay){
    
   
    if((computerPlay=="Rock"&&playerPlay=="Scissors") || (computerPlay=="Scissors"&&playerPlay=="Paper") || (computerPlay=="Paper"&&playerPlay=="Rock"))
    {
        console.log("You Lose!"+computerPlay+ " beats " + playerPlay);
    }
    else if(playerPlay==computerPlay){
        console.log("No one wins!"+"There are two " + computerPlay);
    }
    else{
        console.log("You win!"+playerPlay+ " beats " + computerPlay);
    }
}



function game(){
    i=0;
    while(i<5){
        i++;
        
        RockPaperScissors(playerSelection());
        
    }
}

//game();

//let playerInput=prompt("Choose one of the items: Rock, Paper, Scissors. Write down one of these");
//let playerSelectionParsed=playerInput.charAt(0).toUpperCase()+playerInput.slice(1).toLowerCase();
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);