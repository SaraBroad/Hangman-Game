<script type="text/javascript">
        // Use key events to listen for the letters that your players will type.
        document.onkeyup = function (event) {
            var userGuess = event.key;
            // if the user guesses correctly...
            if (randomWordChars.indexOf(userGuess) >= 0) {
                // replace the _ in the current word array
                replacePlaceholder(userGuess);
                document.querySelector("#chances-left").innerHTML = (guesses--);
            } else {
                // user guess is incorrect
                if (randomWordChars.indexOf(userGuess) <= 0) {
                    push();    
                }
                document.getElementById("guessed").innerHTML = guessedLetters;
                document.querySelector("#chances-left").innerHTML = (guesses--);           
            }

            function push() {
                if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i"
                || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w"
                || userGuess === "x" || userGuess === "y" || userGuess === "z") {
                guessedLetters.push(userGuess); 
                }
                document.getElementById("chances-left").innerHTML = ("Letters already guessed: " + guessedLetters);

            }

            // // if (computerGuess === photographers[0]) {
            //     if (userGuess === "s") {
            // document.querySelector("#steichen").innerHTML = ("s"[0]);
            //    guesses++;
            //    
            //     }
            // }       
        }
        var photographers = ["steichen", "bresson", "eggleston", "evans", "arbus"];
        // Wins
        var win = 0;
        // guesses left
        var guesses = 12;
        // random word
        var randomWord;
        // random word characters
        var randomWordChars = [];
        // guessed letters
        var guessedLetters = [];
        // placeholders characters
        var placeholderChars = [];
        // If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
        // As the user guesses the correct letters, reveal them: m a d o _  _ a.

        function startGame() {
            // reset game variables    
            guesses = 12;
            guessedLetters = [];
            placeholderChars = [];
            // get random word
            randomWord = photographers[Math.floor(Math.random() * photographers.length)];
            // get random word array
            randomWordChars = randomWord.split("");
            // get placeholder array
            for (var i = 0; i < randomWordChars.length; i++) {
                placeholderChars.push("_");
            }
            document.getElementById("current-word").innerHTML = placeholderChars.join(" ");
        }
        
        function replacePlaceholder(userGuess) {
            randomWordChars.forEach(function(char, index){
                if (userGuess.toLowerCase() === char.toLowerCase()) {
                    placeholderChars[index] = char;
                } 
            });
            document.getElementById("current-word").innerHTML = placeholderChars.join(" ");
        }
        
        // After the user wins/loses the game should automatically choose another word and make the user play it.
        function isUserWinner() {
            if (placeholdersChars.indexOf("_") < 0) {
                return true;
            }
            
            return false;
        }
        startGame();
 </script>