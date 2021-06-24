var  database;
var playerCount;
var gameState = 0;
var allPlayers;
var CarsAtEnd = 0;
var form,player,game;

var car1,car2,car3,car4, cars;
var car1Img,car2Img,car3Img,car4Img,groundImg,trackImg;

function preload(){

  car1Img = loadImage('images/car1.png');

  car2Img = loadImage('images/car2.png');

  car3Img = loadImage('images/car3.png');

  car4Img = loadImage('images/car4.png');

  groundImg = loadImage('images/ground.png');
  
  trackImg = loadImage('images/track.jpg');
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-50,displayHeight-150);

game = new Game();
game.getState();
game.start();

 
}

function draw(){
  background('white');
  console.log(allPlayers);
  if(playerCount === 4 && CarsAtEnd === 0) {
    game.update(1);
  }

  if(gameState ===1){
  
    game.play();
    if (CarsAtEnd === 4) {
  game.update(2);
}
  }
if (gameState===2  && CarsAtEnd === 4) {
  game.displayRank()
}

}

