# Goji

*2/22/17: Goji is currently in dev mode. Stay tuned...*

*For the HTML version of this readme, see [here](https://dingv.github.io/goji/).*

**Goji** (*G*amified *O*b*J*ect-based *I*nterpreter) is a lightweight, end-to-end markup language, interpreter, and renderer to develop gamified web experiences. The first Goji use cases are e-learning and e-commerce applications, but gamification principles are highly-applicable and customizable. Creative and nontraditional innovation is anticipated.

## Goji stack
- Goji language
- Goji interpreter
- Goji renderer

## Goji language
To start scripting in Goji, clone this `goji` repo and script in `.goj` files housed in your cloned repo. 

### Syntax
Goji's syntax draws inspiration from the Python stack and the flexible XML scripting functionality, and, in its data exchange functionality, addresses some of the syntactic inefficiences of JSON. Goji is space character-agnostic, newline-delineated, and engineered to simplify as much as possible the rendering of gamified elements.

### Datatypes
Goji datatypes ('interface types') can be declared and piped through the Goji stack to render a number of interactive gamification elements.
- Declare page and heading title with `title='text'`
- Declare sequential, point-rewarding flashcards with `card=['image_path', 'text', point_value]`
- Declare multiple choice checkpoints with `mc=['question', [options], correct_index, point_value]`
- Declare essay questions with `essay=['prompt', char_limit, point_value]`
- Declare products with `product=['image_path', 'text', price]`

## Goji interpreter
The Goji interpreter is written in Python and will interpret any properly constructed `.goj` file (see specs above). To execute the interpreter, navigate to your `goji` directory, ensure that your `.goj` scripts are housed in the directory, and run
```
python goji.py [your_script_name].goj
```

## Goji renderer
Each time you execute the Goji interpreter on a `.goj` script `[your_script_name].goj`, the interpreter reads your script and the renderer generates HTML, CSS, and JavaScript files in a new, corresponding folder `goji/[your_script_name]`. You can put images anywhere in this project folder and they will render in the Goji-rendered webpage (viewable at `goji/[your_script_name]/index.html`, provided you use the correct filepaths in your Goji script.
