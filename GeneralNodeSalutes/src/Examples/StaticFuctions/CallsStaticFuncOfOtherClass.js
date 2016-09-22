
const ClassWithStaticFunction = require('./ClassWithStaticFunction');

class CallsStaticFuncOfOtherClass{

	foo()
	{
		ClassWithStaticFunction.staticFoo();
	}

}
module.exports = CallsStaticFuncOfOtherClass;
