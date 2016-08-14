const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

describe('TestAsyncSeparateCases', function() {
	it('should succeed', function(done)
	{
		setTimeout(function ()
		{
			(true).should.be.equal(true);
			done();
		}, 100);
	});

	it('should fail', function(done)
	{
		setTimeout(function()
		{

			expect(true).to.be.equal(false);
			done();
		}, 100);
	});

});