var doorImage1 = document.getElementById('door_a');
var doorImage2 = document.getElementById('door_b');
var doorImage3 = document.getElementById('door_c');

var startButton =document.getElementById('start');

var currentflyPlaying =true;
var numClosedDoors =3;

var closedDoorPath="door_closed.png";

var flyDoorPath = "findfly.png";
var oceanDoorPath = "ocean.png";
var forestDoorPath = "forest.png";

var openDoor1;
var openDoor2;
var openDoor3;

const randomFindDoorGenerator=()=>{
var findDoor=Math.floor(Math.random()*numClosedDoors);

if(findDoor===0){
    openDoor1 = flyDoorPath;
    openDoor2 = forestDoorPath;
    openDoor3 = oceanDoorPath;

}else if(findDoor===1){
    openDoor2 = flyDoorPath;
    openDoor3 = forestDoorPath;
    openDoor1 = oceanDoorPath;

}else{
    openDoor3 = flyDoorPath;
    openDoor1 = forestDoorPath;
    openDoor2 = oceanDoorPath;
}
} 

doorImage1.onclick = () => {
    if(currentflyPlaying && !isClicked(doorImage1)){
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    };
};

doorImage2.onclick = () => {
    if(currentflyPlaying && !isClicked(doorImage2)){
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }; 
};

doorImage3.onclick = () => {
    if(currentflyPlaying && !isClicked(doorImage3)){
        doorImage3.src=openDoor3;
        playDoor(doorImage3);
    };  
};

startButton.onclick = () => {
    if(!currentflyPlaying) {
        startRound();
    }
};

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;

    numClosedDoors =3;

    startButton.innerHTML ="Good Luck!!!";

    currentflyPlaying=true;

    randomFindDoorGenerator();
}

const gameOver = (status) =>{
    if (status === 'win') {
        startButton.innerHTML = 'You win! Play again?';
      }else {
        startButton.innerHTML = 'Game over! Play again?'
      }
      currentflyPlaying = false;
      
}

const isFly = (door) =>{
    if(door.src.includes(flyDoorPath)){
        return true;
    }else{
        return false;
    }
}

const isClicked =(door)=>{
if(door.src.includes(closedDoorPath)){
    return false
}else{
    return true
}
};

const playDoor=(door)=>{
    numClosedDoors --;

    if(numClosedDoors===0){
        gameOver('win');

    }else if(isFly(door)){
        gameOver('losed');
    }
};
startRound();