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
	var restartTimer = null;

	setInterval(function() { 
		var t = Date.now() - startTime;
		x = vx * t - 200;
		animation.style.top = amplitude_px * Math.sin(t / period_ms * 2 * Math.PI) + 80 + "px";
		animation.style.right = x + "px"; 
		if (x > document.body.clientWidth) {
			if (!restartTimer) {
				startTime = Date.now();
			}
		}
		if (ay >= 0.0001) {
			t = Date.now() - clickTime;
			y = (ay * t) * t + 100; //vy = ay * t;
			animation.style.top = y + "px";
		}
		if (y > screen.height && !restartTimer) {
			restartTimer = setTimeout(function() {
				startTime = Date.now();
				restartTimer = null;
				y = 0;
				ay = 0;
			}, 1000);
		}
	}, 20); // 1000/20ms = 50 frames per sec (50 fps)

	animation.addEventListener("click", function descent(event) {
		ay = 0.0001;
		clickTime = Date.now();
	}); 
}

function cloudSmall() { 
	var clouds = document.getElementsByClassName("cloudSmall");
	var x = 1, vx = 0.1, y = 0;
	var startTime = Date.now();
	var restartTimer = null;

	setInterval(function() {
		var t = Date.now() - startTime;
		x = vx * t - 200;

		clouds[0].style.top =  y + "px";
		clouds[0].style.left = x + "px";

		clouds[1].style.top = y + "px";
		clouds[1].style.left = (x + 200) + "px";

		clouds[2].style.top = (y + 50) + "px";
		clouds[2].style.left = (x + 300) + "px";
	
		if (x > document.body.clientWidth) {
			if (!restartTimer) {
				startTime = Date.now();
			}
		}
	});
}

function cloudMediumDrift(
	altitude,
	driftingCloudVelocity,
	msBetweenFrames
) { 
	var clouds = document.getElementsByClassName("cloudMedium");
	console.log(clouds);
	
	var x, y;
	var vy = 0;
	
	var startTime = Date.now();
	var restartTimer = null;
	
	var i;
	var cloudCount = clouds.length;
	
	function drifting() {
		var t = Date.now() - startTime;
		x = driftingCloudVelocity * t;
		y = vy * t + altitude;

		for (i = 0; i < clouds.length; i++) {
			clouds[i].style.left = x + "px";
			clouds[i].style.top = y + "px";
		}	
				
		if (x > document.body.clientWidth) {
			if (!restartTimer) {
				startTime = Date.now();
			}
		}
	} 

	var timer = setInterval(drifting, msBetweenFrames);

}


fly(10, 500);
flap(150);
cloudSmall();

cloudMediumDrift(
	200,	// altitude (in px from top)  
	0.2,	// horizontal velocity in pixel per ms
	20		// ms | 1000/20 = 50 frames per sec (frame rate = 50fps)
);

