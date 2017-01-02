<!-- voice commands using the annyang library -->

function removeStepImg() {
    var img = document.getElementById('step_img');
    if (img !== null) {
        img.parentNode.removeChild(img);
    }
}

if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call

    function setVoiceDivText(text)
    {
        document.getElementById('voiceDiv').innerText=text;
    }

    function playTheVideo()
    {
        removeStepImg();
        setVoiceDivText("play");
        kdp.sendNotification("doPlay");

    }
    function pauseTheVideo()
    {
        removeStepImg();
        setVoiceDivText("pause");
        kdp.sendNotification("doPause");
    }
    function stopTheVideo()
    {
        removeStepImg();
        setVoiceDivText("stop");
        kdp.sendNotification("doStop");
    }
    function repeatLastSection()
    {
        removeStepImg();
        setVoiceDivText("repeat");
        kdp.sendNotification("doSeek", Math.round(seekToStart/1000));
        kdp.sendNotification("doPlay");
    }
    function repeatSlowMotion()
    {
        setVoiceDivText("repeatSlowMotion");
        currentSpeed = nextSpeed(false);
        kdp.sendNotification("playbackRateChangeSpeed", currentSpeed);
        kdp.sendNotification("doSeek", Math.round(seekToStart/1000));
        kdp.sendNotification("doPlay");
    }
    function repeatFast()
    {
        setVoiceDivText("repeatFast");
        currentSpeed = nextSpeed(true);
        kdp.sendNotification("playbackRateChangeSpeed", currentSpeed);
        kdp.sendNotification("doSeek", Math.round(seekToStart/1000));
        kdp.sendNotification("doPlay");
    }
    function slowDown()
    {
        setVoiceDivText("slow down");
        currentSpeed = nextSpeed(false);
        kdp.sendNotification("playbackRateChangeSpeed", currentSpeed);
    }

    function faster()
    {
        setVoiceDivText("faster");
        currentSpeed = nextSpeed(true);
        kdp.sendNotification("playbackRateChangeSpeed", currentSpeed);
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
        /** repeat **/
        //'repeat': repeatLastSection,
        'did not get that': repeatLastSection,
        /** repeat slow motion **/
        'repeat slow motion': repeatSlowMotion,
        'repeat fast': repeatFast,

    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
}