let secretNumber = Math.floor(Math.random()* 25 +1);
let checkButton =document.getElementById('button_id');
let guess= document.querySelector('guess');
let message = document.querySelector('.message');
let againButton = document.querySelector('.again');
let classNum = document.querySelector('.number');
let highScore = document.querySelector('.highscore');
let highPoint =0;
let score = document.querySelector('.score');
let point = 10;

// console.log(secretNumber);
// console.log(guess);

checkButton.onclick = () => { 
    
    var guess = document.querySelector('.guess').value;
    var classNum = document.querySelector('.number');

    if(guess < 50 || guess > 1){

if(point >1){

    if(guess < secretNumber){
        point--
        score.innerHTML = point;
        message.innerHTML = "it is low"
    }else if(guess > secretNumber){
        point--
        score.innerHTML = point;
        message.innerHTML = "it is high"
    }else{
        classNum.innerHTML = secretNumber;
        classNum.style.fontSize = "20px";
        document.body.style.backgroundColor = "orange";
        message.innerHTML = "you are a winner!";
        checkButton.disabled =true;
    if(point > highPoint){
    highPoint === point;
    highScore.innerHTML = highPoint;
    }
    }

    } else{
        alert('enter a valid number')
    }
}else{
    point--
    score.innerHTML = point;
    message.innerHTML = "You are loser";
    document.body.style.backgroundColor = 'red';
    checkButton.disabled = true;
}

    document.querySelector('.guess').value = "";
    console.log(secretNumber, guess)
};

againButton.onclick = () =>{
    point =10;
    secretNumber= Math.floor(Math.random()*50 +1);
    message.innerHTML='Start guessing ...';
    classNum.innerHTML ='?';
    guess ='';
    document.body.style.backgroundColor= '#1A508B';
    checkButton.disabled=false;
    score.innerHTML = point;

    // console.log(secretNumber);

}
