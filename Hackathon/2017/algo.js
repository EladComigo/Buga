function chapterSeek(seekStartTime)
{
    kdp.sendNotification("doSeek", Math.round(seekStartTime/1000));
    kdp.sendNotification("doPlay");
    seekViaChapter = true;

}

function initializeValues()
{
    dontStop = false;
    seekToStart = 0;
    seekToEnd = 0;
    currentSpeed = 1;
    seekViaChapter = false;
    kdp.sendNotification("playbackRateChangeSpeed", currentSpeed);
}

function bindKdpToEvenets(kdp, chaptersDiv, logDiv)
{

    kdp.kBind('cuePointsReceived', function ( cuePoints, id ) {
        cuepoints = cuePoints;
        for (var cuePoint in cuepoints)
        {
          /*  logDiv.innerHTML = logDiv.innerHTML + 'cuePointsReceived title ' +  cuepoints[cuePoint].title +  "<br />";
            logDiv.innerHTML = logDiv.innerHTML + 'cuePointsReceived startTime ' +  cuepoints[cuePoint].startTime +  "<br />";
            logDiv.innerHTML = logDiv.innerHTML + 'cuePointsReceived endTime ' +  cuepoints[cuePoint].endTime +  "<br />";
            logDiv.innerHTML = logDiv.innerHTML + 'cuePointsReceived duration ' +  cuepoints[cuePoint].duration +  "<br />";
            logDiv.innerHTML = logDiv.innerHTML + '------------------------------- '  +  "<br />";
            */
            chaptersDiv.innerHTML = chaptersDiv.innerHTML + "<li onclick=\"chapterSeek(" + cuepoints[cuePoint].startTime + ")\">" + cuepoints[cuePoint].title  + "</li>"
        }
    });

    kdp.kBind("adOpportunity", function(cuePoint){
        seekToStart = cuePoint.cuePoint.startTime;
        seekToEnd = cuePoint.cuePoint.endTime;

       /* logDiv.innerHTML = logDiv.innerHTML + 'adOpportunity start time '  +  cuePoint.cuePoint.startTime +   "<br />";
        logDiv.innerHTML = logDiv.innerHTML + 'adOpportunity end time '    + cuePoint.cuePoint.endTime +   "<br />"; */
    });

    kdp.kBind('playerUpdatePlayhead', function( currentTime ){
        if (seekViaChapter || dontStop)
            return;
        var timeMiliSec  = currentTime * 1000;
        var roundedTime = Math.round(timeMiliSec);
        for (var cuePoint in cuepoints) {
            var end_time = cuepoints[cuePoint].endTime;

            if (Math.abs(roundedTime - end_time) <= 30) {
                logDiv.innerHTML = logDiv.innerHTML + 'CuePointEnded = ' + cuepoints[cuePoint].title + " - " + roundedTime + "/" + end_time  +  "<br />";
                kdp.sendNotification("doPause");
                var src = cuepoints[cuePoint].sourceUrl;

                var img = $("<img  src=" + src + " id=step_img" + " style='position: absolute; top: 0; left: 0; width: 100%; height:100%; z-index: 10000000000; cursor: pointer; display: inline-block; '>")
                    .on('click', function(e){
                        $(this).remove();
                        kdp.sendNotification("doPlay");
                    });
                $(this).append(img);
                break;
            }
        }
        //div.innerHTML = div.innerHTML + 'playerUpdatePlayhead ' + roundTime  +  "<br />";
    });

    kdp.kBind('ended', function () {
        logDiv.innerHTML = logDiv.innerHTML + 'ended' +  "<br />";
        initializeValues();
    });

    kdp.kBind('replay', function () {
        logDiv.innerHTML = logDiv.innerHTML + 'replay' +  "<br />";
        initializeValues();
    });


    kdp.kBind('seeked', function () {
        logDiv.innerHTML = logDiv.innerHTML + 'seeked' +  "<br />";
        setTimeout(function(){seekViaChapter = false;}, 1000);
    });
}
