/*Identify and fix the syntax errors in the arrays below.*/

var toys = ["car", "truck", "wagon"];           // ??
console.log(toys);

var numbers = [ 9, 0, 1, 0.1, 5];            // ??
console.log(numbers);       

var letters = ["a", "b", "c", "d"];           // ??
console.log(letters);

var cars= ["ford", "dodge", "kia", "lexus", "tesla"];          // ?
console.log(cars);

cars[10]="mercedes";           // ??
console.log(cars);

cars.splice(0, 0, "bmw")         // ??
console.log(cars);


var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
var [ x , y , z ] = person;           // ??
console.log(`${x} ${y} is ${z} years old`)
