# Essential npm Knowledge
This file contains info on how to install npm packages and use them in a project. 

## npm website
When you install NodeJS, you also install NPM. See the [NPM website](www.npmjs.com) for documentation.

## npm Packages

The npm website offers many npm packages for download. npm packages are node modules created by third parties.

## npm CLI

See the [npm CLI documentation](https://docs.npmjs.com/cli/v11/) for CLI commands and using npm.

## Install an nmp package in the terminal

use "npm i [npm package name]"

For example "npm i nodemon -g"

The nodemon npm package monitors files and as you save, it automatically restarts the server.

Next, running "nodemon" will start "node index.js". It will automatically look for an index.js file. For a different file name, use that: 

nodemon [filename]

## Initialize a project

Use "node init" to initialize a node project. Run "node init -y" to answer all questions at once with a yes.

## Add an npm package to a project

Open package.json file after initializing the project.

use "npm i [data-fns]" to install a package as a dependency. Package will be downloaded when building the project. 

To not send the packages to GitHub, create a .gitignore file in the root folder and add "node_modules" folder to it (no "").

Install a package as a dev dependency using the -d flag:

npm i nodemon -D
npm i uuid

## Import a package in a project

use object destructuring to import the format function from an npm package:

const { format } = require('date-fns);

## How to run a program using scripts

Projects normally have a start script, a dev script, and a build script. These are listed in the package.json file under "scripts":

"scripts": {
  "start": "node index",
  "dev": "nodemon index"
},

Now start a project with the "npm run dev" in the terminal.

Stop a project with CTRL + C

## Uninstall package

Run "npm rm [package name] [flag: production or development]
for example: npm rm nodemon -D

Remove the package name manually in the package.json file under "scripts".






