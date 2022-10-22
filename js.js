// console.log("hello world");



function getComputerChoice(){
  let textArray = ["Rock", "Paper", "Scissors"];
  let randomElement = textArray[Math.floor(Math.random() * textArray.length)];
  return randomElement;
}

console.log(getComputerChoice());
