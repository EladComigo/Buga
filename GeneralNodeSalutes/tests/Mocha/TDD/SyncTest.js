const chai = require('chai');
const should = chai.should();

const FileUtils = require('../../../src/SyncCode/FileUtils');

/**
	suite: analogous to describe
	test: analogous to it
	setup: analogous to before
	teardown: analogous to after
	suiteSetup: analogous to beforeEach
	suiteTeardown: analogous to afterEach
 */

suite('TestSyncTDD', function() {
	suiteSetup(function() {
		console.log('Before a suite !\n');
	});

	suite('CheckDefaultFileExistsSync', function() {

		setup(function(){console.log('Happen before each test\n')});
		test('Validate file exists', function ()
		{
			FileUtils.CheckFileExistsSync(__dirname + '/../../../Resources/File.resource').should.be.true;
		});
		test('Validate file does not exists', function ()
		{
			FileUtils.CheckFileExistsSync(__dirname + '/../../../Resources/File.resource.not.exists').should.be.false;
		});
		teardown(function(){console.log('Happen after each test\n')});
	});

	suiteTeardown(function(){
		console.log('After a suite \n');
	});

});

suite('TestSyncTDD2', function() {
	suiteSetup(function() {
		console.log('Before a suite !\n');
	});

	suite('CheckDefaultFileExistsSync', function() {

		setup(function(){console.log('Happen before each test\n')});
		test('Validate file exists', function ()
		{
			FileUtils.CheckFileExistsSync(__dirname + '/../../../Resources/File.resource').should.be.true;
		});
		test('Validate file does not exists', function ()
		{
			FileUtils.CheckFileExistsSync(__dirname + '/../../../Resources/File.resource.not.exists').should.be.false;
		});
		teardown(function(){console.log('Happen after each test\n')});
	});

	suiteTeardown(function(){
		console.log('After a suite \n');
	});

});
