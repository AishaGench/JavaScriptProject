// create variables containing strings
//Use an array to hold the value of the quotes

var jim = 'Beware of what you become in pursuit of what you want.';

var epic = 'It\'s not what happens to you, but how you react to it that matters.';

var frank = 'The best revenge is massive success';

var wayne = 'You miss 100% of the shots you don\'t take';

var mandela = 'Resentment is like drinking poison and waiting for your enemies to die';

var elbert = 'Do not take life too seriously. You will not get out alive.';

 let arrays = [jim,epic,frank,wayne,mandela,elbert];
 let days =['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
 arrays.sort();
 console.log(arrays);

 let generateQuote =(param1)=>{
     let num = Math.floor(Math.random()*param1.length);
     //console.log(param1[num])
     console.log(`Today is ${days[num]} and today's quote is ${param1[num]}`)
 }
 
generateQuote(arrays)


