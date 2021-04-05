var myAge= 38;
//my age
var earlyYears =2;
earlyYears = earlyYears*10.5;
console.log(earlyYears);
laterYears= myAge -2;
console.log(laterYears);
//
laterYears = laterYears *4;
console.log(laterYears);
//
console.log(laterYears);
console.log(earlyYears);
//
var myAgeInDogYears= earlyYears + laterYears;
console.log(myAgeInDogYears);
//
var myName="Aysegul".toLowerCase();
console.log(myName);
//
console.log("My name is " + myName + ". I am " + myAge + " years old in human years which is " 
            + laterYears + " years old in dog years.");
    
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
)

//equation to convert to Tortoise years//
var tortoiseYears=12;
newAge=tortoiseYears*10;
console.log(`Your ${tortoiseYears} year(s) old tortoise would have ${newAge} years if it was a human.`)
