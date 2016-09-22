console.log('-------- for each map -------- ');
const myMap = {"myKey": "myText", "mySecondKey": "mySecondText", 0:"myThirdText"};
Object.keys(myMap).forEach(function(key){
	console.log('key: ' + key + "   value: " + myMap[key]);
});

console.log('-------- for each array -------- ');
const myArray = ["myText", "mySecondText", "myThirdText"];
myArray.forEach(function(key){
	console.log('key: ' + key + "   value: " + myArray[key]);
});

