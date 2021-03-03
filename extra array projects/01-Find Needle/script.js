/* 
  You are given arrays.
*/

var haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'nedle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];


function findNeedle (arr) {

  foundItem = arr.find((element) => element === 'needle')

  if(foundItem){
    return `Found the ${foundItem} at position ${arr.indexOf('needle')}`;
  }else{
    return `Didn’t found needle, sorry!`
  }

}
console.log(findNeedle(haystack_1))
console.log(findNeedle(haystack_2))
console.log(findNeedle(haystack_3))



function findAnyItem (arr, item) {
  let foundItem= arr.filter((element) => element !==undefined);
  const foundelement = foundItem.filter((element) =>
  element.toString().includes(item)
);
let resultArr = [];

if (foundelement.length > 0) {
  for (i = 0; i < foundelement.length; i++) {
    // i want to write my finding to the result array
    resultArr.push(
      `found the '${item}' at index position ${arr.indexOf(foundelement[i])}`
    );
  }
} else {
  return `didin't found '${item}', sorry!`;
}
return resultArr.join(" ; ");
}
console.log(findAnyItem(haystack_1, "cat"));
console.log(findAnyItem(haystack_2, "cat"));
console.log(findAnyItem(haystack_3, "cat"));





