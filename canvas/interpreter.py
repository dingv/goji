def main():
	parse_to_json()

def parse_to_json():
	f = open('program.ping', 'r')
	lines = f.readlines()
	
	# json start
	j = open('data.json', 'w')
	j.write("{\n")
	j.write("	\"npcs\":\n") # npcs is a placeholder name that is function with render.py
	j.write("	[\n")

	# objects
	


	# json end
	j.write("	]\n")
	j.write("}")


if __name__ == "__main__":
	main()