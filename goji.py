import sys, os, shutil

def main():
	goj_path = sys.argv[1]
	directory = getdir(goj_path)
	setup(directory)
	objects = interpret(goj_path)
	render_html(directory, objects)
	render_js(directory, objects)

# Read .goj into list of tuples (dtype, content) 
def interpret(script_path):
	objects = []
	lines = []

	with open(script_path) as f:
		lines = f.readlines()

	# each line of the goj script is a string 'type:[data]\n'
	for line in lines:
		end = line.find('\n')
		if end != -1: line = line[:end]
		# get dtype (card, etc)
		assign_index = line.find('=')
		dtype = line[:assign_index]
		# get list string
		liststr = line[assign_index+1:]
		# make tuple
		tup = (dtype, liststr)
		objects.append(tup) # ordered sequentially

	return objects

def getdir(script_path):
	return script_path[:-4] # remove .goj at end

# Make project folder (if new project) and initialize index.html / process.js / styles.css
def setup(directory):
	# make project folder if does not already exist
	if not os.path.exists(directory):
		os.makedirs(directory)
	# make index.html
	html = open(directory + '/index.html', 'w+') 
	# make process.js
	js = open(directory + '/process.js', 'w+')
	# copy over goji styles.css
	shutil.copyfile('styles.css', directory + '/styles.css')
	html.close()
	js.close()

def render_html(directory, objects):
	h = open(directory + '/index.html', 'w')
	# HTML header
	h.write('<!DOCTYPE html>\n')
	h.write('<html>\n')
	h.write('<head>\n')
	# include CSS
	h.write('<link rel="stylesheet" href="styles.css">\n')
	# HTML page title
	title = objects[0][1]
	title = title[1:] 
	title = title[:-1] # strip ''
	h.write('<title>' + title + '</title>\n')
	h.write('</head>\n')
	# include JS
	h.write('<script src="process.js"></script>')
	# body
	h.write('<body>\n')
	h.write('<h1>' + title + '</h1>\n') # title h1

	# Initial frame
	frame1 = objects[1] # 0 is title
	
	# card type
	if frame1[0] == 'card':
		# liststr: ['img/GeorgeWashington.jpg', '1: George Washington, 1789-1797', 100]
		liststr = objects[1][1]
		# runstr task 1: image path
		runstr = liststr[2:] # remove '[
		comma_index = runstr.find(',')
		# image path
		image_path = runstr[:comma_index]
		image_path = image_path[:-1] # remove '
		# update runstr
		runstr = runstr[comma_index+1:]
		h.write('<p id="image"><img src="' + str(image_path) + '"</p>\n')
		# runstr task 2: description
		start_clip = runstr.find('\'')
		runstr = runstr[start_clip+1:] # remove start '
		end_clip = runstr.find('\'')
		# description
		description = runstr[start_clip-1:end_clip]
		# update runstr
		runstr = runstr[end_clip+1:]
		h.write('<p id="description">' + description + '</p>\n')
		h.write('<button type="button" class="button" onclick="pageflip()">Claim</button>')
		h.write('<button type="button" class="button" onclick="skip()">Skip</button>')

		h.write('<p id="score">Score: 0</p>\n')
	
	h.write('</body>\n')
	h.write('</html>')

	h.close()


def render_js(directory, objects):
	j = open(directory + '/process.js', 'w')

	j.write('var frames = [\n')

	for i in range(1, len(objects)):
		object = objects[i]
		dtype = object[0]
		remstr = object[1]
		j.write('[\'' + str(dtype) + '\',' + remstr[1:] + ',\n')

	j.write(']\n')

	j.close()

	to_append = []
	with open('base.js') as base:
		to_append = base.readlines()

	j = open(directory + '/process.js', 'a')

	for line in to_append:
		j.write(line)

	j.close()


if __name__ == '__main__':
	main()