
const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]
attendances.push(["Tamer", 8],["Enes",8],["Sinem",8]);
console.log(attendances);

attendances[2][1]=9;
console.log(attendances);

console.log(`Today ${attendances.length} students came to the class, first student name was ${attendances[0][0]} and last student name was ${attendances[attendances.length-1][0]}.`)

const ave =(attendances[0][1]+attendances[1][1]+attendances[2][1]+attendances[3][1]+attendances[4][1]+attendances[5][1]+attendances[6][1]+attendances[7][1]+attendances[8][1])/9;
console.log(ave.toFixed(2));

// console.log(attendances.splice(3,1));
attendances.splice(3,1);
console.log(attendances);

//console.log(attendances.splice(4,1));
attendances.splice(4,1);
console.log(attendances);

console.log(`We finished class with ${attendances.length} students`);



