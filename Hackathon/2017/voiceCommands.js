<!-- voice commands using the annyang library --> 

if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  
  
  var commands = {
    'turn on the lights': function() {
      document.getElementById('myImage').src='pic_bulbon.gif'
    }, 
	'turn off the lights': function() {
	  document.getElementById('myImage').src='pic_bulboff.gif'
    },
	'play the video': function() {
	  document.getElementById('myImage').src='pic_bulred.gif'
	  window.kdp.sendNotification("doPlay");
	},
	'shoot': function() {
		document.getElementById('myImage').src='pic_bulred.gif';
		var div = document.getElementById('log');
		div.innerHTML = div.innerHTML + JSON.stringify(window.kdp.evaluate('{mediaProxy.entryCuePoints}'));
	}, 
	'pause the video': function() {
	  document.getElementById('myImage').src='pic_bulred.gif'
	  window.kdp.sendNotification("doPause");
	}
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}