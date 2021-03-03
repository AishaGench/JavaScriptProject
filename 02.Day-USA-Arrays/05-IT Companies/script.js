let phone=[];

phone=[2,3,4,5,6];
console.log(phone.length);

firstItem=phone[0];
console.log(firstItem);

let mid=phone[(phone.length-1)/2];
//console.log((phone.length-1)/2);
console.log(mid);

let lastItem=phone[phone.length-1]
console.log(lastItem);

let mixedDataTypes=["apple",3,"true","orange",7,null];
console.log(mixedDataTypes);

let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];
console.log(itCompanies);

let firstComapany=itCompanies[0];
console.log(firstComapany);

let middleComapny=itCompanies[(itCompanies.length-1)/2]
console.log(middleComapny);

let lastCompany=itCompanies[itCompanies.length-1];
console.log(lastCompany);

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// for(item of itCompanies){
//     console.log(item.toUpperCase());
// }

// for(i in itCompanies){
//     console.log(itCompanies[i].toLowerCase());
// }

console.log(itCompanies.concat("are big comapnies").join());

let company = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(company[company.indexOf("Google")])

console.log(itCompanies.includes("Yahoo"));

console.log(itCompanies.sort());

// function reverseArr(arr){
//     var newArr=[];
//     for(var i= arr.length; i>0; i--){
//         newArr.push(arr.pop());
//     }
//     return newArr;
// }
// console.log(reverseArr(["Amazon", "Apple", "Facebook", "Google", "IBM", "Microsoft", "Oracle"]))

console.log(itCompanies.reverse());

console.log(itCompanies.slice(3));

console.log(itCompanies.slice(0,4));

let companyMid =itCompanies[(itCompanies.length-1)/2].slice();
console.log(companyMid);

itCompanies.splice(3,1)
console.log(itCompanies);

itCompanies.shift();
console.log(itCompanies);

itCompanies.splice(2,1)
console.log(itCompanies)

itCompanies.pop()
console.log(itCompanies)

while(itCompanies.length > 0) {
    itCompanies.pop();
}
console.log(itCompanies);