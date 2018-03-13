var frames = [
['card','img/GeorgeWashington.jpg', '1: George Washington, 1789-1797', 100],
['reading', '', 'George Washington was the first president of the United States.', 100],
['card','img/JohnAdams.jpg', '2: John Adams, 1797-1801', 100],
['card','img/ThomasJefferson.jpg', '3: Thomas Jefferson, 1801-1809', 100],
['card','img/JamesMadison.jpg', '4: James Madison, 1809-1817', 100],
['card','img/JamesMonroe.jpg', '5: James Monroe, 1817-1825', 100],
['card','img/JohnQuincyAdams.jpg', '6: John Quincy Adams, 1825-1829', 100],
['essay','Name a U.S. President.', 100, 200],
['product','img/pencil.jpg', 'Presidential Pencil', -500],
['card','img/complete.jpg', 'Task complete!', 0]
]

// badges
var badges = [
	['Just Getting Started', 'score', 200],
	['Reader', 'reading', 1]
]

var index = 0;
var score = frames[0][3];
var numReading = 0;

function pageflip() {
	index = index + 1;
	document.getElementById("score").innerHTML = "Score: " + score;
	dtype = frames[index][0];

	if (dtype == 'reading') {
		description = frames[index][2];
		document.getElementById("image").innerHTML = null;
		document.getElementById("description").innerHTML = description;
		numReading += 1;
	}

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

	score = score + points;

	for (var i = 0; i < badges.length; i++) {
		name = badges[i][0];
		type = badges[i][1];
		threshold = badges[i][2];

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
