const assert = require('assert');
const PromiseToDo = require('../../src/Promises/PromiseToDo');

exports.ValidatePromiseLogic = function(test) {

	test.expect(1);
	PromiseToDo.something().then(
		function(result){
			test.ok(result === 'Naa I am busy!', 'Result was ok');
			test.done();
		},
		function() {
			test.ok(false, 'Failed to promise to do something');
			test.done();
		}

	);
};