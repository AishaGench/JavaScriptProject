
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
/* function newCountries(arr){

for(i=0; i<arr.length; i++){
  arr[i] = [arr[i], arr[i].substring(0, 3), arr[i].length]
  console.log(arr[i])

}
return arr;
}
console.log(newCountries(countries)) */


/* // Add "-" after every even number
const numbers = "315469781318158";
function evenNumber(num){
  const result =[];

  for( i=0; i<num.length; i++){
    if(num[i]%2 === 0){
      result.push(num[i]+ '-')
    }else{
      result.push(num[i])
    }
  }
 return result.join('')
}
console.log(evenNumber(numbers)) */


// Find odd numbers
 var arr = [5, 24, 122, 625, 3125, 15625];
 /* function countOdd(array){
   let count=[];
   for(i=0; i<array.length; i++){
     if(array[i]%2 !== 0){
       count.push(array[i])
     }
   }
   return count;
 }
 console.log(countOdd(arr)) */

 /* function countOdd(array){
  let count=[];
  for(i=0; i<array.length; i++){
    count.push(array[i]/25)
  }
  return count;
}
console.log(countOdd(arr)) */

function filterNum(num){
  return num %2 ==1
}

function mapNum(num){
  return num /25
}
console.log(arr.filter(filterNum).map(mapNum))


 

 