/* 
  You are given an array of names.
*/

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

const nameA = names.find(item =>item[0] =='A' && item.length >7)
console.log(nameA);

const nameB = names.filter(item =>item[0] !=='A')
console.log(nameB);

