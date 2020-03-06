var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');
var gameOver = true; //End game if you run out of lives
var rightM = false; // Move right
var leftM = false; //Move left
var level = 1; // Level starts at one and then changes 
var lifes = 3; // how many lives until game is over
var score = 0; // Score by grabbing all the blocks
var benefit = 0; //the blocks that wont kill you
var harm = 0; //the blocks that will kill you



var player = {
    radius: 15, 
    x: canvas.width / 2, 
    y: canvas.height / 2 + 40, 
    color: "green";
};

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyUp", keyUp, false);
/*document.addEventListener("mousemove", mouseMoveHandler, false);
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    var relativeY = e.clientY - canvas.offsetTop;
    if(relativeX > 0 && relativeX < canvas.width) {
        player.x = relativeX;
    }
    if(relativeY > 0 && relativeY < canvas.height) {
        player.y = relativeY;
    }*/

// when key is pressed down
function keyDown(e) {
	if(e.keyCode == 39){
		rightM = true;
	}
	else if(e.keyCode == 37){
		leftM = true;
	}
	else if(e.keyCode == 32 && gameOver){//spacebar
		playAgain();
	}
}

// when key is released, stop moving
function keyUp(e) {
	if(e.keyCode == 39){
		rightM = false;
	}
	else if(e.keyCode == 37){
		leftM = false;
	}
}

function drawPlayer() {
    
    var monkey = 
  }
