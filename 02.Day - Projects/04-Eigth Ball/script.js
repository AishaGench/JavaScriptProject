let userName = "";
userName=prompt('Enter your name')

console.log(userName)

userName?console.log(`"Hello, " ${userName}!`):console.log(`Hello!`)

let userQuestion="when am I going to win the lottery?"

console.log(`${userName} asked the question of ${userQuestion}`) 


let randomNum=Math.floor(Math.random()*8);

let eigthBall=""
switch(randomNum){
    case 0:
        eigthBall ="It is certain"
        break;
    case 1:
        eigthBall ="It is decidedly so"
        break;
    case 2:
        eigthBall ="Reply hazy try again"
        break; 
    case 4:
        eigthBall ="Cannot predict now"
        break;
    case 5:
        eigthBall ="Do not count on it"
        break;
    case 6:
        eigthBall ="My sources say no"
        break; 
    case 7:
        eigthBall ="Outlook not so good"
        break;
    case 8:
        eigthBall ="Signs point to yes"
        break;
        default:
        eigthBall ="The fortune is not hallal :,)!!"
}
console.log(`and our answer for that is '${eigthBall}'`)


