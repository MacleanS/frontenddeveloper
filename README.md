# Front-end Developer Coding Exercise


## What you should build

Qriously is a question company, so we would like you to build a small question unit.

The unit should provide the following functionality:

- It should render a question and three answer options (from the config.js file)
- It should be 320 x 50 pixels
- The answer options should be clickable & tappable (mouse & touch interfaces)
- Tapping an option should trigger an AJAX call submitting the vote as a GET parameter (URL can be found in config.js)
  which will return a results file.
- The unit should display the results data provided in the JSON response
- It only needs to run on modern iOS/Android & Chrome desktop browsers - don't worry about any other browsers


## Deliverable

Fork this repository & commit your changes to your local branch (don't publish them on GitHub, please.)

Add a build step to `gulpfile.babel.js`, or build on yourself. (npm commands are fine, for example). That build step
should take the code from `src/main/`, package it if that's necessary, and then move it into the temporary `target/`
folder.

**Replace the README.md** file with instructions on how to set things up & run the code. Please also include the NPM &
Node version numbers, to make sure we're using the same.\
Make sure all dependencies are listed in package.json.

When you're done and all changes are committed, run `git clean -df` to delete unversioned folders (like `node_modules`,
etc.)

Package whole project into a ZIP file - remember to include any necessary hidden files and folders - e.g. `.git`.

We will test it on iOS (Safari), Android (Chrome) and desktop (Chrome).


## Requirements

- Use ES6/ES2015
- Build using Webpack & Babel (using Gulp or Grunt if you like)
- Use SCSS or LESS for CSS code
- Use touch events
- Tap targets should be as big as possible, a tap nearly anywhere on the ad should result in an interaction, even if
  it's not on the button
- Use configuration object in config.js
- Make it responsive, between 320 and 480 pixels width


## Bonus

- Make the resulting JavaScript & CSS as small as possible:
  - Use as few dependencies as possible
  - Use lightweight dependencies where possible
  - Minify/obfuscate code
  - Don't use image files
- As little hardcoded HTML as possible (generate through JS, where possible)
- Make it look nice
- Add animations & transitions
- Annotate types using [Flow](https://flow.org/)


# Happy Coding!
