const kelvin=293;
//const kelvin 293
const celsius = kelvin-273;
//that Celsius is 273 degrees less than Kelvin
var fahrenheit = celsius * (9/5) + 32;
 console.log(Math.round(fahrenheit));
 //.round() method from the built-in Math object to round the Fahrenheit temperature
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)