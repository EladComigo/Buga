fs = require('fs')
fs.readFile('./JSONFFPROBE.txt', 'utf8', function (err, result) {
	if (err) {
		return console.log(err);
	}
	let altered = result.replace(/\n/g, '').replace(/\t/g,'').replace(/\r/g,'');
	altered = altered.split('    ').join(' ');
	console.log(altered);
	console.log(`\nLENGTH: ${altered.length}`);
});


// here we want to replace the sessionId
console.log('Changing session ID ');
const myString = "http://dev-backend1.dev.kaltura.com:82/hls/p/101/usePlayServer/1/entryId/0_s1cc2qak/flavorIds/0_wdy4nvbt/uiConfId/23448262/sessionId/65240040008/index.m3u8";
const myArray = myString.split('sessionId');
if (myArray.length !== 2){
	throw new Error('only single sessionId allowed');
}
let suffix = myArray[1].substr(myArray[1].indexOf('/index'));
console.log(myArray[0] + 'sessionId/' + Math.floor(Math.random() * 50000000) + suffix);