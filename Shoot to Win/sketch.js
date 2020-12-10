var database;
var gameState;
var allPlayers;
var player, form, game;
var playerCount;
var bullet1Img, bullet2Img, soldier1Img, soldier2Img, wallImg;

function preload(){
  bullet1Img = loadImage("Pictures/bullet 1.png")
  bullet2Img = loadImage("Pictures/bullet 2.png")
  soldier1Img = loadImage("Pictures/Soldier1.png")
  wallImg = loadImage("Pictures/paintballWall.png")

}


function setup() {
  createCanvas(displayWidth-50,displayHeight-50);

  database = firebase.database()

  game = new Game;
  game.getState()
  game.start()
}

function draw() {
  background(255);
  if(playerCount === 2){
    game.updateState(1)
  }  
  if(gameState === 1){
    clear()
    game.play()
  }
}