var frames = [
['card','img/GeorgeWashington.jpg', '1: George Washington, 1789-1797', 100],
['card','img/JohnAdams.jpg', '2: John Adams, 1797-1801', 100],
['card','img/ThomasJefferson.jpg', '3: Thomas Jefferson, 1801-1809', 100],
['card','img/JamesMadison.jpg', '4: James Madison, 1809-1817', 100],
['card','img/JamesMonroe.jpg', '5: James Monroe, 1817-1825', 100],
['card','img/JohnQuincyAdams.jpg', '6: John Quincy Adams, 1825-1829', 100],
['mc','Who was the first U.S. President?', ['George Washington', 'John Adams'], 0, 200],
['essay','Name a U.S. President.', 100, 200],
['product','img/pencil.jpg', 'Presidential Pencil', -500],
['card','img/complete.jpg', 'Task complete!', 100],
]
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