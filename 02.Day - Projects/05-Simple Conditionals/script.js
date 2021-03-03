/* let grade=prompt("Enter your gradation number");
if(grade>=80 && grade<=100){
  console.log(`${grade} is in the range of grade 'A'`
  )  
}else if(grade>=70 && grade<=79){
    console.log(`${grade} is in the range of grade 'B'`
    )
}else if(grade>=60 && grade<=69){
    console.log(`${grade} is in the range of grade 'C'`
    )
}else if(grade>=50 && grade<=59){
    console.log(`${grade} is in the range of grade 'D'`
    )
}else if(grade>=0 && grade<=49){
    console.log(`${grade} is in the range of grade 'F'`
    )
}else{
    alert("Please enter your grade between 0 and 100!!!")
} */

/* let month=prompt("Enter your current month");
switch(true){
    case month=='september' || month=='october' || month=='noverber':
        console.log("Autumn")
        break;
    case month=='december' ||month== 'january' || month=='february':
        console.log("Winter")
        break;
    case month=='march' ||month== 'april' ||month== 'may':
        console.log("Spring")
        break;
    case month=='june' || month== 'july' || month== 'august':
        console.log("Summer")
        break;
        default:
            console.log("Enter valid month!!")
} */
let month="January";
let monthName=""
let days=""
switch (month) {
    case 1:
        monthName = "January";
        days = 31;
        break;
    case 2:
        monthName = "February";
        if ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) {
            days = 29;
        } else {
            days = 28;
        }
        break;
    case 3:
        monthName = "March";
        days = 31;
        break;
    case 4:
        monthName = "April";
        days = 30;
        break;
    case 5:
        monthName = "May";
        days = 31;
        break;
    case 6:
        monthName = "June";
        days = 30;
        break;
    case 7:
        monthName = "July";
        days = 31;
        break;
    case 8:
        monthNameOfName = "August";
        days = 31;
        break;
    case 9:
        monthName = "September";
        days = 30;
        break;
    case 10:
        monthName = "October";
        days = 31;
        break;
    case 11:
        monthName = "November";
        days = 30;
        break;
    case 12:
        monthName = "December";
        number_Of_DaysInMonth = 31;
        console.log(`${MonthName}  year ${days} " days"`);
}








