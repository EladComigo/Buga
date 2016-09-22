function encodeString(str){
	if (str && (typeof str === 'string' || str instanceof String))
	{
		//const uriEncoded = encodeURI(str);
		const ans = new Buffer(str).toString('base64');
		if (ans.indexOf('/') !== -1 )console.log(ans);
		const hex = Buffer.from(str, 'utf8').toString('hex');
		console.log('base64 length: ' + ans.length + ', hex length:' + hex.length);

		return ans;
		//return
	}
	return str;
}

function decodeString(str){
	if (str && (typeof str === 'string' || str instanceof String))
	{
		return new Buffer(str, 'base64').toString();
		//return decodeURI(base64Decoded);
		//return Buffer.from(str, 'hex').toString();
	}
	return str;
}


const myArrayOfStrings = [
	'http://test.com/service/action/p/1/something',
	'http://test.com/service/action/p/1/somethingewoidj/woncowenconeocneoncoeneriocmnwe=+0932#@!$^^&&*$Roicmoiemncoimeoicmoiemcoimeoicmeoimc=cmwmodc+mokoecem/nciencuhn98dh389d98373fx673fe7gx37gx763g76xg37gx873gx7g378gx76g3x76g387gx37/omethingewoidj/woncowenconeocneoncoeneriocmnweoicmoiemncoimeoicmoiemcoimeoicmeoimc=cmwmodc+mokoecem/nciencuhn98dh389d98373fx673fe7gx37gx763g76xg37gx873gx7g378gx76g3x76g387gx37'
];


for (var i =0 ; i < myArrayOfStrings.length ; i++)
	if (decodeString(encodeString(myArrayOfStrings[i])) !== myArrayOfStrings[i])
		console.log('Failed on index ' + i);