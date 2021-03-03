/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 4 print “Umpa” instead of the number 
  - For the multiples of 5 print “Lumpa”. 
  - For numbers which are multiples of both 4 and 5 print “Umpa-Lumpa”

  An array with numbers 1-25 has been provided.
*/

var arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

function umpaLumpa(num){
for( i =1; i<=num; i++){
  if (i % 4 == 0 && i % 5 == 0) {
    console.log("Umpa-Lumpa");
} else if (i % 4 == 0) {
  console.log("Umpa");
} else if (i % 5 == 0) {
  console.log("Lumpa");
} else {
  console.log(i);
}
}
}  
umpaLumpa(25)
  
