/*
Challenge: Can you stop the forms from submitting?
Why does one button reload the same page and the other redirect to youtube?
--> The first submit doesnt have an action so it doesnt do anything
  and the second submit has an action that tells it to redirect
  to youtube.
*/

console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  
  $("form input").on("click", function handleClick(event)
    {event.preventDefault(); alert("No Submit for You!!");});
});
