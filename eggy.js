function flap(time) { 
	var images = document.getElementById("animation").children;
	var imageCount = images.length;
	var i = 0;
	setInterval(function() {
		images[i % imageCount].style.display = "none";
		images[++i % imageCount].style.display = "block";
	}, time);
}

function fly(amplitude_px, period_ms) {
	var animation = document.getElementById("animation");
	var x = 1, y = 0, vx = 0.1, ay = 0;
	var startTime = Date.now(); 
	setInterval(function() { 
		var t = Date.now() - startTime;
		x = vx * t - 200;
		animation.style.top = amplitude_px * Math.sin(t / period_ms * 2 * Math.PI) + 80 + "px";
		animation.style.right = x + "px"; 
		if (x > 1600) {
			startTime = Date.now();
		}
		if (ay >= 0.0001) {
			t = Date.now() - clickTime;
			y = (ay * t) * t + 100; //vy = ay * t;
			animation.style.top = y + "px";
		}
	}, 20); // 1000/20ms = 50 frames per sec (50 fps)

	animation.addEventListener("click", function descent(event) {
		ay = 0.0001;
		clickTime = Date.now();
	}); 
}

function sky(drift) { 
	var himmel = document.querySelector("html");
	var x = 700;
	var v = drift;
	var startTime = Date.now(); 
	timer = setInterval(function() {
		var t = Date.now() - startTime;
		x = v * t - 150 ; 
		himmel.style.backgroundPosition = x + "px";
		if (x > 700) {
			startTime = Date.now();
		}
	}, 1000/50);
}

fly(10, 500);
flap(150);
sky(0.05);
