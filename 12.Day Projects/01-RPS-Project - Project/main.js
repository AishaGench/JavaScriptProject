// Setting the scores and selecting our HTML elements.
let computerScore = 0;
let playerScore = 0;

const compScore = document.getElementById('computerScore');
const playScore = document.getElementById('playerScore');

const rockbtn = document.getElementById('rock');
const paperbtn = document.getElementById('paper');
const scissorsbtn = document.getElementById('scissors');

const randArray =['fas fa-hand-rock','fas fa-hand-paper','fas fa-hand-scissors']

const showPlayer =document.querySelector('.player i');
const comPlayer =document.querySelector('.computer i');
let result = document.getElementById('result');


function game (event){

   let randomNum =Math.floor(Math.random() * randArray.length);
console.log(event)
showPlayer.className=event.target.className;
comPlayer.className=randArray[randomNum];

   if(showPlayer.className === comPlayer.className){
       result.innerHTML = "It's a Tie!!!";
   }else if(showPlayer.className === "fas fa-hand-rock" && comPlayer.className==="fas fa-hand-scissors" || showPlayer.className === "fas fa-hand-paper" && comPlayer.className==="fas fa-hand-rock" || showPlayer.className === "fas fa-hand-scissors" && comPlayer.className==="fas fa-hand-paper"){
       
       playerScore ++;
    result.innerHTML =`Player Wins <i class="far fa-smile"></i>` 
    playScore.innerHTML =playerScore;

   }else if(showPlayer.className === "fas fa-hand-rock" && comPlayer.className==="fas fa-hand-paper" || showPlayer.className === "fas fa-hand-paper" && comPlayer.className==="fas fa-hand-scissors" || showPlayer.className === "fas fa-hand-scissors" && comPlayer.className==="fas fa-hand-rock"){
    computerScore ++;
 result.innerHTML =`Computer Wins <i class="fas fa-angry"></i>` 
 compScore.innerHTML =computerScore;

}

}
rockbtn.addEventListener('click',game);
paperbtn.addEventListener('click',game);
scissorsbtn.onclick = game;








