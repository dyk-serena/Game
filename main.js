let secretNumber = Math.floor(Math.random()*20+1)
console.log(secretNumber)
let highscore = 0

const displayMessage = function(message){
    const selectNumber = document.querySelector(".selectNumber")
    selectNumber.textContent = message
}
const functionBox = document.querySelector(".game_function_box")
const confirm_one = document.querySelector(".confirm")
const number = document.querySelector(".number")
const hint = document.querySelector(".hint")
const next = document.querySelector(".next")

confirm_one.addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess_input").value)
    number.textContent = "?"

    // no number
    if(!guess){
        displayMessage("No Number 🚫")
    }
    // if user win
    if(guess === secretNumber){
        displayMessage("Correct Number 🏆");
         number.textContent = guess
         hint.textContent = " "

    functionBox.style.backgroundColor ="green"
    functionBox.style.transition = "2s ease-in"
    }else{
        displayMessage("Wrong Number 👎❌");
        functionBox.style.backgroundColor ="red"
        functionBox.style.transition = "2s ease-in";
        }
        if(guess > secretNumber){
            hint.textContent = "Hint: It's lower than inputed number"
        }
        if(guess < secretNumber){
            hint.textContent = "Hint: It's higher than inputed number"
        }
    
})

const reset = document.querySelector(".reset")
reset.addEventListener("click", function(){
    // const guess = document.querySelector(".guessInput").value
    displayMessage("Start guessing...")
    number.textContent = "?"
    functionBox.style.backgroundColor = "white"
})
next.addEventListener("click", function(){
    location.reload();
})

