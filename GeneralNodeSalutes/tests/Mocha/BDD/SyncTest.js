const chai = require('chai');
const should = chai.should();
const expect = chai.expect;

const FileUtils = require('../../../src/SyncCode/FileUtils');

describe('TestSyncBDD', function() {
	before(function() {
		console.log('Just Smile and wave!\n');
	});

	describe('CheckDefaultFileExistsSync', function() {
		context('File exists' , function ()	{
			it('Validate file exists', function ()
			{
				FileUtils.CheckFileExistsSync(__dirname + '/../../../Resources/File.resource').should.be.false;
			});
		});
		context('File does not exists' , function ()	{
			it('Validate file does not exists', function ()
			{
				FileUtils.CheckFileExistsSync(__dirname + '/../../../Resources/File.resource.not.exists').should.be.false;
			});
		});
	});

	//describe.only('CheckingSingleSuiteOnly', function(){
	describe('CheckingSingleSuiteOnly', function(){
		//it.only('TestingSingleTestOnly', function(){
		it('TestingSingleTestOnly', function(){
			expect([1,2,4][0]).to.equal(1);
		});
		it('InCaseOnlyIsNotTriggered', function(){
			expect([1,2,4][2]).to.equal(4);
		});
	});

	//describe.skip('ShowingSkipSuite', function(){
	describe('ShowingSkipSuite', function(){
		//it.skip('ShowingSkipTest', function(){
		it('ShowingSkipTest', function(){
			expect([1,2,4][0]).to.equal(1);
		});
		it('NeverSkipMeTest', function(){
			expect([1,2,4][2]).to.equal(4);
		});
	});



	after(function(){
		console.log('Hands are tired , wave for me\n');
	});

});
