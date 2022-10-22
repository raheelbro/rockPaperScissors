// console.log("hello world");



function getComputerChoice(){
  let textArray = ["rock", "paper", "scissors"];
  let randomElement = textArray[Math.floor(Math.random() * textArray.length)];
  return randomElement;
}



function playRound(playerSelection, computerSelection) {
  let p = playerSelection.toLowerCase();
  let c = computerSelection.toLowerCase();

  if (p === c){
    console.log(`You: ${p}\nComputer: ${c}`);
    
    console.log("Tied\n");
  }
  else if(p === "rock" && c === "paper"){
    console.log(`You: ${p}\nComputer: ${c}`);
    console.log("You Lose! Paper Beats Rock");
  }
  else if(p === "rock" && c === "scissors"){
    console.log(`You: ${p}\nComputer: ${c}`);
    console.log("You Win! Rock Beats Scissors");
  }
  else if(p === "paper" && c === "rock"){
    console.log(`You: ${p}\nComputer: ${c}`);
    console.log("You Win! Paper Beats Rock");
  }
  else if(p === "paper" && c === "scissors"){
    console.log(`You: ${p}\nComputer: ${c}`);
    console.log("You Lose! Scissors Beat Paper");
  }
  else if(p === "scissors" && c === "rock"){
    console.log(`You: ${p}\nComputer: ${c}`);
    console.log("You Lose! Rock Beats Scissors");
  }
  else if(p === "scissors" && c === "paper"){
    console.log(`You: ${p}\nComputer: ${c}`);
    console.log("You Win! Scissors Beat Paper");
  }
  else{
    console.log("Invalid Entry");
  }
}


const computerSelection = getComputerChoice();
const playerSelection = "rock";
playRound(playerSelection, computerSelection);