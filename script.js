// random value generated
var y = Math.floor(Math.random() * 50 + 1);

// counting the number of guesses made for correct guess
var guess = 1;

document.getElementById("submitguess").onclick = function() {
    // number guessed by user
    var x = parseInt(document.getElementById("guessField").value);

    if (x === y) {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
    } else if (x > y) {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    } else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
};
