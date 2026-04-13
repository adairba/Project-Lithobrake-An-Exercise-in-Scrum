var canvas;
var ctx;
var WIDTH;
var HEIGHT;

//get elements of the canvas
//set variables WIDTH and HEIGHT to width and height
function Init()
{
    canvas = document.getElementById("canvas");
    ctx = document.getElementById("canvas").getContext("2d");
    WIDTH = canvas.width;
    height = canvas.height;
}

//draw a square for the player
//x cord, y cord, width, and height
function Player(x, y, w, h)
{
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.fill();
}

Init();
Player(175, 700, 40, 40);