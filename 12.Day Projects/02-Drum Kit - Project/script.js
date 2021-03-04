//let drum1 = document.querySelector(".w")

let drums = document.querySelectorAll(".drum")

// drum1.onclick = () =>{
//     new Audio("sounds/tom-w.mp3").play();
// }


for(i = 0; i < drums.length; i++){
    drums[i].addEventListener('click',function(){

        let button = this.value;

        new Audio(`sounds/${button}.mp3`).play();
    })
}
document.addEventListener("keypress",function(event){
       let result = event.key
       new Audio(`sounds/tom-${result}.mp3`).play();
       const button = document.querySelector('.' + result);
       button.classList.add('pressed');
       setTimeout(() => {
        button.classList.remove("pressed");
      }, 100);
    
})