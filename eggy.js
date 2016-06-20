window.onload = function startAnimation() {
	var frames = document.getElementById("animation").children;
	var frameCount = frames.length;
	var i = 0;
	setInterval(function () {
		frames[i % frameCount].style.display = "none";
		frames[++i % frameCount].style.display = "block";
	}, 150);
}

//var himmel = document.querySelector("html");
//var x = 1;
//var v = 2;
//var startTime = Date.now(); 
//timer = setInterval(function() {
//	var t = Date.now() - startTime;
//	x = v * t - 155;
//	himmel.style.backgroundPosition = x + "px";
//	if (x > 0) {
//		startTime = Date.now();
//	}
// }, 1000 / 50);


var frames = document.querySelector("#animation");
	frames.style.top = "70px"; 
	var x = 1;
	var v = .1;
	var startTime = Date.now(); 
	setInterval(function() { 
		var t = Date.now() - startTime;
		x = v * t - 200;

//	var xk = Math.cos( t * Math.PI * 2) * t / 2000 * 100 + 100;
		frames.style.right= x + "px"; 
		if (x > 1600) {
			startTime = Date.now();
		}
	}, 10);

//	var a = 10 / 70 / 1000;
//	var v = a * t;	// pixel per ms
//	x = x + xk;

