console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
//I honestly can't figure this out for the life of me
  $("input.add").change(function add(event) {
  	$("#total") = ($("input#left").val()) + ($("input#right").val());
  });
});
