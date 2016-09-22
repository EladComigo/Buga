var before = require('./BeforeE');
try {
	//Error.stackTraceLimit = 30;
	//var x = new Error();
	throw new Error();
} catch(e)
{
	console.log(e);

}
