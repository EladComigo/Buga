
const chai = require('chai');
const expect = chai.expect;

const PromiseToDo = require('../../../src/Promises/PromiseToDo');


suite('TestPromiseTDD', function() {
	suite('CheckSimplePromiseCall', function() {
		this.timeout(10000); //  in case you know a test needs more time to run then the default 2 secs
		test('Validate something to do', function (done)
		{
			PromiseToDo.something().then(
				function(data){
					expect(data).to.equal('Naa I am busy!');
					done();
				},
				function(err){
					expect(false).to.equal(true);
					done();
				}
			);
		});

	});
});