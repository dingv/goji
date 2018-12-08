var frames = [
['card','img/GeorgeWashington.jpg', '1: George Washington, 1789-1797', 100],
['reading','', 'George Washington was the first president of the United States.', 100],
['card','img/JohnAdams.jpg', '2: John Adams, 1797-1801', 100],
['card','img/ThomasJefferson.jpg', '3: Thomas Jefferson, 1801-1809', 100],
['card','img/JamesMadison.jpg', '4: James Madison, 1809-1817', 100],
['card','img/JamesMonroe.jpg', '5: James Monroe, 1817-1825', 100],
['card','img/JohnQuincyAdams.jpg', '6: John Quincy Adams, 1825-1829', 100],
['essay','Name a U.S. President.', 100, 200],
['product','AmazonBasics Pre-sharpened Wood Cased #2 HB Pencils, 150 Pack', 'https://amzn.to/2UeC5OF', -500],
['card','img/complete.jpg', 'Task complete!', 0],
['achievement','Enter your name:', 100, 0],
['social','', 0, 0],
]
var badges = [
['badge','Just Getting Started', 'score', 200],
['badge','Reading Is Fun', 'reading', 1],
]
var products = [
['product','AmazonBasics Pre-sharpened Wood Cased #2 HB Pencils, 150 Pack', 'https://amzn.to/2UeC5OF', -500],
]
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

	if (dtype == 'achievement') {
		// prompt="Enter your name:"
		prompt = frames[index][1];
		document.getElementById("image").innerHTML = prompt;
		// text submission form
		charlimit = frames[index][2];
		document.getElementById("description").innerHTML = "<input type=\"text\" maxlength=\"" + charlimit + "\">";

		document.getElementById("next").innerHTML = '<a href="mailto:dingv@cs.stanford.edu">Send to developer</a>';
	}

	if (dtype == 'social') {
		document.getElementById("image").innerHTML = '<a href="mailto:dingv@cs.stanford.edu">Share via email</a>';
		document.getElementById("description").innerHTML = 
		"<a href=" + "\"https://www.facebook.com\"" + " target=\"_blank\">Facebook</a>\n <a href='https://www.twitter.com'>Tweet</a>";
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
