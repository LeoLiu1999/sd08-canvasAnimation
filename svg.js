console.log("svg.js loaded in")

var pic = document.getElementById("vimage");
var toggleButton = document.getElementById("toggle");
var clearButton  = document.getElementById("clear");
var startButton  = document.getElementById("start");
var stopButton  = document.getElementById("stop");
var toggleStatus = document.getElementById("toggleStatus");

//for animation
var started = false;
var toggle = 0;
var frameID;
var xcord;
var ycord;
var dX = 3;
var dY = 3;
var size;

var newCircle = function(e){
    xcor = e.offsetX;
    ycor = e.offsetY;
    drawCircle(xcor, ycor, 10);
}

var drawCircle = function (x, y, r){
    console.log("drawing dot at x:" + x  + " y:" + x)
    var dot = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
    dot.setAttribute("r", r);
    dot.setAttribute("fill", "red");
    dot.setAttribute("stroke", "black");
    pic.appendChild(dot);
}

var clear = function(){
    stopAnimation()
    while (pic.firstChild){ //hey this is kinda looks like a typical while loop conditional in C
	pic.removeChild(pic.firstChild);
    }
    first = true;
    x = -1;
    y = -1;
}

var draw = function(e){
    if (toggle == 0){
	size = frameId % 120;
	if (size > 60)
	    size = 120 - size
	size += 10 //min size
	clear();
	drawCircle(xcor, ycor, size);
    }
    
    if (toggle == 1){
	if (xcor <= 0)
	    dX = Math.abs(dX);
	if (xcor >= 500)
	    dX = -1 * Math.abs(dX);
	if (ycor <= 0)
	    dY = Math.abs(dY);
	if (ycor >= 500)
	    dY = -1 * Math.abs(dY);
	xcor += dX;
	ycor += dY;
	clear();
	drawCircle(xcor, ycor, size)
    }
    
    frameId = window.requestAnimationFrame(draw);
}

var startAnimation = function(){
    if(! started){
	started = true;
	frameId = window.requestAnimationFrame(draw);
    }
}

var stopAnimation = function(){
    window.cancelAnimationFrame(frameID);
    console.log("stopped animation")
}

var toggleFunc = function(){
    if (toggle < 1){
	toggle += 1;
	toggleStatus.innerHTML = "Bouncing";
    } else {
	toggle = 0;
	toggleStatus.innerHTML = "Growing & Shrinking";
    }
}

pic.addEventListener("click", newCircle);
clearButton.addEventListener("click", clear);
startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);
toggleButton.addEventListener("click", toggleFunc); //Bounce around or grow & shrink


