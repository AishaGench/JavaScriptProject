// Get all keys or properties of users object
// Get all the values of users object
// Get the length of this object
// Find the person who has many skills in the users object.
// Count logged in users,count users having greater than equal to 50 points from the following object.
// Find people who are MERN stack developer from the users object
// Set your name in the users object without modifying the original users object
// Use the users object to print a string like:
// Asab is 25 years old. He knows "HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor".




//step-1 v.1
console.log(Object.keys(users)) // sonucu bir array []

console.log(users.Asab.email)
console.log(users["Asab"].email)

//step-1 v.2
for (abc in users) {
  console.log(abc);     // tek tek alıyorum keyleri
}

// //step-2 v.1
console.log(Object.values(users))

// //step-2 v.2
for (key in users) {
  console.log(users[key]);
}

//step-3
//version-1
Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
// Get the size of an object
//console.log(Object.size(users));

//version-2
//console.log(Object.keys(users).length)


//step-4
//version-1
function manySkills(obj){
  var name="";
  var many= {
    skills:[]
  };
  for (key in obj) {
    if (obj[key].skills.length > many.skills.length) {
      many = obj[key];
      name= key
    };
  }
  return name;
}
//console.log(manySkills(users));

//version-2
function manySkills2(obj){
  var name="";
  let count=0;
  for (key in obj) {
    if (obj[key].skills.length > count) {
      count = obj[key].skills.length;
      name= key
    };
  }
  return name;
}
console.log(`${manySkills2(users)} is the most skilled man`);


//version-3
const theMostSkilledPerson= Object.keys(users).sort((a,b)=>(users[b]["skills"].length)-(users[a]['skills'].length))[0]
console.log("the most skillfull person is "+theMostSkilledPerson)



//version-4
console.log(Object.entries(users))
  var nameMost="";
  let counter=0;
  Object.values(users).forEach(element => {
    if (element.skills.length > counter) {
      counter = element.skills.length;
      nameMost= element
  }
}); 
 console.log(nameMost)   
 



//step-5
//version-1
function count50(obj){
  var counter= "";
  for (key in obj) {
    if (obj[key].points >= 50) {
      counter++;
    };
  }
  return `There are ${counter} users above 50 points`;
}
//console.log(count50(users));



//step-6
//version-1
function findMERN(obj){
  let counter= 0;
  let mernUsers = [];
  for (key in obj) {
    if (obj[key].skills.includes('MongoDB' && 'Express' && 'React' && 'Node')) {
      counter++;
      mernUsers.push(key);
    };
  }
  return `There are ${counter} MERN users, and the names are; ${mernUsers}`;
}
//console.log(findMERN(users));

const myArr = Object.values(users);
const mernDevs = myArr.filter(element => {
  if(element.skills.includes('Node') && element.skills.includes('MongoDB') && element.skills.includes('Express') && element.skills.includes('React')){
    return element;
  }})
console.log(mernDevs)


//step-7
users.Musty = {
  email: 'musty@musty.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'SASS', 'MongoDB', 'Express', 'React', 'Node'],
  age: 40,
  isLoggedIn: true,
  points: 60
}
//console.log(users)


//step-8
//version-1
for (const key in users) {
  //console.log([key]);
users[key].name = key;
users[key].getPersonInfo = function() {
  let statement = `${this.name} is ${this.age} years old.\nHe knows ${this.skills}.`
  return statement
}
}
//console.log(users.Alex.getPersonInfo())

//version-2
console.log(Object.entries(users))
for (const [key] of Object.entries(users)) {
  console.log([key]);
  users[key].getPersonInform = function() {
    let statement = `${key} is ${this.age} years old.\nHe knows ${this.skills}.`
    return statement
  } 
}
//console.log(users.Asab.getPersonInform())