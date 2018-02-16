const IOTA = require('iota.lib.js');
const SEED = 'HAXXLSERRQIYJZORVTPYXSCYYCAVZ9QUPOJE9XV9EMRLKCGHADWXHMSHYYBVTZDAOQDATCWIG9WQG9LEC';

var iota = new IOTA({
  'host' : 'http://nodes.iota.fm',
  'port' : 80
});

var address = 'EOBDFEBWYGIUMAOMBXPHSONBGBWXWBKQPGTJBZHUZVF9JRFZXSXJIHPHRHZBQNKYKDRABBDJSJMBUNXSY';
var messageToSend = iota.utils.toTrytes("Greetings from Hamburg");
var tag = "HELLOWROLDPHILSZALAY";

var transfer = [{ 'address': address, 'value': 0, 'message': messageToSend, 'tag': tag }];

iota.api.sendTransfer(SEED, 1, 14, transfer, function (err, res) {
  if(!err) {
    console.log(res);
  } else {
    console.log(err)
  }
});

// Helper functions
function getNewAddress() {
  var getNewAdress = iota.api.getNewAddress(SEED, function (err, res) {
    if(!err) {
      console.log(res);
    } else {
      console.log(err);
    }
  });
}

function getNodeInfo() {
  iota.api.getNodeInfo(function (err, res) {
    if(!err) {
      console.log(res);
    } else {
      console.log(err);
    }
  });
}
