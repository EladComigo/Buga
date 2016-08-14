const chai = require('chai');
const should = chai.should();

module.exports = {
	'String': {
		'#length': {
			'should return 3 ': function() {
				'123'.length.should.equal(3);
			}
		}
	}
};
