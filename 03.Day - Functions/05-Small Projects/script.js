function calculateBMI(mass,height){
    return (mass/(height*height)).toFixed(2);
   }
   console.log(calculateBMI(80,1.6));
   console.log(calculateBMI(84,1.7));

   let MarkBIM = calculateBMI(80,1.6);
   let JohnBIM = calculateBMI(84,1.7);
   let value = calculateBMI();
   function weightCheck (value){
       if (value < 18.5) {
           return `You are underweight`
       }
       else if ( value>=18.5 && value<=24.9){
           return `You are normal weight`
       }
       else if (value>=25 && value<=29.9 ){
           return `You are overweight`
       }
       else{
           return `obese`
       }
   }
   console.log(weightCheck(JohnBIM));
   console.log(weightCheck(MarkBIM));

   let raceNum=Math.floor(Math.random()*1000)
console.log(raceNum)

let earlyRegister =true;
let age=17;
function raceDay(age,earlyRegister){
if(age >18 && earlyRegister){
    raceNum +=1000;
    console.log(`Race will begin at 9:30. Your race number is: ${raceNum}
    `)
}
else if(age >18 && !earlyRegister){
    console.log(`Race will begin at 11:00. Your race number is: ${raceNum}`)
}
else if(age <18 ){
    console.log(`Race will begin at 12:30. Your race number is: ${raceNum}`)
}else{
    console.log("see the registeration desk")
}
}
raceDay(age,earlyRegister)

let grade=prompt("Enter your gradation number");
let gradeName=prompt("Enter your name");
function gradeStudents(grade,gradeName){
if(grade>=80 && grade<=100){
  console.log(`${gradeName}: your grade ${grade} is in the range of grade 'A' `
  )  
}else if(grade>=70 && grade<=79){
    console.log(`${gradeName}: your grade ${grade} is in the range of grade 'B'`
    )
}else if(grade>=60 && grade<=69){
    console.log(`${gradeName}: your grade${grade} is in the range of grade 'C'`
    )
}else if(grade>=50 && grade<=59){
    console.log(`${gradeName}: your grade ${grade} is in the range of grade 'D'`
    )
}else if(grade>=0 && grade<=49){
    console.log(`${gradeName}: your grade ${grade} is in the range of grade 'F'`
    )
}else{
    console.log("Please enter your grade between 0 and 100!!!")
}
}
gradeStudents(grade,gradeName)

