console.log("Sanity Check: JS is working!");

$(document).ready(function(){

//code below
/*

$(window).on("keypress", function (e) {
  if (e.keyCode === 0) {
    e.preventDefault()
    console.log('Space pressed at' + event.timeStamp)
  }
});

*/


var startTime;
var endTime;
var counter = 0;

 $(window).on("keypress", function recordEnd(event) {

   //When keyPress is false, get a start time
   console.log(event.keyCode);
    if (event.keyCode === 32) {
      counter++;
        if (counter === 1) {
          startTime = Date.now();
        } else {
          endTime = Date.now();
          console.log(endTime);
          var totalTime = endTime - startTime;
          console.log(totalTime > 0, totalTime);
          if (totalTime > 0) {
            $('span').text(totalTime);
            console.log("if works!");
          }
        }
    }
 });



 /*pseudo code

 write a code that will append the totalTime to

 */

})
