
const choices = ["rock", "paper", "scissors"];
const playerDispaly = document.getElementById("playerDispaly");
const computerDispaly = document.getElementById("computerDispaly");
const resultDispaly = document.getElementById("resultDispaly");
const playerScoreDispaly = document.getElementById("playerScoreDispaly");
const computerScoreDispaly = document.getElementById("computerScoreDispaly");
let playerScore = 0;
let computerScore = 0;




function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result ="";

    if(playerChoice === computerChoice){
        result = "It's a Tie!";
    }
    else{
        switch(playerChoice){
           case "rock":
          result = (computerChoice === "scissors") ? "You Win!": "You Lose!";
          break;
          case "paper":
          result = (computerChoice === "rock") ? "You Win!": "You Lose!";
          break;
          case "scissors":
          result = (computerChoice === "paper") ? "You Win!": "You Lose!";
          break;
        }
    }
    
    playerDispaly.textContent = `Player: ${playerChoice}`;
    computerDispaly.textContent = `computer: ${computerChoice}`;
    resultDispaly.textContent = result;

    resultDispaly.classList.remove("greenText", "redText");

    switch(result){
        case "You Win!":
               resultDispaly.classList.add("greenText");
               playerScore++;
               playerScoreDispaly.textContent = playerScore;
               break;  

               case  "It's a Tie!":
               resultDispaly.classList.add("greenText");
               break;  


        case "You Lose!":
                resultDispaly.classList.add("redText");
                computerScore++;
                computerScoreDispaly.textContent = computerScore;
                break;
    }

}
