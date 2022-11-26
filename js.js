// console.log("hello world");



function getComputerChoice() {
  let textArray = ["rock", "paper", "scissors"];
  let randomElement = textArray[Math.floor(Math.random() * textArray.length)];
  return randomElement;
}


const listItems = document.querySelectorAll('.btn');

listItems.addEventListener('click',console.log('hellow world'));




function playRound(playerSelection, computerSelection) {
  let p = playerSelection.toLowerCase();
  let c = computerSelection.toLowerCase();

}

function game() {
  console.log("Let's play Rock, Paper, Scissors!")


}



game();
