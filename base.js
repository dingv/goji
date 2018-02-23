var index = 0;
var score = frames[0][3];

function pageflip() {
	index = index + 1;
	document.getElementById("score").innerHTML = "Score: " + score;
	dtype = frames[index][0];
	if (dtype == 'card' || dtype == 'product') {
		image = frames[index][1];
		description = frames[index][2];
		document.getElementById("image").innerHTML = "<img src=" + image + ">";
		document.getElementById("description").innerHTML = description;
	}

	if (dtype == 'mc') {
		
	}

	if (dtype == 'essay') {
		// placeholder image elem -- prompt
		prompt = frames[index][1];
		document.getElementById("image").innerHTML = prompt;
		// placeholder description elem -- input form
		charlimit = frames[index][2];
		document.getElementById("description").innerHTML = "<input type=\"text\" maxlength=\"" + charlimit + "\">";
	}

	points = frames[index][3];

	if (score + points >= 0) {
		score = score + points;
	}
}

function skip() {
	index = index + 1;
	dtype = frames[index][0];
	if (dtype == 'card' || dtype == 'product') {
		image = frames[index][1];
		description = frames[index][2];
		document.getElementById("image").innerHTML = "<img src=" + image + ">";
		document.getElementById("description").innerHTML = description;
	}

	if (dtype == 'mc') {

	}

	if (dtype == 'essay') {
		// placeholder image elem -- prompt
		prompt = frames[index][1];
		document.getElementById("image").innerHTML = prompt;
		// placeholder description elem -- input form
		charlimit = frames[index][2];
		document.getElementById("description").innerHTML = "<input type=\"text\" maxlength=\"" + charlimit + "\">";
	}
}