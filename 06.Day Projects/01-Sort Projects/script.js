/*
Create a function which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted numbers in ascending and descending order 

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/ 

 const arrCase1 = [false, 100, [24, 33], "💩", 55, "🥵", null, 45, "Sanyia", 66, "James", 23];
const arrCase2 = ["28", 100, 60, "Elamin", 55, "75", "🍕"];

/* ======= TESTS ===== */
function handleFilter(arr) {
    let newArray=[];
    for(let i =0; i<arr.length; i++){
        if(typeof arr[i] === 'number'){
            newArray.push(arr[i])
        }
    }
    return newArray;
}
    console.log(handleFilter(arrCase1))
    console.log(handleFilter(arrCase2))


const typeNumber = (para)=>  {
    let array=[]
    array = para.filter(item => typeof item === 'number')
    return array;
}
console.log(typeNumber(arrCase1))
console.log(typeNumber(arrCase2))

const handleSort = () => {
   return typeNumber(arrCase1).sort((x,y) => x - y);
} 
console.log(handleSort())



