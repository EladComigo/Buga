function bindKdpToEvenets(kdp, div)
{

    kdp.kBind('cuePointsReceived', function ( cuePoints, id ) {
        cuepoints = cuePoints;
        for (item in cuepoints) {
                //div.innerHTML = div.innerHTML + 'updatedAt ' +  cuepoints[item][innerItem].updatedAt +  "<br />";
                //div.innerHTML = div.innerHTML + 'cuePointType ' +  cuepoints[item][innerItem].cuePointType +  "<br />";
                div.innerHTML = div.innerHTML + 'cuePointsReceived title ' +  cuepoints[item].title +  "<br />";
                div.innerHTML = div.innerHTML + 'cuePointsReceived startTime ' +  cuepoints[item].startTime +  "<br />";
                div.innerHTML = div.innerHTML + 'cuePointsReceived endTime ' +  cuepoints[item].endTime +  "<br />";
                div.innerHTML = div.innerHTML + 'cuePointsReceived duration ' +  cuepoints[item].duration +  "<br />";
                div.innerHTML = div.innerHTML + '------------------------------- '  +  "<br />";

        }
    });



    kdp.kBind("adOpportunity", function(cuePoint){
        seekToStart = cuePoint.cuePoint.startTime;
        seekToEnd = cuePoint.cuePoint.endTime;

        div.innerHTML = div.innerHTML + 'adOpportunity start time '  +  cuePoint.cuePoint.startTime +   "<br />";
        div.innerHTML = div.innerHTML + 'adOpportunity end time '    + cuePoint.cuePoint.endTime +   "<br />";


    });

    kdp.kBind('playerUpdatePlayhead', function( currentTime ){
        var timeMiliSec  = currentTime * 1000;
        var roundTime = Math.round(timeMiliSec);
        var item, innerItem;

        for (item in cuepoints) {
				var start_time = cuepoints[item].startTime;
                var end_time = cuepoints[item].endTime;
				//div.innerHTML = div.innerHTML + "xxx " + roundTime + "/" +  end_time +  "<br />";

				if (Math.abs(roundTime - end_time) <= 30) {
                    div.innerHTML = div.innerHTML + 'CuePointEnded = ' + cuepoints[item].title + " - " + roundTime + "/" + end_time  +  "<br />";
                    this.sendNotification("doPause");
					var src = cuepoints[item].sourceUrl;
                    
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

    kdp.kBind('KalturaSupport_ThumbCuePointsUpdated', function(e, cuepoints) {
        //div.innerHTML = div.innerHTML + 'KalturaSupport_ThumbCuePointsUpdated ' + cuepoints  +  "<br />";
    });

    kdp.kBind("freezeTimeIndicators", function(e, val){
        //div.innerHTML = div.innerHTML + 'freezeTimeIndicators ' + val  +  "<br />";
    });

    kdp.kBind('seeked', function () {
        div.innerHTML = div.innerHTML + 'seeked' +  "<br />";
    });
}