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
    
    console.log("😐Tied😐\n");
  }
  else if(p === "rock" && c === "paper"){
    console.log(`You: ${p}\nComputer: ${c}`);
    console.log("😡You Lose! Paper Beats Rock😡");
    return 2;
  }
  else if(p === "rock" && c === "scissors"){
    console.log(`You: ${p}\nComputer: ${c}`);
    console.log("😎You Win! Rock Beats Scissors😎");
    return 1;
  }
  else if(p === "paper" && c === "rock"){
    console.log(`You: ${p}\nComputer: ${c}`);
    console.log("😎You Win! Paper Beats Rock😎");
    return 1;
  }
  else if(p === "paper" && c === "scissors"){
    console.log(`You: ${p}\nComputer: ${c}`);
    console.log("😡You Lose! Scissors Beat Paper😡");
    return 2;
  }
  else if(p === "scissors" && c === "rock"){
    console.log(`You: ${p}\nComputer: ${c}`);
    console.log("😡You Lose! Rock Beats Scissors😡");
    return 2;
  }
  else if(p === "scissors" && c === "paper"){
    console.log(`You: ${p}\nComputer: ${c}`);
    console.log("😎You Win! Scissors Beat Paper😎");
    return 2;
  }
  else{
    console.log("Invalid Entry");
  }
}

function game(){
  console.log("Let's play Rock, Paper, Scissors!")
  let player = 0;
  let computer = 0;

  for(let i = 0; i < 5; i++){
    
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Enter your move")
    let wins = playRound(playerSelection, computerSelection);
    if (wins == 1){
      player += 1;
    }
    else if(wins == 2){
      computer += 1;
    }
    else {
      player;
      computer;
    }
    
  }

  if(player > computer){
    console.log(`Player: ${player}`);
    console.log(`Computer: ${computer}`);
    console.log("😎You Win!😎");
  }
  else if(player < computer){
    console.log(`Player: ${player}`);
    console.log(`Computer: ${computer}`);
    console.log("😡You Lose!😡");
  }
  else{
    console.log(`Player: ${player}`);
    console.log(`Computer: ${computer}`);
    console.log("😐Tied!😐");
  }
}



game();
