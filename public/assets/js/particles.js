class Ball {
    constructor(color) {
        this.x = Math.floor((Math.random() * 100) + 1) * 0.8, //x_,//100,
            this.y = Math.floor((Math.random() * 100) + 1) * 0.6, // y_,//100,
            this.vx = Math.floor((Math.random() * 10) + 1), //vx_,//5,
            this.vy = Math.floor((Math.random() * 10) + 1), //vy_,//2,
            this.radius = Math.floor((Math.random() * 10) + 1) * 5, //radius_,//25,
            this.color = color, //'blue',
            this.draw = () => {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fillStyle = this.color;
                ctx.fill();
            }
    }
}


var canvas = document.getElementById('canv');
var ctx = canvas.getContext('2d');
var number = 10;
var ball = [
    new Ball('blue'),
    new Ball('red'),
    new Ball('yellow'),
    new Ball('green'),
    new Ball('lightgray'),
    new Ball('pink'),
    new Ball('orange'),
    new Ball('purple'),
    new Ball('brown'),
    new Ball('violet')
]; //new Ball[number]();//[10](); 

var textY = [];
textY[0] = document.body.clientHeight;
textY[1] = textY[0] / 3;
textY[2] = textY[0] / 2;
textY[3] = ((2 * textY[0]) / 3);
var textX = document.body.clientWidth; // * 0.35;
var count1 = 1;
var count2 = 0;
var text1 = "Hi ! My name is";
var text2 = "Shaohsien Chen";
var temp1 = text1[0];
var temp2 = "";

function getRatioY() {
    if (textX > 1200)
        return;
    var temp = 0;
    if ((textX <= 1200) && (textX > 769)) {
        temp = 100;
    } else if ((textX <= 768) && (textX > 480)) {
        temp = 70;
    } else if (textX <= 479) {
        temp = 40;
    }
   
    textY[1] = textY[0] / 2 - temp;
    textY[3] = textY[0] / 2 + temp;
}

function getFont() {
    var fontSize = 0;
    if (textX > 1200){
        fontSize = 72;
    } else if ((textX <= 1200) && (textX > 769)) {
        fontSize = 66;
    } else if ((textX <= 768) && (textX > 480)) {
        fontSize = 48;
    } else if (textX <= 479) {
        fontSize = 36;
    }
    return fontSize ;
}

function draw(time) {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var j = 0; j < number; j++) {
        ball[j].draw();
        ball[j].x += ball[j].vx;
        ball[j].y += ball[j].vy;


        if (ball[j].y + ball[j].vy > canvas.height ||
            ball[j].y + ball[j].vy < 0) {
            ball[j].vy = -ball[j].vy;
        }
        if (ball[j].x + ball[j].vx > canvas.width ||
            ball[j].x + ball[j].vx < 0) {
            ball[j].vx = -ball[j].vx;
        }
    }
    window.requestAnimationFrame(draw);
    ctx.font = (getFont()*0.67) + 'px sans-serif';
    ctx.fillStyle = "white";
    ctx.textAlign = 'center';
    getRatioY();
    ctx.fillText(temp1, textX / 2, textY[1]);
    if (ready) {
        ctx.font = getFont() + 'px sans-serif';
        ctx.fillText(temp2, textX / 2, textY[2]);
    }
    ctx.font = (getFont()*0.5) + 'px sans-serif';
    ctx.fillStyle = "gray";
    ctx.fillText("Front-end Developer", textX / 2, textY[3]);
}

var ready = false;
var timer = setInterval(() => {
    if (count1 > (text1.length - 1)) {
        temp2 += text2[count2];
        count2++;
        ready = true;
        if (count2 > (text2.length - 1)) {
            clearInterval(timer);
        }
    } else {
        temp1 += text1[count1];
        count1++;
    }
}, 100);

var body_resize = function() {
    cw = document.body.clientWidth;
    ch = document.body.clientHeight;

    canv.width = cw;
    canv.height = ch;
}

var sp = 15;
document.getElementById('slow').addEventListener("click", function(){
    if(sp === 0) return;
    sp -= 5;
    for (j = 0; j < number; j++) {
      ball[j].vx = Math.floor(Math.random() * sp) + 1;
      ball[j].vy = Math.floor(Math.random() * sp) + 1;
    }
})

document.getElementById('fast').addEventListener("click", function(){
    if(sp === 30) return;
    sp += 5;
    for (j = 0; j < number; j++) {
      ball[j].vx = Math.floor(Math.random() * sp) + 1;
      ball[j].vy = Math.floor(Math.random() * sp) + 1;
    }
})
  
function changeColor(){
    var newColor = document.getElementById('home-container');
    var colors = [];
    for(j = 0 ; j < 3; j++)
      colors[j] = Math.floor(Math.random() * 256);
    var tempColor = "rgb(" + colors[0] + ',' + colors[1] + "," + colors[2] + ")";
    if(tempColor === "rgb(255,255,255)" || tempColor === "rgb(128,128,128)")
        changeColor();
    newColor.style.backgroundColor = tempColor;
}

document.getElementById('right').addEventListener("click", function(){
    changeColor();
})

document.getElementById('left').addEventListener("click", function(){
   changeColor();
})

draw();
body_resize();