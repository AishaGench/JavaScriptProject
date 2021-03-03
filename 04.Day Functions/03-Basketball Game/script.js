
let scoreJohn = [189, 120,103];
let scoreMike = [129,94,123];

function AverageScore(arr){
    let average =0;
    for(i=0; i<arr.length; i++){
        average += arr[i]
    }
    return(average/arr.length).toFixed(2)
}
console.log(AverageScore(scoreJohn))
console.log(AverageScore(scoreMike))

function isWinner(nm1,nm2,score1,score2){
let average1 =AverageScore(score1)
let average2 =AverageScore(score2)
if(average1>average2){
    return `${nm1}'s winner is the avarega score with ${average1} to ${average2} points of average`
}else if(average2>average1){
    return `${nm2}s winner is the avarega score with ${average2} to ${average1} points of average`
}else{
    return 'There is drawn'
}
}

console.log(isWinner('John','Mike',scoreJohn,scoreMike))



/* if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else {
    console.log('There is a draw');
}

let scoreMary = [97 + 134 + 105];

console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
} */
