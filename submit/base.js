console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $("input").click(function(event){
    event.preventDefault();
  });
  $("input").eq(2).on("click", function() {
    $("body").append('<iframe width="420" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>');
  });

});