
let phone= "12345689456";
console.log(phone);

// const phoneArr1 = phonenum.split("").join("-");
// console.log(phoneArr1)
// phonenum = "12485245656";

let phonenum=phone.split('');
console.log(phonenum);

phonenum.unshift("+");
console.log(phonenum);

phonenum.splice(2,0," (");
console.log(phonenum);

phonenum.splice(6,0,") ");
console.log(phonenum);

phonenum.splice(10,0," ");
console.log(phonenum);

console.log(phonenum.join(" "));


