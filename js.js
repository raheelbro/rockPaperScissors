function getComputerChoice() {
  // returns random option from array of choices
  let textArray = ["rock", "paper", "scissors"];
  let randomElement = textArray[Math.floor(Math.random() * textArray.length)];
  return randomElement;
}

const listItems = document.querySelectorAll(".list-item img");
const li = document.querySelector(".list-item");
const playerOption = document.querySelector(".player-option");
const computerOption = document.querySelector(".computer-option");

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
    computerSelection = getComputerChoice();
    playerOption.textContent = playerSelection.toUpperCase();
    computerOption.textContent = computerSelection.toUpperCase();

    console.log(playerOption);

    playRound(playerSelection, computerSelection);
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
    document.querySelector(".computer-option").style.backgroundColor =
      "#1de256";
    document.querySelector(".player-option").style.backgroundColor = "#f34649";

    computerScore = computerScore + 1;
    document.querySelector(".c-score-count").textContent = computerScore;
    turns = turns + 1;
  } else if (
    (p == "rock" && c == "scissors") ||
    (p == "paper" && c == "rock") ||
    (p == "scissors" && c == "paper")
  ) {
    document.querySelector(".player-option").style.backgroundColor = "#1de256";
    document.querySelector(".computer-option").style.backgroundColor =
      "#f34649";

    console.log("player: ", p);
    console.log("computer: ", c);
    playerScore = playerScore + 1;
    document.querySelector(".p-score-count").textContent = playerScore;
    turns = turns + 1;
  } else {
    console.log("player: ", p);
    console.log("computer: ", c);
    document.querySelector(".computer-option").style.backgroundColor =
      "#a9a9a9";
    document.querySelector(".player-option").style.backgroundColor = "#a9a9a9";
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
