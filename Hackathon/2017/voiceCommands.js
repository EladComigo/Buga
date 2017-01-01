<!-- voice commands using the annyang library -->

if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call

    function setVoiceDivText(text)
    {
        document.getElementById('voiceDiv').innerText=text;
    }

    function playTheVideo()
    {
        setVoiceDivText("play");
        kdp.sendNotification("doPlay");
    }
    function pauseTheVideo()
    {
        setVoiceDivText("pause");
        kdp.sendNotification("doPause");
    }
    function stopTheVideo()
    {
        setVoiceDivText("stop");
        kdp.sendNotification("doStop");
    }
    function repeatLastSection()
    {
        setVoiceDivText("repeat");
        kdp.sendNotification("doSeek", Math.round(seekToStart/1000));
        kdp.sendNotification("doPlay");
    }


    var commands = {
        /** play commands **/
        'play the video': playTheVideo,
        'play': playTheVideo,
        'continue': playTheVideo,
        /** pause commands **/
        'pause the video': pauseTheVideo,
        'pause': pauseTheVideo,
        'wait': pauseTheVideo,
        'halt': pauseTheVideo,
        'just a sec': pauseTheVideo,
        'just a second': pauseTheVideo,
        /** stop **/
        'stop': stopTheVideo,
        'back to the start': stopTheVideo,
        'go to start': stopTheVideo,
        'back to top': stopTheVideo,
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
}