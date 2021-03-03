
const calculateCharacter = () =>{
    var tweet=prompt("write your tweet");
    var tweetCount=tweet.length;
    //number of letters
    var tweetLeft = 150 - tweetCount;
    var yourName = prompt("write your name");
    console.log(`${yourName} You have written ${tweetCount} characters, you have ${tweetLeft} charecters remaining. `);

}

// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter);
