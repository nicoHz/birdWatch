var images = document.getElementById("animation").children;
var imageCount = images.length;
var i = 0;
setInterval(function () {
	images[i % imageCount].style.display = "none";
	images[++i % imageCount].style.display = "block";
}, 150);

//var himmel = document.querySelector("html");
//var x = 1;
//var v = 2;
//var startTime = Date.now(); 
//timer = setInterval(function() {
//	var t = Date.now() - startTime;
//	x = v * t - 150; 
//	himmel.style.backgroundPosition = x + "px";
//	if (x > 0) {
//		startTime = Date.now();
//	}
// }, 1000 / 50);


var animation =  document.getElementById("animation");
var x = 1, v = .1, vy = 0;
var startTime = Date.now(); 
setInterval(function() { 
	var t = Date.now() - startTime;
	x = (v * t - 200);
	animation.style.top = 50 * Math.sin(t / 1000 * Math.PI * 2) + 80 + "px";
	animation.style.right = x + "px"; 
	if (x > 1600) {
		startTime = Date.now();
	}
	if (vy >= .1) {
		var t = Date.now() - clickTime;
		y = vy * t + 200;
		animation.style.top = y + "px";
	}
}, 10);

animation.addEventListener("click", function onClick(event) {
	vy = .1;
	clickTime = Date.now();
}); 

