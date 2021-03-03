let age=20;

if(age >=18){
    console.log('John can drink "beer" or "Juice"')
}else{
    console.log('John can drink "Juice"')
}
console.log(age>=18 ?'John can drink "beer" or "Juice"':'John can drink "Juice"' )
//we use ternary operator
switch(true){
case age<13:
    console.log("John is a boy")
    break;
    case age >=13 && age <20:
    console.log("John is a teenager")
    break;
    case age >=20 && age <30:
    console.log("John is a young man")
    break;
    default:
    console.log("John is a man")  
}
let job="student"
switch(job){
    case 'instructor':
        console.log("teach how do code")
        break;
        case 'driver':
        console.log("be careful on the way!")
        break;
        case 'designer':
        console.log("built a home")
        break;
        case 'teacher':
        console.log("go class")
        break;
        default:
        console.log("stay at home!")  
    }

    