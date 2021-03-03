var massJohn=76;
var heightJohn=1.80;
var massMark=67;
var heightMark=1.83;
BMIJohn = massJohn / (heightJohn*heightJohn);
console.log(BMIJohn);
BMIMark = massMark / (heightMark*heightMark);
console.log(BMIMark);
//BMI of John and Mark
console.log(Math.floor (BMIJohn));
console.log(Math.floor (BMIMark));
console.log(Math.round (BMIJohn));
console.log(Math.round (BMIMark));
BMIJohn.toFixed(2);
BMIMark.toFixed(3);
console.log(BMIMark.toFixed(3));
const higherBMI = BMIJohn > BMIMark; 
console.log(higherBMI);
const higherBMI2 = BMIJohn < BMIMark; 
console.log(higherBMI2);
console.log(`Is Mark's BMI is higher than John's? 
Answer is “true". Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}` );
