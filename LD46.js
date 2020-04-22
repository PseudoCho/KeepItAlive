//import * as animate from './animate.js';
//import * as lol from './helper.js';

var x, y, srcx, srcy, sheetWidth, sheetHeight, frameColumn, width, height, currentFrame;
var canWidth, canHeight;
var clownImage;
var ctx;

function initialise() {
    //var preload = document.createElement("CANVAS");
    //var ctx = x.getContext("2d");
    //ctx.fillStyle = #color;
    //ctx.fillRect(20,20,150,100);
    //document.getElementById("main").innerHTML = x;
    canWidth = 300;
    canHeight = 650;
    document.getElementById("main").innerHTML = '<canvas id="myCanvas" width="300" height="650" style="border:1px solid black" />';
    srcx = 0;
    srcy = 0;
    sheetWidth = 108;
    sheetHeight = 51;
    frameColumn = 3;
    width = 44;
    height = 51;
    
    // set x by canvas.width - sprite.width then divide by 2
    x = (canWidth - width) / 2;
    y = canHeight - height;
    //width = sheetWidth / frameColumn;
    //height = sheetHeight; // usually have frameRow but here it's 1
    currentFrame = 0;
    startGame();
}

function startGame() {
    var c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    clownImage = new Image();
    clownImage.src = "./clownsmall.png";
   // clownImage = document.getElementById("htmlClown");
    //ctx.drawImage(clownImage, 0, 0); 
    //ctx.drawImage(clownImage, 15, 0, 93, 51, 0, 0, 15, 51)
    //ctx.drawImage(clownImage, 0, 0, 0, 0, 0, 0, 10, 50);
    draw();
}

function updateFrame() {
    currentFrame = ++currentFrame % frameColumn;
    srcx = currentFrame * width;
    srcY = 0;
}

function draw() {
   // updateFrame();
   if(!clownImage.complete) {
       setTimeout(function() {
           draw();
       }, 50);
   }
   ctx.drawImage(clownImage, srcx, srcy, width, height, x, y, width, height);
   //ctx.drawImage(clownImage, srcx, srcy, width, height, x, y, width, height);
}