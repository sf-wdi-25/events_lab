console.log("Sanity Check: JS is working!");

$(document).ready(function(){
 	$("form").on("click", function handleClick(event){
 			event.preventDefault();
});
	$("#time").text( Date.now() );

});


