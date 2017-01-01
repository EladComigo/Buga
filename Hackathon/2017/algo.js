var _cuepoints; 

function fillCuePoints(kdp)
{
	 _cuepoints = kdp.evaluate('{mediaProxy.entryCuePoints}');
}

// kdp.sendNotification("doPause")
function bindKdpToEvenets(kdp, div)
{
	kdp.kBind("cuePointReached", function(){
		div.innerHTML = div.innerHTML + 'Cue point reached' +  "<br />";
	});
	kdp.kBind("adOpportunity", function(){
		div.innerHTML = div.innerHTML + 'ad opportunity' +  "<br />";
	});
	kdp.kBind("adEnd", function(){
		div.innerHTML = div.innerHTML + 'ad end' +  "<br />";
	});
}