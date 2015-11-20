console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("input.add").change(function sum(event) {
  	$("#total") = ($("input#left").input) + ($("input#right").input)
  });

});
