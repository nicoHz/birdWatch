var umbrella = document.querySelector("#umbrella");
umbrella.style.left="800px"; // x
umbrella.style.top="500px";  // y

var startTime = Date.now(); // in ms

setInterval( function() {
	var t = Date.now() - startTime;

	var ax = 10 / 70 / 1000;
	var ay = 10 / 40 / 1000;

	var vx = ax * t;	// pixel per millisecond
	var vy = ay * t;

	var x = t * vx;
	var y = t * vy;

	var opacity = 1.0 - (t / 2000);
	if (opacity < 0.1) opacity = 0.1;	

	var xk = Math.cos( t / 1000 * Math.PI * 2) * t / 2000 * 100 + 100;
	var yk = Math.sin( t / 1000 * Math.PI * 2) * t / 2000 * 100 + 100;

	x = x + xk;
	y = y + yk;

	umbrella.style.left= x + "px"; // x
	umbrella.style.top= y + "px";  // y
	//umbrella.style.opacity= opacity; 
}, 1000 / 52);
