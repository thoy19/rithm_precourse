
var player = 1;

var buttons = document.getElementsByTagName("button");

var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");


for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event){
  
  if(player == 1) {
    event.target.innerHTML = "x";
    event.target.disabled = "disabled";
    player += 1;
    winner();
  } else {
    event.target.innerHTML = "o";
    event.target.disabled = "disabled";
    player -= 1;
    winner();
    }
   })
} 


function winner() {
  if(row1.children[0].innerHTML == "o" && row1.children[1].innerHTML == "o" && row1.children[2].innerHTML == "o" || row2.children[0].innerHTML == "o" && row2.children[1].innerHTML == "o" && row2.children[2].innerHTML == "o" || row3.children[0].innerHTML == "o" && row3.children[1].innerHTML == "o" && row3.children[2].innerHTML == "o") {
    alert("WINNER is O");
  }
}

function reset() {

}
