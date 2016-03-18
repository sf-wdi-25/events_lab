console.log("Sanity Check: JS is working!");

$(document).ready(function(){

})

//
// 4. click
//
// Challenge: Can you create a list of all the phrases that you click?
// Stretch: In addition to listing the phrase I clicked, can you include a timestamp?

$("span").on("click", function handleClick(event) {
  $("ul").append("<li>" + $(this).text() + "</li>");
});


$("span").on("click", function handleClick(event) {
  $("ul").append("<li>" + $(this).text() + " at " + event.timeStamp + "</li>");
});

// // 5. keypress
//
// // Challenge: Stop watch. When the user hits spacebar, record their "start" time.
//  When they hit it again, record their "end" time. Then, calculate the total time,
//  and put it on the page.
