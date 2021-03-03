
// const johnsTeam ={
//     score_1:89,
//     score_2 :120,
//     score_3 :103
// }
// console.log(johnsTeam);

// const mikesTeam ={
//     score_1 :116,
//     score_2 :94,
//     score_3 :123
// }
// console.log(mikesTeam);

let johnsTeam=[89,120,103];
// var avgJohns=(johnsTeam/johnsTeam.length)*johnsTeam.length
// console.log(avgJohns) //nan veriyor
var total=0;
for (var i = 0; i < johnsTeam.length; i++) {
    total += johnsTeam[i];
    
}
var avgJohns = total / johnsTeam.length;
console.log(avgJohns);

//Mikes team
let mikesTeam=[116, 94,123];

var total=0;
for (var i = 0; i < mikesTeam.length; i++) {
    total += mikesTeam[i];
    
}
var avgMikes = total / mikesTeam.length;
console.log(avgMikes);

if(avgMikes > avgJohns){
    console.log(`Mike's team wins with ${avgMikes} points`)
}else{
    console.log(`John's team wins with ${avgJohns} points`)
}

let johnsTeamScore= (89+120+103)/3;
let mikeTeamScore= (116+94+123)/3;

if(johnsTeamScore>mikeTeamScore){
    console.log(`John's team wins with ${johnsTeamScore} points`)
}else if(mikeTeamScore>johnsTeamScore){
    console.log(`Mike's team wins with ${mikeTeamScore} points`)
}else{
    console.log("there is draw")
}

//Mary's team
let maryTeam=(97+ 137+105)/3;
console.log(maryTeam)
if(johnsTeamScore > mikeTeamScore && johnsTeamScore > maryTeam){
    console.log(`John's team wins with ${johnsTeamScore} points`)
}
else if(mikeTeamScore>johnsTeamScore && mikeTeamScore>maryTeam ){
    console.log(`Mike's team wins with ${mikeTeamScore} points`)
}
else if(maryTeam>johnsTeamScore && maryTeam>mikeTeamScore ){
    console.log(`Mary's team wins with ${maryTeam} points`)
}
else{
    console.log("there is draw")
}

