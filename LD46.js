//import * as animate from './animate.js';
//import * as lol from './helper.js';

// left = 37
// up = 38
// right = 39
// down = 40

var x, y, srcx, srcy, sheetWidth, sheetHeight, frameColumn, width, height;//, currentFrame;
var canWidth, canHeight;
var clownImage;
var ctx;
var frame0 = 44;
var frame1 = 88;
var frame2 = 132;

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
    width = frame0;
    height = 51;
    
    // set x by canvas.width - sprite.width then divide by 2
    x = (canWidth - width) / 2;
    y = canHeight - height;
    //width = sheetWidth / frameColumn;
    //height = sheetHeight; // usually have frameRow but here it's 1
    //currentFrame = 0;
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

function updateFrame(leftOrRight) {
    if(leftOrRight === 37) {
        width = frame1;
        x -= 5;
    } else if(leftOrRight === 39) {
        width = frame2;
        x += 5;
    }
    // to make smooth movement (first increment delay) we use:
    // Animate() is not what you want for smooth moves.  If you use .css to move one pixel at a time, start it up when the key is pressed, and stop when the key is released. You get smoothness.
    // https://forum.jquery.com/topic/how-to-move-an-element-with-arrow-keys-consistently

    ctx.drawImage(clownImage, srcx, srcy, width, height, x, y, width, height);
    
    // currentFrame = ++currentFrame % frameColumn;
    
    //srcx = currentFrame * width;
    // srcy = 0; // srcy is always 0
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

document.onkeydown = function(event) {
    switch(event.keyCode) {
       case 37:
          //alert('left key'); // call function updateFrame(left)?
            updateFrame(37);
         break;
       case 39:
          //alert('right key'); // call function updateFrame(right)?
            updateFrame(39);
         break;
    }
};