

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	jump = loadSound('jump.wav');
	coin_sound = loadSound('coin.wav');
	game_over_sound = loadSound('gameover.wav');
	kill_enemy_sound = loadSound('kick.wav');
	mariodie_sound = loadSound('mariodie.wav');
	
	/*
Jump
Coins
GameOver
Killing enemy
Die-Mario 
	*/



}

function setup() {
	
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	
}


function gotPoses(results){
	if(results.length > 0)
  {
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    
  }
}

function modelLoaded(){
	console.log('Model Loaded')
}

function draw() {
	game()
}






