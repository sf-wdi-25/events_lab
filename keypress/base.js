console.log("Sanity Check: JS is working!");

$(document).ready(function(){

var count = 0;


$('body').keyup(function (event) {
	if(event.keyCode == 32) {
		//create switch
	var counterOn = true; 
	} if(counterOn) {
		$("span").text(count++);
	} 
});

})
