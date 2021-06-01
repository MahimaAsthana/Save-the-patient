
var shrub1,shrub1Img,shrub2Img, shrub2;
var ambulanceImg,ambulance;
var player, girl, boy, girlImg, boyImg;
var timeLimit, hospital;
var canvas;
var gameState="wait";
var playbutton, playbuttonImg;
var timer=180;
var patient, patientImg, patientImg2;

var daytrack, nighttrack;

var track,trackImg;



function preload() {
  backgroundImg = loadImage("./images/day track.gif");
  patientImg = loadImage("images/patient1.png");
  
  patientImg2 = loadImage("images/patient.png");

  ambulanceImg = loadImage("images/ambulance1.png");

    shrub1Img  = loadImage("images/shrub1.png");
    shrub2Img = loadImage("images/shrub2.png");
    
    girlImg = loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png",
    "images/girl4.png","images/girl5.png","images/girl6.png",
    "images/girl7.png","images/girl8.png");
    
    
    
    boyImg = loadAnimation("images/boy1.png","images/boy2.png","images/boy3.png",
    "images/boy4.png","images/boy5.png","images/boy6.png","images/boy7.png",
    "images/boy8.png","images/boy9.png","images/boy10.png","images/boy11.png","images/boy12.png");

    hospital = loadImage("images/hospital.jpg");

    playbuttonImg = loadImage("images/start.jpg");


   // daytrack = loadAnimation("images/day track.gif");

    nighttrack = loadImage("images/night track.gif");

    trackImg  = loadImage("images/track.jpg");

}

function setup() {
  canvas = createCanvas(1200, 600);

  girl=createSprite(200,200,20,20);
 
 
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

 
 
}







