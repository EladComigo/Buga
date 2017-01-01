var _cuepoints; 

function fillCuePoints(kdp)
{
	 _cuepoints = kdp.evaluate('{mediaProxy.entryCuePoints}');

}

// kdp.sendNotification("doPause")
function bindKdpToEvenets(kdp, div)
{

	kdp.kBind('cuePointsReceived', function ( event, cuePoints ) {
		_cuepoints = kdp.evaluate('{mediaProxy.entryCuePoints}');
		div.innerHTML = div.innerHTML + 'cuePointsReceived ' +  "<br />";
		for (item in _cuepoints) {
			for (innerItem in  _cuepoints[item]) {
				//div.innerHTML = div.innerHTML + 'updatedAt ' +  _cuepoints[item][innerItem].updatedAt +  "<br />";
				//div.innerHTML = div.innerHTML + 'cuePointType ' +  _cuepoints[item][innerItem].cuePointType +  "<br />";
				div.innerHTML = div.innerHTML + 'cuePointsReceived title ' +  _cuepoints[item][innerItem].title +  "<br />";
				div.innerHTML = div.innerHTML + 'cuePointsReceived startTime ' +  _cuepoints[item][innerItem].startTime +  "<br />";
				div.innerHTML = div.innerHTML + 'cuePointsReceived endTime ' +  _cuepoints[item][innerItem].endTime +  "<br />";
				div.innerHTML = div.innerHTML + 'cuePointsReceived duration ' +  _cuepoints[item][innerItem].duration +  "<br />";
			}
		}
	});

	kdp.kBind("adEnd", function(){
		div.innerHTML = div.innerHTML + 'XXXXX ad end' +  "<br />";
	});

	kdp.kBind("adOpportunity", function(cuePoint){
		this.sendNotification("doPause");
		div.innerHTML = div.innerHTML + 'adOpportunity currentTime ' +  cuePoint.cuePoint.startTime +  "<br />";
		var src;
		switch (cuePoint.cuePoint.title){
			case "Point1":
				src = 'images/video.png';
				break;
		}
		var img = $("<img src=" + src + " style='position: absolute; top: 0; left: 0; cursor: pointer;'>")
			.on('click', function(e){
				$(this).remove();
				kdp.sendNotification("doPlay");
			});

		$(this).append(img);
	});

	kdp.kBind('playerUpdatePlayhead', function( currentTime ){
		var timeMiliSec  = currentTime * 1000;
		var roundTime = Math.round(timeMiliSec);
		var item, innerItem;

		for (item in _cuepoints) {
			for (innerItem in  _cuepoints[item]) {
				var end_time = _cuepoints[item][innerItem].endTime;
				div.innerHTML = div.innerHTML + "xxx" + roundTime + "/" +  end_time +  "<br />";
				if (roundTime - 30  >= end_time  ||   roundTime + 30 <= end_time) {
					div.innerHTML = div.innerHTML + 'CuePointEnded = ' + roundTime + "/" + end_time  +  "<br />";
					this.sendNotification("doPause");
					break;
				}

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