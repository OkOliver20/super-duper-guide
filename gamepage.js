// random value generated
var y = Math.floor(Math.random() * 10 + 1);
 var guess = 1;
playername = localStorage.getItem("player_name")
function submit() {


var x = document.getElementById("guessField").value;
// counting the number of guesses
// made for correct Guess
if (x == y) {
  alert("Congratulations, " + playername + " you guessed my number right in " + guess + " guess(es)!");
  guess = 1;
} else if (x > y) {
  guess++;
  alert("Oops! Try a smaller number!");
} else {
  guess++;
  alert("Oops! Try a bigger number!")
}
}
// function for number guessed by user     
function playAgain() {
  y = Math.floor(Math.random() * 10 + 1);
}
