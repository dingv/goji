import json

def main():
	data = json.load(open('data.json'))
	script_constructor()

def script_constructor():
	f = open('script.js', 'w')
	
	# var declarations
	f.write("var myGamePiece;\n")
	data = json.load(open('data.json'))
	for npc in data["npcs"]:
		f.write("var " + str(npc["first"]) + ";\n")
	
	# startGame()
	f.write("function startGame() {\n")
	f.write("   myGamePiece = new component(30,30,\"black\",225,225);\n")
	for npc in data["npcs"]:
		f.write("   " + str(npc["first"])
				+ " = new component(" 
				+ str(npc["width"]) + "," 
				+ str(npc["height"]) + ","
				+ "\"" + str(npc["color"]) + "\","
				+ str(npc["x"]) + ","
				+ str(npc["y"]) + ");\n")
	f.write("   myGameArea.start();\n")
	f.write("}\n")

	# myGameArea
	f.write("var myGameArea = {\n"
			+ "    canvas : document.createElement(\"canvas\"),\n"
			+ "    start : function() {\n"
			+ "        this.canvas.width = 800;\n"
			+ "        this.canvas.height = 600;\n"
			+ "        this.context = this.canvas.getContext(\"2d\");\n"
			+ "        document.body.insertBefore(this.canvas, document.body.childNodes[0]);\n"
			+ "        this.frameNo = 0;\n"
			+ "        this.interval = setInterval(updateGameArea, 20);\n"
			+ "        window.addEventListener('keydown', function (e) {\n"
			+ "            e.preventDefault();\n"
			+ "            myGameArea.keys = (myGameArea.keys || []);\n"
			+ "            myGameArea.keys[e.keyCode] = (e.type == \"keydown\");\n"
			+ "        })\n"
			+ "        window.addEventListener('keyup', function (e) {\n"
			+ "            myGameArea.keys[e.keyCode] = (e.type == \"keydown\");\n"
			+ "        })\n"
			+ "    },\n"
			+ "    stop : function() {\n"
			+ "        clearInterval(this.interval);\n"
			+ "    },\n"
			+ "    clear : function() {\n"
			+ "        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n"
			+ "    }\n"
			+ "}\n")

	# component()
	f.write("function component(width, height, color, x, y, type) {\n"
			+ "    this.type = type;\n"
			+ "    this.width = width;\n"
			+ "    this.height = height;\n"
			+ "    this.speed = 0;\n"
			+ "    this.angle = 0;\n"
			+ "    this.moveAngle = 0;\n"
			+ "    this.x = x;\n"
			+ "    this.y = y;\n"
			+ "    this.update = function() {\n"
			+ "        ctx = myGameArea.context;\n"
			+ "        ctx.save();\n"
			+ "        ctx.translate(this.x, this.y);\n"
			+ "        ctx.rotate(this.angle);\n"
			+ "        ctx.fillStyle = color;\n"
			+ "        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);\n"
			+ "        ctx.restore();\n"
			+ "    }\n"
			+ "    this.newPos = function() {\n"
			+ "        this.angle += this.moveAngle * Math.PI / 180;\n"
			+ "        this.x += this.speed * Math.sin(this.angle);\n"
			+ "        this.y -= this.speed * Math.cos(this.angle);\n"
			+ "    }\n"
			+ "}\n")

	# updateGameArea()
	f.write("function updateGameArea() {\n"
			+ "    myGameArea.clear();\n"
			+ "    myGamePiece.moveAngle = 0;\n"
			+ "    myGamePiece.speed = 0;\n"
			+ "    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.moveAngle = -2; }\n"
			+ "    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.moveAngle = 2; }\n"
			+ "    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speed= 2; }\n"
			+ "    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speed= -2; }\n"
			+ "    myGamePiece.newPos();\n"
			+ "    myGamePiece.update();\n")
	for npc in data["npcs"]:
		first = str(npc["first"])
		logtext = str(npc["first"]) + " " + str(npc["last"]) + ", " + str(npc["org"]) + " " + str(npc["title"]) + ": " + str(npc["dialogue"])
		f.write("    " + first + ".newPos();\n")
		f.write("    " + first + ".update();\n")
		f.write("    if (myGamePiece.x < " + first + ".x + " + first + ".width\n"
			+ 	"	 && myGamePiece.x + myGamePiece.width > " + first + ".x\n"
			+	"	 && myGamePiece.y < " + first + ".y + " + first + ".height\n"
			+ 	"	 && myGamePiece.y + myGamePiece.height > " + first + ".y) {\n"
			+ 	"		document.getElementById(\"log\").innerHTML = \"" + logtext + "\";\n"
			+ 	"	 }\n")
	f.write("}")

	f.close()

if __name__ == "__main__":
	main()