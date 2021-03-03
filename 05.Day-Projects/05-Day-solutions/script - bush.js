/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.

  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!

  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.

  Use the tests to confirm which message to return
*/

let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]

//***** VERSION ONE */
function safeBush (arr) {
let dangeriousItems = [];
  for (i=0; i<arr.length ; i++) {
    if (arr[i] != "pink") {
      dangeriousItems.push(arr[i]);
    } 
  }  
  
  if (dangeriousItems.length > 0) {
      return "this bush is not safe"
    }
    else {
      return "this bush is safe for eat"
    }
  
}
console.log(safeBush(bushBerryColours1));
console.log(safeBush(bushBerryColours2));
///******* */



//***** VERSION TWO */
function bushChecker(arr) {
  
  let dangeriousItem = arr.find(item => ( item !== "pink"));
  //let dangeriousItems = arr.filter(item => ( item !== "pink"));
  
  if (dangeriousItem){
    console.log(dangeriousItem)
    console.log("it is not safe")
  } else {
    console.log("it is safe")
  }
}

bushChecker(bushBerryColours1);
bushChecker(bushBerryColours2);



//***** VERSION THREE */
function bushControl(arr) {
  
  let dangeriousItems = arr.some(item => ( item !== "pink")); // some returns "true" if condtion is true.
  //console.log(dangeriousItems)
  
  if (dangeriousItems){
    console.log("it is not safe")
  } else {
    console.log("it is safe")
  }
}

bushControl(bushBerryColours1);
bushControl(bushBerryColours2);


//***** VERSION FOUR */
function bushControl4(arr) {
  
  let dangeriousItems = arr.every(item => ( item === "pink")); // every returns "true" if condtion is true.
  //console.log(dangeriousItems)
  
  if (dangeriousItems){
    console.log("it is safe")
  } else {
    console.log("it is not safe")
  }
}

 bushControl4(bushBerryColours1);
 bushControl4(bushBerryColours2);