let nm=['Ben','Jenny','Michael','Chloe','Timmy']

function whoIsWashing(arr){
    let people=arr.length
    let wash=Math.floor(Math.random() * people)
    let randomPerson = arr[wash];

    console.log(`You are ${people} people today and:`);
    return randomPerson + " is going to wash today!";
}
console.log(whoIsWashing(nm));

nm.push('Max');
console.log(nm);
let neighbor=['Ahmet','Enes','Mikail','Tamer'];
console.log(whoIsWashing(neighbor));