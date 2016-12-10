# tileFinder

A simple bluetooth [tile](https://www.thetileapp.com/) scanner base on [Noble](https://github.com/sandeepmistry/noble).

#### Requirements
If you are using an Raspberry Pi 2, make sure you have a BLE dongle. For Raspberry Pi 3 BLE is onboard, so no need to add a dongle.
You can also run this from a macOS (haven't test in Windows). To find out the MAC address of your Tile use a macOS.

#### Raspberry PI requirements

tileFinder requires [Node.js](https://nodejs.org/) to run. Make sure you have the latest version by using the latest nodejs. The following will update a Raspberry Pi nodejs to the latest version:
```sh
$ curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
$ sudo apt-get install nodejs
$ sudo apt-get install flite
```
#### Installation
```sh
$ git clone https://github.com/noelportugal/tilefinder
$ cd tilefinder
$ npm install
```
#### Adding Tile information

First run the following spcript from a macOS. This will help you retrieve the MAC addresses of you tiles.
```sh
$ node getTileInfo.js
```
Then modify main.js (in Rapsberry Pi). Change the name and address to fit your needs.
```javascript
var tile1 = {name: 'Backpack', address: 'XX.XX.XX.XX.XX.XX'};
var tile2 = {name: 'Notebook', address: 'XX.XX.XX.XX.XX.XX'};
var tile3 = {name: 'Lunchbox', address: 'XX.XX.XX.XX.XX.XX'};
```

#### Testing proximity
Adjust the proximityThreshold in main.js
```javascript
var proximityThreshold = 65;
```

#### Run
```sh
$ sudo node main.js
```

#### Extend
You can add more actions like speaking (using flite), turn on an LED or play an MP3 by executing a script or running a program using a child_process. Uncomment this line and add your executable.
```javascript
exec('/home/pi/[SCRIPT_OR_BINARY_TO_EXECUTE]');
```
