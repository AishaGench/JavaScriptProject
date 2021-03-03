/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
Their computer detects a list of nearby planets that have Oxygen in their atmosphere. It has produced an array of their Oxygen levels.

To be safe to land on, a planet needs to have an Oxygen level between 19.5% and 23.5%.

Write a function that finds the first safe oxygen level in the array - Oxygen between 19.5% and 23.5%
*/

const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "22.5%", "18.8%", "19.5%", "20.2%", "31.6%"];


//****** BASIC VERSION *****/
//find first match
function safeLevelsFirst4(arr) {
  for (i=0 ; i < arr.length; i++) {
    if(arr[i] > "19.5%" && arr[i] < "23.5%") {  //this is our condition
      return arr[i];     // "i" is the same index of arr, returns first match and program stops.
    }
  }
}

//find all match results
function safeLevelsAll4(arr) {
  let resultArr = [];           // to add all true results.
  for (i=0 ; i < arr.length; i++) {
    if(parseInt(arr[i]) > 19.5 && parseInt(arr[i]) < 23.5) {  //this is our condition
      resultArr.push(arr[i]);     // "i" is the same index of arr
    }
  }
  return resultArr;
}

console.log(safeLevelsFirst4(oxygenLevels1));
console.log(safeLevelsAll4(oxygenLevels2));
//********** */



//****** FIRST VERSION *****/
// NOTE : solution based on to remove "%"! 
//find first match
function safeLevelsFirst(arr) {
  let justNumArr = [];          //first we need to seperate "%" from number part
  for (i=0 ; i < arr.length; i++) {
    let item = arr[i].split("%")
    justNumArr.push(item[0]);      // we created an array just consist of numbers, so we can compare...
  }
  console.log(justNumArr)       // items are all string, be careful

  for (i=0 ; i < justNumArr.length; i++) {
    if(parseInt(justNumArr[i]) > 19.5 && parseInt(justNumArr[i]) < 23.5) {  //this is our condition
      return arr[i];     // "i" is the same index of arr, returns first match and program stops.
    }
  }
}

//find all match results
function safeLevelsAll(arr) {
  let justNumArr = [];          //first we need to seperate "%" from number part
  for (i=0 ; i < arr.length; i++) {
    let item = arr[i].split("%")
    justNumArr.push(item[0]);      // we created an array just consist of numbers, so we can compare...
  }
  console.log(justNumArr)       // items are all string, be careful

  let resultArr = [];           // to add all true results.
  for (i=0 ; i < justNumArr.length; i++) {
    if(parseInt(justNumArr[i]) > 19.5 && parseInt(justNumArr[i]) < 23.5) {  //this is our condition
      resultArr.push(arr[i]);     // "i" is the same index of arr
    }
  }

  return resultArr;
}

console.log(safeLevelsFirst(oxygenLevels1));
console.log(safeLevelsAll(oxygenLevels2));
//********** */


// ****** SECOND VERSION *****///
//find first match
function safeLevelsFirst2(arr) {
  return arr.find(function safeFirst(item) {
    if (parseFloat(item) > 19.5 && parseFloat(item) < 23.5) {
      return true;
    } 
    return false; 
  })
}

//find all match results
function safeLevelsAll2(arr) {
  return arr.filter(function safeAll(item) {
    if (parseFloat(item) > 19.5 && parseFloat(item) < 23.5) {
      return true;
    } 
    return false; 
  })
}

console.log(safeLevelsFirst2(oxygenLevels1));
console.log(safeLevelsAll2(oxygenLevels2));
//**************** */


// ****** THIRD VERSION *****///
//find first match
function safeLevelsFirst3(arr) {
  return arr.find(item => (parseFloat(item) > 19.5 && parseFloat(item) < 23.5))   // find returns firts item if condition is true;
}

//find all match results
function safeLevelsAll3(arr) {
  return arr.filter(item => (parseFloat(item) > 19.5 && parseFloat(item) < 23.5))   // filter returns all items if condition is true;
}

console.log(safeLevelsFirst3(oxygenLevels1));
console.log(safeLevelsAll3(oxygenLevels2));

