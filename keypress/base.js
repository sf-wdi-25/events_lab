console.log("Sanity Check: JS is working!");

$(document).ready(function(){
//.delay(1000) for seconds
//Math.floor(minutes) + ":" + Math.floor(seconds % 60)
  var start;
  var end;
  $(document).ready(function() {
    $(window).on("keypress", function doTheKeypressThing(event) {
    	if (start) {
    		end = Date.now();
    		var minutes = ((end - start) / 1000) / 60;
    		var seconds = (((end - start) / 1000) % 60)
    		if (seconds < 10) {
    			$("#total-time").text(Math.floor(minutes) + ":0" + Math.floor(seconds));
    		} else {
    			$("#total-time").text(Math.floor(minutes) + ":" + Math.floor(seconds));
    		}
    	} else {
    		start = Date.now();
    		console.log("starting to count");
    	}
    });
  });

});