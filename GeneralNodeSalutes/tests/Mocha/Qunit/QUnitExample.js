/**
 * Here you can find an example of a
 */

const FileUtils = require('../../../src/SyncCode/FileUtils');

function ok(expr, msg) {
	if (!expr) throw new Error(msg);
}

suite('Array');

before('Validating mortalCombat exists', function(){
	if (!FileUtils.CheckFileExistsSync('/MortalCombat/executable.exe'))
	{
		this.skip();
	}

});

test('#length', function() {
	var arr = [1,2,3];
	ok(arr.length == 3);
});

test('#indexOf()', function() {
	var arr = [1,2,3];
	ok(arr.indexOf(1) == 0);
	ok(arr.indexOf(2) == 1);
	ok(arr.indexOf(3) == 2);
});

suite('String');

test('#length', function() {
	ok('foo'.length == 3);
});