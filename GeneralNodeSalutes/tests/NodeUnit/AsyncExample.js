var assert = require('assert');

exports.ValidateAsycnLogic = function(test) {

	test.expect(3);
	// Async Call
	setTimeout(
		function(){
			console.log('Took me 6 seconds to finish');
			test.ok(true, 'Always true - Async call done!');
		},
		6000
	);

	setTimeout(
		function(){
			console.log('Took me 5 seconds to finish');
			test.ok(true, 'Always true - Async call done!');
		},
		5000
	);

	setTimeout(
		function(){
			test.ok(true, 'Always true - Async call done!');
			test.done();
		},
		7000 // if they all did not finish up to this point we should fail on expected number of assertions
	);



};