const keys =Object.values(users)
console.log(keys);

const values = Object.values(users)
console.log(values);

console.log(keys.length);


/* for (key in users) {
    console.log(key);
  }
  for (key in users) {
    console.log(users[key]);
  } */

  function manySkills(obj) {
    var name = '';
    var count = 0;
    for (props in obj) {
      if (obj[props].skills.length > count) {
        count = obj[props].skills.length;
        name = props;
      }
    }
    return name + ' ' + count;
}
  console.log(manySkills(users));
  

  const pointFinder=(obj)=>{
let count = 0;
for(let props in obj){
    if(obj[props].points >=50){
        count +=1;
    }
} return count;

}
console.log(pointFinder(users))
  
const findMern=(obj)=>{
    let result=[];
    for(let item in obj){
    if(obj[item].skills.includes('MongoDB'&& 'Express'&& 'React'&&'Node')){
        result.push(item)
    }
    }
    return result;
}
console.log(findMern(users))

users.Aysegul={
    email: 'ayasegul@aysegul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  }
  console.log(users)

  const str=(staff)=>{
      console.log(`${staff} is ${users[staff].age} years old. He knows ${users[staff].skills}`)
  }
  str('Paul');

  for (const key in users) {
    //console.log([key]);
    users[key].name = key;
    console.log(users[key].name)
    users[key].getPersonInfo = function () {
      let statement = `${this.name} is ${this.age} years old. He knows ${this.skills}.`;
      return statement;
    };
  }
  console.log(users.Alex.getPersonInfo());
  


  