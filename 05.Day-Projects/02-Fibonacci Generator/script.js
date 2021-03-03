function fibonacciGen (num) {
    myFiboNums =[0,1];
        for (let i = 2; i < num + 1; i++){
            myFiboNums.push( myFiboNums[i - 2] +  myFiboNums[i -1])
          }
          return myFiboNums;
}
console.log(fibonacciGen(10))


function fibonacciFinder (num) {
    let GoldenRatio = 1.618;

   let  fibNew =Math.round((Math.pow(GoldenRatio, num-1)- Math.pow((1-GoldenRatio), num-1)) / Math.sqrt(5));

    return fibNew;
}
     console.log(fibonacciFinder(6));



