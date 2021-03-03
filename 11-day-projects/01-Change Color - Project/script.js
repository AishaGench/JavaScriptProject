//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
//step 1
let button1 = document.getElementById('button1');

let body = document.querySelector("body");

button1.onclick = () => {
    let colorIndex = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
    
}


let button2 = document.getElementById('button2');
const hexCode = ['a','b','c','d','e','f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let colorIndex = () =>{
   return Math.floor(Math.random()*hexCode.length)
};

const h1 = document.querySelector('h1')

button2.onclick = () => {
    let colorCode = `${hexCode[colorIndex()]} ${hexCode[colorIndex()]} ${hexCode[colorIndex()]} ${hexCode[colorIndex()]} ${hexCode[colorIndex()]} ${hexCode[colorIndex()]}`

    body.style.backgroundColor = '#' + colorCode;

    h1.innerHTML= '#' + colorCode;
}
/* button2.onclick = () => {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * alphanumeric.length);
      hexCode += alphanumeric[index];
    }
    h1.textContent = hexCode;
    body.style.backgroundColor = hexCode;
  }; */
  