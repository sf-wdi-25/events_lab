console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
$("submit").on("click", function() {
var a = parseInt($("#a").val()); 
var b = parseInt($("#b").val());
var x = parseInt(a) + parseInt(b);
  })
})
