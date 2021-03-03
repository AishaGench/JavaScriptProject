
// Filter out countries
const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States' ]



// 1.	Extract all the countries contain the word 'land' from the countries array and print it as array
function countryFind1(arr) {
  let resultArr = [];
  for (i=0 ; i < arr.length ; i++) {
    if(arr[i].includes("land")){
      resultArr.push(arr[i]);
    }
  }

  return resultArr; 
}
console.log(countryFind1(countries))


//2.Find the country containing the hightest number of characters in the countries array
/* function longestCountry(arr){
  let longest='';
  for(i=0; i<arr.length; i++){
    if(arr[i].length > longest.length){
      longest=arr[i]
    }
  }
  return longest;
}
console.log(longestCountry(countries)) */

function longestCountry2(arr){
  return arr.reduce((a, b) => a.length > b.length ? a : b, '');
}
console.log(longestCountry2(countries));

//3. Sort the countries by length of characters in the countries array
function countrySort(arr){
    arr.sort(function(a,b){
      a.length - b.length;
    })
    return arr

}
console.log(countrySort(countries))


// 4.	Extract all the countries containing only four characters from the countries array and print it as array
function countryFind4(arr){
  let countryFound = [];
  for(i=0; i<arr.length; i++){
    if(arr[i].length === 4){
      countryFound.push(arr[i])
    }
  }
  return countryFound;

}
console.log(countryFind4(countries))


// 5.	Extract all the countries containing two or more words from the countries array and print it as array
function countryFind5(arr){
  let countryFound =[];
  for(i=0; i<arr.length; i++){
    if(arr[i].includes(' ')){
      countryFound.push(arr[i])
    }
  }
  return countryFound;
}
console.log(countryFind5(countries))


// 6.	Reverse the countries array and capitalize each country and stored it as an array.
function countryFind6(arr){
  let countryFound = [];
  for (i=0; i<arr.length; i++){ 
    if(arr[i].includes(" ")){
      let doubleWord = arr[i].split(' ')
      for (j=0 ; j < doubleWord.length ; j++){ 
        doubleWord[j] = doubleWord[j].charAt(0).toUpperCase() + doubleWord[j].substring(1);
      }
      countryFound.push(doubleWord.join(' '))
      } else {
      countryFound.push(arr[i][0].toUpperCase() + arr[i].substring(1));
    }
    }
    return countryFound;
  }

console.log(countryFind6(countries));



//7.	Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.

function countryFind7(arr) {
  let resultArr = [];
  for (i=0 ; i < arr.length ; i++) {
    if(!arr[i].includes("land")){
      resultArr.push(arr[i].concat('land'));
    }
  }

  return resultArr; 
}
console.log(countryFind7(countries))

