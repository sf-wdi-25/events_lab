console.log("Sanity Check: JS is working!");

$(document).ready(function(){

})


// // 5. keypress
//
// // Challenge: Stop watch. When the user hits spacebar, record their "start" time.
//  When they hit it again, record their "end" time. Then, calculate the total time,
//  and put it on the page.

// var start = event.timeStamp
//
// $(window).on("keypress", function(event) {
//   $("h2").append("<li>" + event.timeStamp + "</li>");
// });




$(window).on("keypress", function(event) {
  (new Date).getTime();
});


var startTime
var endTime
var timeDiff

$(window).on("keypress", function(event){
   if(event.which === 32){
   } console.log(event.timeStamp);
});
