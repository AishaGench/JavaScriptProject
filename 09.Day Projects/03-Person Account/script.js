const personAccount ={
    firstName:'Mikail',
    lastName:'Zubeyir',
    incomes:[4000,450,1000,2100],
    expenses:[3900,600,1000],
    totalIncome:function(){
    let totalIn=this.incomes.reduce(function(a,b){return a+b},0)
    return totalIn;
    },

    totalExpense:function(){
        let totalExp=this.expenses.reduce(function(a,b){return a+b},0)
    return totalExp;

    },

    addIncome:function(addNewIncome){
    return this.incomes.push(addNewIncome)
    },

    addExpenses:function(addNewExp){
    return this.incomes.push(addNewExp)
    },

    accountInfo:function () {
        let profit= this.totalIncome()-this.totalExpense()
        return `${this.firstName} ${ this.lastName} has total ${profit} profit totay`
    }
   
}
console.log(personAccount);

console.log(personAccount.totalIncome());

console.log(personAccount.totalExpense());

personAccount.addIncome(3333)
console.log(personAccount.totalIncome());

personAccount.addExpenses(4333)
console.log(personAccount.totalExpense());

console.log(personAccount.accountInfo()); 



