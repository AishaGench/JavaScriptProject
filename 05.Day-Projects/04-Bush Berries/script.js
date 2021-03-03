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

function allPink1(arr){
  let notSafe= arr.some(colour=>(colour !=='pink'))
if(notSafe){
  console.log('It is not safe')
}else{
  console.log('It is safe, you can eat')
}

}
allPink1(bushBerryColours1)
allPink1(bushBerryColours2)
//  console.log(allPink(bushBerryColours1))
//  console.log(allPink(bushBerryColours2))

/* function bushChecker(arr) {
  //let dangeriousItem = arr.find(item => ( item !== "pink"));
  let dangeriousItem = arr.some(item => ( item !== "pink"));
  if (dangeriousItem){
    console.log(dangeriousItem)
    console.log("it is not safe")
  } else {
    console.log("it is safe")
  }
}
bushChecker(bushBerryColours1);
bushChecker(bushBerryColours2); */

function allPink(arr){

  let safe = arr.every((item =>item ==='pink'));
  return safe;
  
  
}
console.log(allPink(bushBerryColours1))
console.log(allPink(bushBerryColours2))


