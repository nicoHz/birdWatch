onload = function startAnimation() {
	var frames = document.getElementById("animation").children;
	var frameCount = frames.length;
	var i = 0;
	setInterval(function () {
		frames[i % frameCount].style.display = "none";
		frames[++i % frameCount].style.display = "block";
	}, 150);
}

var frames = document.querySelector("div");
	frames.style.top = "400px";
	var x = 1;
	var v = .1;
	var startTime = Date.now();
	setInterval(function() { 
		var t = Date.now() - startTime;
		x = v * t;
		frames.style.left = x + "px";
	}, 20);
	setTimeout(x,200);

// var bird1 = document.querySelector("div");
// bird1.style.left="800px"; // x
// bird1.style.top="500px";  // y

// var startTime = Date.now(); // in ms

// setInterval(function() {
//	var t = Date.now() - startTime;

//	var ax = 10 / 70 / 1000;
//	var ay = 10 / 40 / 1000;

//	var vx = ax * t;	// pixel per millisecond
//	var vy = ay * t;

//	var x = t * vx;
//	var y = t * vy;

//	var opacity = 1.0 - (t / 2000);
//	if (opacity < 0.1) opacity = 0.1;	

//	var xk = Math.cos( t / 1000 * Math.PI * 2) * t / 2000 * 100 + 100;
//	var yk = Math.sin( t / 1000 * Math.PI * 2) * t / 2000 * 100 + 100;

//	x = x + xk;
//	y = y + yk;

//	bird1.style.left= x + "px"; // x
//	bird1.style.top= y + "px";  // y
	//bird1.style.opacity= opacity; 
// }, 1000 / 52);
