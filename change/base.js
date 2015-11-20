console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$("#time").text( Date.now() );

$("input.add").on("change", function makeChange(event) {
	var left = $("input#left").val();
	var right = $("input#right").val();	
	var leftValue = parseInt(left) || 0;
	var rightValue = parseInt(right) || 0;
	var total = leftValue + rightValue;
	$("#total").val(total);	
})
})
