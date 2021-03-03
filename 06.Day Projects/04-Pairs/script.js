/*
  You are given a program that logs pairings between two students group
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
*/
var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, [3, 0], "whoops"];

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

let newArray =pairsByIndexRaw.filter(item => typeof item === "object" && item !== null && item.length ===2)

console.log(newArray)

function pairs() {
    let str = newArray.map(item=>[students [item[0]],mentors[item[1]]]);
    return str;

}
console.log(pairs())
//console.log(`${students[str]}'s " mentor is  "${mentors[str]}"`)

//filtered(newArray);