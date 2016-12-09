# tileFinder

A simple bluetooth [tile](https://www.thetileapp.com/) scanner.

#### Installation

tileFinder requires [Node.js](https://nodejs.org/) to run. Make sure you have the latest version by using apt-get
```sh
sudo apt-get install nodejs
```

```sh
$ git clone https://github.com/noelportugal/tilefinder
$ cd tilefinder
$ npm install
$ node main.js
```
#### Testing proximity
Adjust the proximityThreshold in main.js
```javascript
var proximityThreshold = 65;
```
#### Extend
You can add more actions like speaking (using flite), turn on an LED or play an MP3 by executing a script or  running a program using a child_process
```javascript
exec("/home/pi/[SCRIPT_TO_SPEAK]");
```

