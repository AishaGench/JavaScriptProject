
//Use an array to hold the value of the quotes

    const quote1 = 'Beware of what you become in pursuit of what you want. - Jim Rohn';
    const quote2 = 'It\'s not what happens to you, but how you react to it that matters. - Epictetus';
    const quote3 = 'The best revenge is massive success. - Frank Sinatra';
    const quote4 = 'You miss 100% of the shots you don\'t take. - Wayne Gretzy';
    const quote5 = 'Resentment is like drinking poison and waiting for your enemies to die. - Nelson Mandela';
    const quote6 = 'Do not take life too seriously. You will not get out alive. - Elbert Hubbard';


const arrayOfQuotes = [quote1,quote2,quote3,quote4,quote5,quote6];

arrayOfQuotes.sort();

console.log(arrayOfQuotes);

arrayOfQuotes.pop(); //remove string Javascript

console.log(arrayOfQuotes);

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] 


function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length);
    //console.log(arrayOfQuotes[random]);
   
    console.log(`Today is ${days[random]} and todays quote is: "${arrayOfQuotes[random]}"`);

}

document.getElementById("btn").addEventListener("click", generateQuote);




// function generateQuote(arr){
//     const random = Number.parseInt(Math.random()*arrayOfQuotes.length);
//     console.log(random);
//     return arr[random]
// }
// console.log(generateQuote(arrayOfQuotes));
// console.log(`Today is ${generateQuote(days)} and todays quote is: "${generateQuote(arrayOfQuotes)}"`);

