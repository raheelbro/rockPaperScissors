function getComputerChoice() {
  let textArray = ["rock", "paper", "scissors"];
  let randomElement = textArray[Math.floor(Math.random() * textArray.length)];
  return randomElement;
}

const listItems = document.querySelectorAll(".list-item img");
const li = document.querySelector(".list-item");
//console.log(li.classList.add('item-clicked'));
let turns = 0;

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("item-clicked");
    setTimeout(() => {
      item.classList.toggle("item-clicked");
    }, 100);

    if (item.alt == "rock" || item.alt == "paper" || item.alt == "scissors") {
      playerSelection = item.alt.toLowerCase();
      // console.log("player: ", playerSelection);
      // console.log("computer", getComputerChoice());
    }

    playRound(playerSelection, getComputerChoice());
  });
});

function playRound(playerSelection, computerSelection) {
  let playerScore = parseInt(
    document.querySelector(".p-score-count").textContent
  );
  let computerScore = parseInt(
    document.querySelector(".c-score-count").textContent
  );
  //console.log(playerScore);

  let p = playerSelection;
  let c = computerSelection;

  if (
    (p == "rock" && c == "paper") ||
    (p == "paper" && c == "scissors") ||
    (p == "scissors" && c == "rock")
  ) {
    console.log("player: ", p);
    console.log("computer: ", c);

    computerScore = computerScore + 1;
    document.querySelector(".c-score-count").textContent = computerScore;
    turns = turns + 1;
  } else if (
    (p == "rock" && c == "scissors") ||
    (p == "paper" && c == "rock") ||
    (p == "scissors" && c == "paper")
  ) {
    console.log("player: ", p);
    console.log("computer: ", c);
    playerScore = playerScore + 1;
    document.querySelector(".p-score-count").textContent = playerScore;
    turns = turns + 1;
  } else {
    console.log("player: ", p);
    console.log("computer: ", c);
    turns = turns + 1;
  }

  if (turns == 5) {
    if (playerScore > computerScore) {
      console.log("You Win!");
    } else if (playerScore < computerScore) {
      console.log("You Lose!");
    } else {
      console.log("Tie");
    }
  } else {
    console.log(turns);
  }
}
