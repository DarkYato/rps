let input;
const rps = ["rock", "paper", "scissor"];
let winner;

function getComputerChoice() {
  let rando = Math.floor(Math.random() * rps.length);
  return rps[rando];
} // Returns Computer's Choice

function playRound(playerchoice, compchoice) {
  if (playerchoice.toLowerCase() == compchoice.toLowerCase()) {
    return "tie";
  } else if (playerchoice == "paper" && compchoice == "rock") {
    return "player";
  } else if (playerchoice == "rock" && compchoice == "paper") {
    return "pc";
  } else if (playerchoice == "scissor" && compchoice == "paper") {
    return "player";
  } else if (playerchoice == "paper" && compchoice == "scissor") {
    return "pc";
  } else if (playerchoice == "rock" && compchoice == "scissor") {
    return "player";
  } else if (playerchoice == "scissor" && compchoice == "rock") {
    return "pc";
  }
} // Returns the Winner of a round

function game()
{
    for(let i=1;i<=5;i++)
    {
       input = prompt("Enter R P S");
       const compchoice = getComputerChoice();
       console.log("User choice is: " + input);
       console.log("PC choice is: " + compchoice);
       winner = playRound(input, compchoice);
       console.log("Winner is: " + winner);
    }
}

game();
