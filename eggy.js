onload = function startAnimation() {
	var frames = document.getElementById("animation").children;
	var frameCount = frames.length;
	var i = 0;
	setInterval(function () {
		frames[i % frameCount].style.display = "none";
		frames[++i % frameCount].style.display = "block";
	}, 150);
}

var himmel = document.querySelector("html");
var x = 1;
var v = 4;
var startTime = Date.now(); 
timer = setInterval(function() {
	var t = Date.now() - startTime;
	x = v * t - 150;
	himmel.style.backgroundPosition = x + "px";
	if (x > 0) {
		startTime = Date.now();
	}
}, 1000 / 50);


var frames = document.querySelector("div");
	frames.style.top = "400px"; 
	var x = 1;
	var v = .01;
	var startTime = Date.now(); 
	setInterval(function() { 
		var t = Date.now() - startTime;
		x = v * t;
		frames.style.left = x + "px"; 
		if (x > 400) {
			startTime = Date.now();
		}
	}, 10);

//	var ax = 10 / 70 / 1000;
//	var ay = 10 / 40 / 1000;

//	var vx = ax * t;	// pixel per ms
//	var vy = ay * t;

//	var x = t * vx;
//	var y = t * vy;

//	var xk = Math.cos( t / 1000 * Math.PI * 2) * t / 2000 * 100 + 100;
//	var yk = Math.sin( t / 1000 * Math.PI * 2) * t / 2000 * 100 + 100;

//	x = x + xk;
//	y = y + yk;

