prompt("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $("form").on("click", function stop(event){
  	event.preventDefault();
  })
  });
