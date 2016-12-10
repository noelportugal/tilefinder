var noble = require('noble');
function puts(error, stdout, stderr) { sys.puts(stdout) }

noble.on('stateChange', function(state) {
  if (state === 'poweredOn')
    noble.startScanning([], true);
  else
    noble.stopScanning();
});

noble.on('discover', function(peripheral) {
    if (peripheral.advertisement.localName === 'Tile'){
      console.log('Name: %s', peripheral.advertisement.localName );
      console.log('   mac address: %s', peripheral.address );
      console.log('   uuid: %s', peripheral.uuid );
      console.log('   rssi: %s', peripheral.rssi );
    }
});

// Handle clean exit event
process.stdin.resume();//so the program will not close instantly
function exitHandler(options, err) {
    console.log('stopScanning & exit');
    noble.stopScanning();
    process.exit();
}
// catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));
