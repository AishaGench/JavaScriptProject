//Transform a string into an array and fix it!
var martinFowler="Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design";

var favoriteQuote=martinFowler.split(' ');
console.log(favoriteQuote);

console.log(favoriteQuote.length);

favoriteQuote.pop();
console.log(favoriteQuote);
console.log(favoriteQuote.length);

favoriteQuote.push('Development', 'ThoughtWorks','Inc' );
console.log(favoriteQuote);

// favoriteQuote[1]="fool";
// console.log(favoriteQuote);

console.log(favoriteQuote.indexOf("body"));
favoriteQuote.splice(1,1,"cool");
console.log(favoriteQuote);

favoriteQuote.shift();
console.log(favoriteQuote);

favoriteQuote.unshift("Any");
console.log(favoriteQuote);

favoriteQuote.splice(7,5,"computer");
console.log(favoriteQuote);

console.log(favoriteQuote.join(" "));


