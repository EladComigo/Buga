console.log('-------- for in map -------- ');
const myMap = {"myKey": "myText", "mySecondKey": "mySecondText", 0:"myThirdText"};
for (var value in myMap){
	console.log("value: " + value);
};

console.log('-------- for in array -------- ');
const myArray = ["myText", "mySecondText", "myThirdText"];
for (var value in myArray){
	console.log("value: " + value);
};

console.log('-------- for in array -------- ');
const mySuperSillyArray = ["myText", "mySecondText", "myThirdText"];
mySuperSillyArray.additional = "GGG";
for (var value in mySuperSillyArray){
	console.log("value: " + value);
};

