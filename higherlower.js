let num = Math.floor(Math.random() * 20) + 1;

console.log(num);

let guess = "";
let input = document.getElementById("guess");
input.addEventListener("input", (e) => { guess = e.target.value });

function do_guess() {

    let message = document.getElementById("message");

    if(guess == num){
        message.innerHTML = "You got it!";
    }
else if (guess > num) { 
    message.innerHTML = "no, try a lower number.";
 }     
else {
    message.innerHTML = "no, try a higher number.";
}
}