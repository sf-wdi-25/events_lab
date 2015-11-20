console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$("span").on("click", function() {
	  var words = $(this).text();
	  $("body").append(words + " ");
	});
})
