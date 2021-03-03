function convertToUSD(value){
return (1.4*value).toFixed(2)
}
console.log(convertToUSD(3))

function convertToBRL(value){
return((5.7*value)*0.99).toFixed(2)
}
console.log(convertToBRL(39))

function convertToAll(currency, value) {
    if (currency === "USD") {
      return convertToUSD(value);
    } else if (currency === "BRL"){
      return convertToBRL(value);
    } else {
      return "enter correct currency"
    }
  }
    console.log(convertToAll("USD", 1000));
  