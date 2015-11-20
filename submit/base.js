console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("form").click(function stopIt(event) {
  	event.preventDefault();
	});

  $("#time").text( Date.now() );

});
