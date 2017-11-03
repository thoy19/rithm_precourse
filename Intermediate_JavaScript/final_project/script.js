
var player = 1;

var buttons = document.getElementsByClassName("tic");

var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var winnerBox = document.getElementById("result");
var resetBtn = document.getElementById("reset");

var moves = 0;

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event){
  
  if(player == 1) {
    event.target.innerText = "x";
    event.target.disabled = "disabled";
    player += 1;
    moves++;
    winner();
    tieCheck();
  } else {
    event.target.innerHTML = "o";
    event.target.disabled = "disabled";
    player -= 1;
    moves++;
    winner();
    tieCheck();
    }
   })
} 


function winner() {
  if(row1.children[0].innerHTML == "o" && row1.children[1].innerHTML == "o" && row1.children[2].innerHTML == "o" || row2.children[0].innerHTML == "o" && row2.children[1].innerHTML == "o" && row2.children[2].innerHTML == "o" || row3.children[0].innerHTML == "o" && row3.children[1].innerHTML == "o" && row3.children[2].innerHTML == "o" || row1.children[0].innerHTML == "x" && row1.children[1].innerHTML == "x" && row1.children[2].innerHTML == "x" || row2.children[0].innerHTML == "x" && row2.children[1].innerHTML == "x" && row2.children[2].innerHTML == "x" || row3.children[0].innerHTML == "x" && row3.children[1].innerHTML == "x" && row3.children[2].innerHTML == "x") {
    winnerBox.innerText = "We have a winner!";
  } else if (row1.children[0].innerHTML == "o" && row2.children[0].innerHTML == "o" && row3.children[0].innerHTML == "o" || row1.children[1].innerHTML == "o" && row2.children[1].innerHTML == "o" && row3.children[1].innerHTML == "o" || row1.children[2].innerHTML == "o" && row2.children[2].innerHTML == "o" && row3.children[2].innerHTML == "o" || row1.children[0].innerHTML == "x" && row2.children[0].innerHTML == "x" && row3.children[0].innerHTML == "x" || row1.children[1].innerHTML == "x" && row2.children[1].innerHTML == "x" && row3.children[1].innerHTML == "x" || row1.children[2].innerHTML == "x" && row2.children[2].innerHTML == "x" && row3.children[2].innerHTML == "x") {
    winnerBox.innerText = "We have a winner!";
  } else if (row1.children[0].innerHTML == "o" && row2.children[1].innerHTML == "o" && row3.children[2].innerHTML == "o" || row1.children[2].innerHTML == "o" && row2.children[1].innerHTML == "o" && row3.children[0].innerHTML == "o" || row1.children[0].innerHTML == "x" && row2.children[1].innerHTML == "x" && row3.children[2].innerHTML == "x" || row1.children[2].innerHTML == "x" && row2.children[1].innerHTML == "x" && row3.children[0].innerHTML == "x") {
    winnerBox.innerText = "We have a winner!";
  } 
}

resetBtn.addEventListener("click", function() {
  window.location.reload();
})

function tieCheck() {
  if (moves === 9) {
    winnerBox.innerText = "It's a tie!";
  }
}
