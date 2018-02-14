<h2>Press any key to get started</h2>
<div id="chances">Chances</div>


var photographers = ["steichen", "bresson", "eggleston", "evans", "arbus"];
var win = 0;
var guesses = 12;
var steichen = [" ", " ", " ", " ", " ", " ", " ", " "];

document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);
    var computerGuess = photographers[Math.floor(Math.random()*photographers.length)];
    console.log(computerGuess);
}

for (var i = 0; i<photographs.length; i++) {

if computerGuess === photographers[1] {
    if ((userGuess === s) || || (userGuess === e) || (userGuess === i) || (userGuess === c) || (userGuess === e) || (userGuess === n)) {
        userGuess.push(steichen[0]) && guesses--;
    } else if (userGuess === t){
        userGuess.push(steichen[1]); 
        guesses--;

    } else if (userGuess === e) {
        userGuess.push(steichen[2][6]) && guesses--;
    } else if (userGuess === i) {
        userGuess.push(steichen[3]) && guesses--;
    } else if (userGuess === c) {
        userGuess.push(steichen[4]) && guesses--;
    } else if (userGuess === h) {
        userGuess.push(steichen[5]) && guesses--;
    } else if (userGuess === n) {
        userGuess.push(steichen[7]) && guesses--;
     }
    }
}
        guesses-- && document.querySelector("chances").innerHTML = " ";
    }
}

}

function consoleInside(arr) {
    for (var i = 0; i<photographs.length; i++) {

    }

}

<script type="text/javascript">
// Let's start by grabbing a reference to the <span> below.
var userText = document.getElementById("user-text");

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {
  userText.textContent = event.key;
};

OR if (userGuess !== "s", "t", "e", "i", "c", "h", "n") {
    alert("Wrong answer!");
}
    