console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

})

$('form').on("click", function handleClick(event) {
event.preventDefault();
});