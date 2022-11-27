
function getComputerChoice() {
  let textArray = ["rock", "paper", "scissors"];
  let randomElement = textArray[Math.floor(Math.random() * textArray.length)];
  return randomElement;
}


const listItems = document.querySelectorAll('.list-item img');
const li = document.querySelector('.list-item');
//console.log(li.classList.add('item-clicked'));


  listItems.forEach(item => {
    item.addEventListener('click',()=> {

      item.classList.toggle('item-clicked');
      setTimeout(()=> {
        item.classList.toggle('item-clicked');
      }, 100)
      
      if(item.alt == 'rock' || item.alt == 'paper' || item.alt == 'scissors'){
        playerSelection = item.alt.toLowerCase();
        console.log(playerSelection);
      }
      // else if(item.alt == 'paper'){

      // }
     //  console.log(item.alt);
      
    });


    

        
    
  });



// let array = [...listItems];
// //console.log(array[1].alt);

// array.forEach(item => {
//   console.log(typeof(item.alt));

// });




function playRound(playerSelection, computerSelection) {
  let p = playerSelection.toLowerCase();
  let c = computerSelection.toLowerCase();

}


