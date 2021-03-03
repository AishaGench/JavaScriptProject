

function calculateTips(bill){
    if(bill<50){
        return bill*0.2
    }else if(bill>=50 && bill<200){
        return bill*0.15
    }else {
        return bill*0.10
    }
}
// console.log(calculateTips(prompt('Enter your total')))

let arrBill=[124,48,75,268]
function getTotalTips(){
    
return (calculateTips(arrBill[0])+calculateTips(arrBill[1])+calculateTips(arrBill[2])+calculateTips(arrBill[3]))
    
}
console.log(getTotalTips())

let totalBudget=750
let totalTips = getTotalTips();
let totalBills = arrBill[0]+arrBill[1]+arrBill[2]+arrBill[3];
console.log(totalTips + totalBills)

function budgetDust(){
if ((totalTips+totalBills)>totalBudget*0.8){
    console.log(`You spend enough, Stop!`)
}else{
    console.log(`your budget is ok`)
}
}
budgetDust()

