console.log('-------- for  -------- ');
const myMap = {"myKey": "myText", "mySecondKey": "mySecondText", 0:"myThirdText"};
var keys = Object.keys(myMap);
for (var keyIdx = 0; keyIdx < keys.length; keyIdx++)
{
	console.log('key: ' + keys[keyIdx] + "   value: " + myMap[keys[keyIdx]]);
}

const myArray = ["myText", "mySecondText", "myThirdText"];
var keys = Object.keys(myArray);
for (var keyIdx = 0; keyIdx < keys.length; keyIdx++)
{
	console.log('key: ' + keys[keyIdx] + "   value: " + myMap[keys[keyIdx]]);
}
