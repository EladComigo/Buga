var Promise = require('bluebird');
class PromiseSequence
{

	constructor(){
		this.number = 0;
	}


	RunThreeTasks()
	{
		var task1 = this.startTask1().bind(this)
		.then(this.startTask2)
		.then(this.startTask3)
		.then(this.startTask4)
		.catch(this.logError);
		return;
	}

	logError(e)
	{
		console.error('Wow' + e);
		throw e;  // reject the Promise returned by then
	}

	startTask1()
	{
		const This = this;
		return new Promise(
			function(resolve, reject)
			{
				This.number = 1;
				setTimeout(function(){
					console.log("Hello " + This.number);
					resolve(5);
				}, 2000);

			}
		);

	}

	startTask2()
	{
		const This = this;
		return new Promise(
			function(resolve, reject)
			{
				This.number = 2;
				setTimeout(function(){
					console.log("Hello " + This.number);
					reject(5);
				}, 2000);
			}
		);
	}
	startTask3()
	{
		const This = this;
		return new Promise(
			function(resolve, reject)
			{
				This.number = 3;
				setTimeout(function(){
					console.log("Hello " + This.number);
					resolve(5);
				}, 2000);
			}
		);
	}
	startTask4()
	{
		const This = this;
		return new Promise(
			function(resolve, reject)
			{
				This.number = 4;
				setTimeout(function(){
					console.log("Hello " + This.number);
					resolve(5);
				}, 2000);
			}
		);
	}
}

const x = new elad();
x.RunThreeTasks();

