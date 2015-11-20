console.log("Sanity Check: JS is working!");

$(document).ready(function(){
$("form").submit(function(stop){
        stop.preventDefault();
  $("#time").text( Date.now() );

})

