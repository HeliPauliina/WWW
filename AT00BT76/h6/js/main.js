const mysteryNumber = Math.floor(Math.random() * 100) + 1;
let playersGuess = 0;
let guessesRemaining = 10;
let guessesMade = 0;
let gameState = "";
let gameWon= false;

const input = document.querySelector("#input");
const output = document.querySelector("#output");

const button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(e) {
    if(e.keyCode === 13){
        validateInput();
    }

} 

function clickHandler() {
    validateInput();
}

function validateInput() {
    playersGuess = parseInt(input.value);
    if(isNaN(playersGuess)){
    
        output.innerHTML = "Syötä vain numeroita väliltä 1 - 100!"
    }
    else if (playersGuess <= 0) {
        output.innerHTML = "Syötä vain numeroita väliltä 1 - 100!"
        
    } else if (playersGuess > 100){
        output.innerHTML = "Syötä vain numeroita väliltä 1 - 100!"

    }
         
    else{ 
        playGame();
    }


}

function playGame() {
    guessesRemaining--;
    guessesMade++;
    gameState =  "<br>" + "Arvaus nro: " + guessesMade  + " , sinulla on " + guessesRemaining + " arvausta jäljellä.";

    
    if (playersGuess > mysteryNumber) {
        output.innerHTML = "Arvauksesi on liian suuri. \n"  + gameState;
        if(guessesRemaining < 1) {
            endGame();
        }
    }
    else if(playersGuess < mysteryNumber) {
        output.innerHTML = "Arvauksesi on liian pieni.\n "  + gameState;
        if(guessesRemaining < 1) {
            endGame();
        }
    

    }
    else {
        // output.innerHTML = "Arvasti oikein!";
        gameWon = true;
        endGame();
    }

}

function endGame() {
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.background = "grey"
    document.getElementById("button").style.cursor = "not-allowed"
    if(gameWon) {
        output.innerHTML = "Arvasti oikein! Luku oli " + mysteryNumber + ". " + "<br>" + "<a href= 'index.html'>Pelaa uudelleen!</a>";
    }
    else {
        output.innerHTML = "Game Over! Luku oli " + mysteryNumber + ". " + "<br>" + "<a href= 'index.html'>Pelaa uudelleen!</a>";
    }



}

