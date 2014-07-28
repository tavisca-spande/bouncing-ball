var canvas = document.getElementById('myCanvas');
var ctx;
var x = 10;
var y = 300;
var dx = 1;
var dy = 1;

function init() {
    ctx = canvas.getContext('2d');
    return setInterval(draw, 2);
}

function draw() {
    ctx.clearRect(0,0,600,600);
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2, true); 
    ctx.closePath();
    ctx.fill();
    x += dx;
    y += dy;
    if (x > 589 || x < 11) {
         dx *= -1;   
    }
    if (y > 589 || y < 11) {
         dy *= -1;   
    }
}

init();