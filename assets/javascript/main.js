// Pseudo Code Review

// USE CASES:
// Use Case #1: The user loads the page
// --> display underscores according to the randomly choosen word
// --> display guessesRemaining, wins, and losses
// Use #2: User clicks a letter between a-z
// --> if the user clicks a letter thats in the word, display the letter in its appropiate position, else, guesses remaining go down by 1. If guesses remaining equal 0, user loses. Decrease loses by 
// --> if the user guesses all the correct letters in the word, they win. Increase wins by 1


//================= VARIABLES ================ //
// variables declared on page load
// debugger;
var validType = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// validType.map(function(x){ return x.toLowerCase() })

// word bank that will store all of our words to randomly choose from
var wordBank = ["batman", "superman", "spiderman", "ironman", "hulk", "thor", "wolverine", "superwoman", "daredevil", "aquaman", "cyborg", "hercules", "blackpanther", "avengers", "batgirl", "ghostrider"];

// counters that will keep track of wins and losses
var wins = 0;
var losses = 0;

// variable to keep track of all of guesses remainaing throughout the game
// decreases by 1 if the user guesses an incorrect letter 
var guessesLeft = 12;

// an array of letters that are not in the word
var wrongGuesses = [];

// store user input from keyboard event
var userInput;

// randomly choosen word from our wordBank
var currentWord;

// array that will hold our underscores and letters guessed correctly data
var underscores = [];




//============== FUNCTIONS ================= //

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

// function responsible for handling dynamic events on page load
// restarts the game when the user wins or loses
function reset() {
    // 1. randomly choose a word from our wordBank
    // Math.floor and math.random function to randomly choose a word from the wordBank
    // set currentWord equal to the randomly choosen
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(currentWord);


    // 2. add underscores to the underscores array according to the length of the word
    // ex. 
    // input -> currentWord = 'seattle'
    // define the length of currentWord
    // currentWord.length -> 7 -> we need 7 underscores
    // output -> ['_', '_', '_', '_', '_', '_', '_' ]
    for (i = 0; i < currentWord.length; i++) {
        underscores.push("_");
    }




    // TODO: 
    // we need to write syntax using the currentWord as our input and this should output an array of underscores according to the length of the currentWord

    //3. convert the underscore array into a string
    // ex. 
    // input -> ['_', '_', '_', '_', '_', '_', '_' ]
    // output -> '_ _ _ _ _ _ _'

    // console.log(underscores);
    var dashes = underscores.toString().replace(/,/g, " ");
    var ashes = wrongGuesses.toString().replace(/,/g, " ");


    // console.log(dashes);
    console.log(ashes);


    // 4. select an element in the html and display our underscores
    // console.log(document.getElementById('word-holder').textContent);
    console.log(document.getElementById('word-wrong').textContent);


    document.getElementById('word-holder').textContent = dashes;
    document.getElementById('word-wrong').textContent = ashes;



    // 5. display guessesRemaining, wins, and losses

}


// ============= EVENT LISTENERS ============== //
// USE CASE #1
// when the user loads the page execute our reset function
// reset()



// USE CASE #2
// capture user guess by using javascript document.onKeyUp
document.onkeyup = function (e) {
    if (validType.includes(e.key)) {
        // 1. store userGuess in a variable
        // userInput = <value from the event object>
        // e.preventDefault();

        var userInput = e.key;
        guessesLeft--;
        if (guessesLeft < 0) {
            guessesLeft = 12;
            losses--;
            document.getElementById('lose').textContent = "Losses: " + losses;

        }
        document.getElementById('guess').textContent = "Guesses Remaining: " + guessesLeft;

        console.log("User typed: " + userInput.toLowerCase());
        // ex. 
        // currentWord = 'seattle'
        // userInput = 's'

        // 2. check to see if userInput equals a letter in currentWord
        // 'In javascript, How to check to see if a character exists in an string?'
        // if the user guesses a correct letter
        for (i = 0; i < currentWord.length; i++) {
            if (userInput === currentWord[i]) {
                underscores[i] = userInput;
                dashes = underscores.toString().replace(/,/g, " ");
                document.getElementById('word-holder').textContent = dashes;

                // update the underscores array
                // ex. output -> ['s', '_', '_', '_', '_', '_', '_' ]
                // display updated array to the user
                // console.log(currentWord.indexOf(userInput));
                if (dashes.replace(/ /g, '')
                    === currentWord) {
                    console.log("Yay!");
                    wins++;
                    guessesLeft = 12;
                    document.getElementById('win').textContent = "Wins: " + wins;
                    underscores = [];
                    wrongGuesses = [];
                    reset();
                    // var batman = {
                    //     url: "https://www.youtube.com/watch?v=QXdWXPi_ngE",
                    // };
                    // console.log(batman.url);
                    // window.open(currentWord.url);
                }
            }
            else if (!wrongGuesses.includes(userInput) && (!currentWord.includes(userInput))) {
                wrongGuesses.push(userInput);
                ashes = wrongGuesses.toString().replace(/,/g, " ");
                document.getElementById('word-wrong').textContent = ashes;
                console.log(wrongGuesses);
            }
        }

    }

    // if the user is incorrect
    else {
        // push the wrong letter inside our wrongGuesses array
        // decrement guessesRemaining by one
        alert("Please press a key between a to z.");
    }

}
document.body.addEventListener("load", reset());




var superman = {
    url: "https://www.youtube.com/watch?v=EngKxF3Cqh4",
}