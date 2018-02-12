<h2>Press any key to get started</h2>
<div id="chances">Chances</div>

// create an object

var photographers = ["steichen", "bresson", "eggleston", "evans", "arbus"];
var win = 0;
var guesses = 12;
var steichen = [" ", " ", " ", " ", " ", " ", " ", " "];

document.onkeyup = function (event) {
    var userGuess = event.key;
    var computerGuess = photographers[Math.floor(Math.random()*photographers.length)];
    alert("Let's begin");
}

for (var i = 0; i<photographs.length; i++) {

if photographers === "steichen" {
    if ((userGuess === s) || || (userGuess === e) || (userGuess === i) || (userGuess === c) || (userGuess === e) || (userGuess === n)) {
        userGuess.push(steichen[0]);
    } else if (userGuess === t){
        userGuess.push(steichen[1]);
    } else if (userGuess === e) {
        userGuess.push(steichen[2][6]);
    } else if (userGuess === i) {
        userGuess.push(steichen[3]);
    } else if (userGuess === c) {
        userGuess.push(steichen[4]);
    } else if (userGuess === h) {
        userGuess.push(steichen[5]);
    } else if (userGuess === n) {
        userGuess.push(steichen[7]);
     }

        guesses-- && document.querySelector("chances").innerHTML = " ";
    }
}

}
