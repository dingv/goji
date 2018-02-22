var index = 0;
var score = 0;
var cards = [
['img/GeorgeWashington.jpg', '1: George Washington, 1789-1797', 100],
['img/JohnAdams.jpg', '2: John Adams, 1797-1801', 100],
['img/ThomasJefferson.jpg', '3: Thomas Jefferson, 1801-1809', 100],
['img/JamesMadison.jpg', '4: James Madison, 1809-1817', 100],
['img/JamesMonroe.jpg', '5: James Monroe, 1817-1825', 100],
['img/JohnQuincyAdams.jpg', '6: John Quincy Adams, 1825-1829', 100],
['img/complete.jpg', 'Task complete!', 100],
]
function pageflip() {
	index = index + 1;
	image = cards[index][0];
	description = cards[index][1];
	points = cards[index][2];
	document.getElementById("image").innerHTML = "<img src=" + image + ">";
	document.getElementById("description").innerHTML = description;
	score = score + points;
	document.getElementById("score").innerHTML = "Score: " + score;
}
