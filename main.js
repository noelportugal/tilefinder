var noble = require('noble');
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

var tile1 = {name: 'Backpack', address: 'e3:07:74:4e:ea:38'};
var tile2 = {name: 'Notebook', address: 'DB:E5:7B:05:65:E4'};
var tile3 = {name: 'Lunchbox', address: 'ed:f9:74:a1:49:0a'};
var tiles = [tile1, tile2, tile3];
var insideTiles = [];

var proximityThreshold = 65;

noble.on('stateChange', function(state) {
  if (state === 'poweredOn')
    noble.startScanning([], true);
  else
    noble.stopScanning();
});

noble.on('discover', function(peripheral) {
  tileIndex = getIndex( tiles, peripheral.address);
  if (tileIndex > -1){
    var name = tiles[tileIndex].name;
    var proximity = Math.abs(peripheral.rssi);
    if (proximity <= proximityThreshold){
        if (insideTiles.indexOf(name) === -1){
          insideTiles.push(name);
          var currentTiles = insideTiles.toString();
          var message;
          if(insideTiles.length === tiles.length){
            message = 'Congrats! You have your ' + currentTiles + '. You are good to go.';
          }else{
            message = 'You only have your ' + currentTiles + ', are you forgetting something?';
          }
          console.log(message)
          //exec('/home/pi/[SCRIPT_OR_BINARY_TO_EXECUTE]');
        }
    }else if (proximity >= proximityThreshold){
        state='outside';
        if (insideTiles.indexOf(name) > -1){
          insideTiles.splice(insideTiles.indexOf(name), 1);
        }
    }

  }
});

function getIndex(arr, search) {
    var len = arr.length;
    while( len-- ) {
        if(arr[len].address.toLowerCase() === search.toLowerCase())
           return len;
    }
}

// Handle clean exit event
process.stdin.resume();//so the program will not close instantly
function exitHandler(options, err) {
    console.log('stopScanning & exit');
    noble.stopScanning();
    process.exit();
}
// catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));
