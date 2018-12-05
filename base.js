var index = 0;
var score = frames[0][3];
var numReading = 0;

function pageflip() {

	document.getElementById("next").innerHTML = '<a href="mailto:dingv@cs.stanford.edu">Claim</a>'

	document.getElementById("score").innerHTML = "Score: " + score;
	dtype = frames[index][0];

	if (dtype == 'reading') {
		image = frames[index][1];
		description = frames[index][2];
		document.getElementById("image").innerHTML = image;
		document.getElementById("description").innerHTML = description;
		numReading += 1;
	}

	if (dtype == 'product') {
		description = frames[index][1];
		url = frames[index][2];
		document.getElementById("image").innerHTML = "<a href=" + "\"" + url + "\"" + " target=\"_blank\">" + description + "</a>";
		document.getElementById("description").innerHTML = "Click the link above to open vendor page in new tab, then claim via the button below.";
	}

	if (dtype == 'card') {
		image = frames[index][1];
		description = frames[index][2];
		document.getElementById("image").innerHTML = "<img src=" + image + ">";
		document.getElementById("description").innerHTML = description;
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

	score = score + points;

	for (var i = 0; i < badges.length; i++) {
		name = badges[i][1];
		type = badges[i][2];
		threshold = badges[i][3];

		if (type == 'score') {
			if (score == threshold) {
				currStr = document.getElementById("badges").innerHTML;
				if (currStr.indexOf(name) == -1) { // badge not in string
					newStr = currStr + name + ", ";
					document.getElementById("badges").innerHTML = newStr;
				}
			}
		}

		if (type == 'reading') {
			if (numReading == threshold) {
				currStr = document.getElementById("badges").innerHTML;
				if (currStr.indexOf(name) == -1) { // badge not in string
					newStr = currStr + name + ", ";
					document.getElementById("badges").innerHTML = newStr;
				}
			}
		}
	}

	index += 1;
}

function skip() {
	index = index + 1;
	dtype = frames[index][0];
	if (dtype == 'card') {
		image = frames[index][1];
		description = frames[index][2];
		document.getElementById("image").innerHTML = "<img src=" + image + ">";
		document.getElementById("description").innerHTML = description;
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
