var _cuepoints; 

function fillCuePoints(kdp)
{
	 _cuepoints = kdp.evaluate('{mediaProxy.entryCuePoints}');

}

// kdp.sendNotification("doPause")
function bindKdpToEvenets(kdp, div)
{
	kdp.kBind('durationChange', function (event, duration) {
		_cuepoints = kdp.evaluate('{mediaProxy.entryCuePoints}');
		div.innerHTML = div.innerHTML + 'durationChange ' + event.newValue * 1000 +  "<br />";
	});

	kdp.kBind("cuePointReached", function(){
		div.innerHTML = div.innerHTML + 'Cue point reached' +  "<br />";
	});
	kdp.kBind("adOpportunity", function(){
		div.innerHTML = div.innerHTML + 'ad opportunity' +  "<br />";
	});
	kdp.kBind("adEnd", function(){
		div.innerHTML = div.innerHTML + 'ad end' +  "<br />";
	});
	kdp.kBind('seeked', function () {
		div.innerHTML = div.innerHTML + 'seeked' +  "<br />";
	});

	kdp.kBind('playerUpdatePlayhead', function( currentTime ){
		var timeMiliSec  = currentTime * 1000;
		var roundTime = Math.round(timeMiliSec);
		var item, innerItem;

		for (item in _cuepoints) {

			for (innerItem in  _cuepoints[item]) {
				//div.innerHTML = div.innerHTML + 'updatedAt ' +  _cuepoints[item][innerItem].updatedAt +  "<br />";
				//div.innerHTML = div.innerHTML + 'cuePointType ' +  _cuepoints[item][innerItem].cuePointType +  "<br />";
				div.innerHTML = div.innerHTML + roundTime + "/" +  _cuepoints[item][innerItem].endTime +  "<br />";
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
}