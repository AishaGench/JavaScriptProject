
function calcBottles(money,price){
let bottle=Math.floor(money / price)
    return bottle
}
console.log(calcBottles(54,7))


function calcChange(money,price){
let moneyChange = money%price
return moneyChange
}
console.log(calcChange(54,7))

function getDrink(total,item){
console.log('leave house')
console.log('turn left')
console.log('go to the market')
console.log('buy ' + calcBottles(total, item) + ' bottles of drink')
console.log('pay for drink')
console.log('leave market')
console.log('come back to the house')
console.log('Hello master, here is your '+calcChange(total,item)+ '  change')
}
getDrink(37,7)
