# How To: MRDC Server 2019

These instructions assume a starting directory of `~/dredd-2019`, where this file is located.

## How to install necessary software

* Install Node.js with `sudo apt install nodejs`
* Install Bower with `sudo npm install --global bower`
* Install Ruby with `sudo apt install ruby-full`, then `sudo gem install sass`
* Install Grunt with `sudo npm install --global grunt`
* Install MongoDB with `sudo apt install mongodb`
* Install server dependencies with `npm install`
* Install frontend dependencies with `bower install`

## How to start the server

* Run `mongod` to start the database server.
  * In order to keep using the terminal, you'll need to do one of the following:
    * `Ctrl-Z` to pause mongod and `bg` to resume it in the background (`pkill mongod` to stop it later)
    * `Ctrl-Shift-T` to open a new terminal tab, leaving mongod in the first tab (`Ctrl-C` in that tab to stop it later)
* Run `grunt serve` to start the web server.
  * A tab should open in your browser upon success.
  * As with mongod above, if you want to free up your terminal, use `Ctrl-Z` & `bg` or `Ctrl-Shift-T`.

## How to modify the scoring table

* Edit `./server/config/environment/shared.js`.
  * NOTE: This is the folder `./server` in the root of `~/dredd-2019`, **not** `./dist/server`! 
* The variable `prototypes` should be a JSON array of scoring options.
  * The comment at the top of the file describes the meaning of each option.
