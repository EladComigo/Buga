const Promise = require('bluebird');

class PromiseToDo
{

	static something()
	{
		return new Promise(
			function(resolve, reject)
			{
				setTimeout(function(){
					console.log('Checking if I am available');
					resolve('Naa I am busy!');
				}, 3000)
			}
		);
	}

}
module.exports = PromiseToDo;
