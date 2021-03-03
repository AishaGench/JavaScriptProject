/*
  You are given a list of some London street names.

  Write a function that will return all street names which contain 'Lane' in their name.
*/
const streetNames = [
    "Carnaby Street",
    "Abchurch Lane",
    "Adam's Court",
    "Piccadilly Street",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk",
    "Brick Lane"
]

// main solution
function filterStreet(arr) {
  
  let resultArr = [];
  for (i=0 ; i < arr.length ; i++) {
    if(arr[i].includes("Lane")){
      resultArr.push(arr[i]);
    }
  }

  return resultArr; 
}

console.log(filterStreet(streetNames));


// main solution but longer (without includes)
function filterStreet2(arr) {
  
  let resultArr = [];

  for (i=0 ; i < arr.length ; i++) {
    let eachItem = arr[i].split(" "); // makes every item seperate array
    //console.log(eachItem)
    for (j=0 ; j < eachItem.length ; j++) {   // inside a for loop use different letter like "j"
      if(eachItem[j] === "Lane"){
        resultArr.push(eachItem.join(" "));
      }
    }
  }

  return resultArr; 
}

console.log(filterStreet2(streetNames));



//first Method with two functions
function filterLane(item) {
  if (item.indexOf('Lane') > -1 ) {
    return true;
  } 
  return false; 
}

function getLanes(arr) {
  return arr.filter(filterLane)
}

console.log(getLanes(streetNames));


//second Method
function getLanes2(arr) {
  let result = arr.filter(element => element.indexOf('Lane') > -1);
  return result;
}
console.log(getLanes2(streetNames))


//third Method
function getLanes3(arr) {
  let result = arr.filter(element => element.includes('Lane'));
  return result;
}
console.log(getLanes3(streetNames))


//without function
console.log(streetNames.filter(element => element.includes('Lane')))
