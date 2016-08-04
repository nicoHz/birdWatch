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

function cloudDrift(
	className,
	altitude,
	driftingCloudVelocity,
	msBetweenFrames,
	xOffset
) { 
	var cloud = document.createElement("div");
	cloud.classList.add(className);
	var bird = document.getElementById("animation");
	document.body.insertBefore(cloud, bird);
	console.log(cloud);
	
	var x, y;
	var vy = 0;
	
	var startTime = Date.now();
	var restartTimer = null;
	
	function drifting() {
		var t = Date.now() - startTime;
		x = driftingCloudVelocity * t + xOffset;
		y = vy * t + altitude;

		cloud.style.left = x + "px";
		cloud.style.top = y + "px";

		if (x > document.body.clientWidth) {
			if (!restartTimer) {
				startTime = Date.now();
			}
		}
	} 

	var timer = setInterval(drifting, msBetweenFrames);

}
 
function cloudSmall(
	altitude,
	xOffset
) {
	cloudDrift(
		"cloudSmall",
		altitude,
		0.01,	// horizontal velocity in pixel per ms
		20,		// ms | 1000/20 = 50 frames per sec (frame rate = 50fps)
		xOffset
	);
}


function cloudMedium(
	altitude,
	xOffset
) {
	cloudDrift(
		"cloudMedium",
		altitude,  
		0.4,	// horizontal velocity in pixel per ms
		20,		// ms | 1000/20 = 50 frames per sec (frame rate = 50fps)
		xOffset
	);
}


// ----------------------  

fly(10, 500);
flap(150);


cloudSmall(
	20,		// altitude (in px from top)  
	20		// horizontal start position of the cloud
);

cloudSmall(
	30,		// altitude (in px from top)  
	50		// horizontal start position of the cloud
);

cloudSmall(
	20,		// altitude (in px from top)  
	350		// horizontal start position of the cloud
);


cloudMedium(
	100,	// altitude (in px from top)
	50		// horizontal start position of the cloud
);

cloudMedium(
	100,	// altitude (in px from top)  
	50		// horizontal start position of the cloud
);

cloudMedium(
	120,	// altitude (in px from top)  
	2
);

cloudDrift(
	"cloudLarge",
	200,	// altitude (in px from top)  
	0.7,	// horizontal velocity in pixel per ms
	20,		// ms | 1000/20 = 50 frames per sec (frame rate = 50fps)
	0
);
