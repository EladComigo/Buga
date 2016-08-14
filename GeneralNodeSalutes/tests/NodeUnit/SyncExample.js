
exports.ValidatingSingleAssertion = function(test) {
	test.expect(1);
	test.ok(true, "this assertion should pass");
	test.done();
};

exports.ValidationWrongNumberOfAssertions = function(test) {
	test.expect(2);
	test.ok(true, "this assertion should failed - wrong number of assertions");
	test.done();
};
