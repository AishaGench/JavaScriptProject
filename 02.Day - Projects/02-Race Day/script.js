let raceNum=Math.floor(Math.random()*1000)
console.log(raceNum)

let earlyRegister =true;
let age=17;

if(age >18 && earlyRegister){
    raceNum +=1000;
    console.log(`Race will begin at 9:30. Your race number is: ${raceNum}
    `)
}
else if(age >18 && !earlyRegister){
    console.log(`Race will begin at 11:00. Your race number is: ${raceNum}`)
}
else if(age <18 ){
    console.log(`Race will begin at 12:30. Your race number is: ${raceNum}`)
}else{
    console.log("see the registeration desk")
}
/*
Math.random() * (max - min) + min;
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

*/
