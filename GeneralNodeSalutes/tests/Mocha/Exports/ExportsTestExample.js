const chai = require('chai');
const should = chai.should();

module.exports = {
	before: function() {
		console.log('exports before');
	},

	'Array': {
		'#indexOf()': {
			'should return -1 when not present': function() {
				[1,2,3].indexOf(4).should.equal(-1);
			}
		}
	}
};