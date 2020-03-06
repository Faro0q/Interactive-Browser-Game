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
    size: 30, 
    x: canvas.width / 2, 
    y: canvas.height / 2 + 40, 
    color: "green"
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

// specs for balls you want to collect
var benefit = {
	x:[],
	y:[],
	speed: 2,
	color: ["red","blue","yellow"],
	state: []
};
var redNum = 0;

// specs for balls you want to avoid
var harm = {
	x:[],
	y:[],
	speed: 2,
	color: ["black", "purple", "#003300", "#663300", "white"]

};
var blackNum = 0;
var rad = 10;

// adds value to x property of goodArc
function drawNewGood(){
	if(Math.random() < .02){
		benefit.x.push(Math.random() * canvas.width);
		benefit.y.push(0);
		benefit.state.push(true);

	}
	redNum = benefit.x.length;
}

//adds values to x property of badArc
function drawNewBad() {
	if(score < 30){
		if(Math.random() < .05){
			harm.x.push(Math.random() * canvas.width);
			harm.y.push(0);
		}
	}
	else if(score < 50){
		if(Math.random() < .1){
			harm.x.push(Math.random() * canvas.width);
			harm.y.push(0);
		}
	}
	else{
		if(Math.random() < .2){
			harm.x.push(Math.random() * canvas.width);
			harm.y.push(0);
		}
	}
	blackNum = harm.x.length;
}

function drawPlayer() {
	contxt.beginPath();
	contxt.rect(player.x, player.y, player.size, player.size);
	contxt.fillStyle = player.color;
	contxt.fill();
	contxt.closePath();
}

function draw(){
	contxt.clearRect(0, 0, canvas.width, canvas.height);
	if(!gameOver){
		drawPlayer();
		drawBlackBall();
		drawRedBall();
		playUpdate();
		drawNewGood();
		drawNewBad();
			
		//score
		contxt.fillStyle = "black";
		contxt.font = "20px Helvetica";
		contxt.textAlign = "left";
		contxt.fillText("Score: " + score, 10, 25);
	
		//lives
		contxt.textAlign = "right";
		contxt.fillText("Lives: " + lives, 500, 25);
	}
	else{
		contxt.fillStyle = "black";
		contxt.font = "25px Helvetica";
		contxt.textAlign = "center";
		contxt.fillText("GAME OVER!", canvas.width/2, 175);
		
		contxt.font = "20px Helvetica";
		contxt.fillText("PRESS SPACE TO PLAY", canvas.width/2, 475);
		
		contxt.fillText("FINAL SCORE: " + score, canvas.width/2, 230);
	}
	document.getElementById("level").innerHTML = "Level: " + level;
	requestAnimationFrame(draw);
}

draw();