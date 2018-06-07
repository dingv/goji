# Goji

**Goji** (*G*amified *O*b*J*ect-based *I*nterpreter) is a lightweight, end-to-end command line shell, markup language, interpreter, and renderer to develop gamified web experiences. The first Goji use cases are e-learning and e-commerce applications, but gamification principles are highly-applicable and customizable. Creative and nontraditional innovation is anticipated.

## Goji stack
- Goji command line shell
- Goji language
- Goji interpreter
- Goji renderer

## Goji command line shell
The Goji shell is activated by toggling the `dynamic` keyword in the Goji program invocation:
```
python goji.py dynamic [project]
```
The user then enters the Goji shell, which prompts the user to create a Goji script dynamically. The user can exit the shell at any time by invoking `quit` or `exit` at the command line.
```
python goji.py dynamic frames
> title='U.S. Presidents'
> badge=['Just Getting Started', 'score', 200]
> badge=['Reading Is Fun', 'reading', 1]
> card=['img/GeorgeWashington.jpg', '1: George Washington, 1789-1797', 100]
> reading=['', 'George Washington was the first president of the United States.', 100]
> card=['img/JohnAdams.jpg', '2: John Adams, 1797-1801', 100]
> card=['img/ThomasJefferson.jpg', '3: Thomas Jefferson, 1801-1809', 100]
> card=['img/JamesMadison.jpg', '4: James Madison, 1809-1817', 100]
> card=['img/JamesMonroe.jpg', '5: James Monroe, 1817-1825', 100]
> card=['img/JohnQuincyAdams.jpg', '6: John Quincy Adams, 1825-1829', 100]
> essay=['Name a U.S. President.', 100, 200]
> product=['img/pencil.jpg', 'Presidential Pencil', -500]
> card=['img/complete.jpg', 'Task complete!', 0]
> quit
```
The result of this Goji shell run is a `frames.goj` script in the current working directory, and a `frames` project folder replete with the HTML/CSS/JavaScript elements for complete rendering of the user input in real-time (dynamically).

## Goji language
To start scripting in Goji, clone this `goji` repo and script in `.goj` files housed in your cloned repo.

### Syntax
Goji's syntax draws inspiration from the Python stack and the flexible XML scripting functionality, and, in its data exchange functionality, addresses some of the syntactic inefficiences of JSON. Goji is space character-agnostic, newline-delineated, and engineered to simplify as much as possible the rendering of gamified elements.

### Datatypes
Goji datatypes ('interface types') can be declared and piped through the Goji stack to render a number of interactive gamification elements.
- Declare page and heading title with `title='text'`
- Declare point-rewarding flashcards with `card=['image_path', 'text', point_value]`
- Declare essay questions with `essay=['prompt', char_limit, point_value]`
- Declare products with `product=['image_path', 'text', price]`
- New in v2.0: Declare badges with `badge=['badge_name', 'score'/'reading', threshold_value]`
- New in v2.0: Declare readings with `reading=['image_path', 'reading_text', point_value]`

### A simple Goji script
Click [here](https://dingv.github.io/goji/frames/index.html) to see the Goji rendering of the following script. Goji parses `.goj` scripts sequentially.
```
title='U.S. Presidents'
badge=['Just Getting Started', 'score', 200]
badge=['Reading Is Fun', 'reading', 1]
card=['img/GeorgeWashington.jpg', '1: George Washington, 1789-1797', 100]
reading=['', 'George Washington was the first president of the United States.', 100]
card=['img/JohnAdams.jpg', '2: John Adams, 1797-1801', 100]
card=['img/ThomasJefferson.jpg', '3: Thomas Jefferson, 1801-1809', 100]
card=['img/JamesMadison.jpg', '4: James Madison, 1809-1817', 100]
card=['img/JamesMonroe.jpg', '5: James Monroe, 1817-1825', 100]
card=['img/JohnQuincyAdams.jpg', '6: John Quincy Adams, 1825-1829', 100]
essay=['Name a U.S. President.', 100, 200]
product=['img/pencil.jpg', 'Presidential Pencil', -500]
card=['img/complete.jpg', 'Task complete!', 0]
```

## Goji interpreter
The Goji interpreter is written in Python and will interpret any properly constructed `.goj` file (see specs above). To execute the interpreter, navigate to your `goji` directory, ensure that your `.goj` scripts are housed in the directory, and run
```
python goji.py [static/dynamic] [project]
```

## Goji renderer
Each time you execute the Goji interpreter on a `.goj` script `[project]`, the interpreter reads your script and the renderer generates HTML, CSS, and JavaScript files in a new, corresponding folder `goji/[project]`. You can put images anywhere in this project folder and they will render in the Goji-rendered webpage (viewable at `goji/[project]/index.html`, provided you use the correct filepaths in your Goji script.

Goji includes a developer-customizable feature for form submission. In `goji.py`, the `<a href></a>` field in the HTML generator for the `Submit` button element can be modified to any action, so as to record responses to the HTML form.
