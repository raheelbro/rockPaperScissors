
function getComputerChoice() {
  let textArray = ["rock", "paper", "scissors"];
  let randomElement = textArray[Math.floor(Math.random() * textArray.length)];
  return randomElement;
}


const listItems = document.querySelectorAll('.list-item img');
// console.log(listItems);

let array = [...listItems];
console.log(array[1].alt);




function playRound(playerSelection, computerSelection) {
  let p = playerSelection.toLowerCase();
  let c = computerSelection.toLowerCase();

}


