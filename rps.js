//let input=prompt("Enter R P S");
const rps = ["rock", "paper", "scissor"];

function getComputerChoice() {
  let rando = Math.floor(Math.random() * rps.length);
  return (rps[rando]);
}

console.log(getComputerChoice());