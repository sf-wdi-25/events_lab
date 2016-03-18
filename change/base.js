console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() + " yr mom" );

  // sets all values to 0
  $("input").val(0);
  
  $("input").on("change", function doMath(l, r){
    // grabs values of inputs
    var left = $('#left').val();
    var right = $('#right').val();
    // parses from string to integer
    var rParsed = parseInt(right);
    var lParsed = parseInt(left);
    // computes total
    $('#total').val (
      rParsed + lParsed);
  });
});
