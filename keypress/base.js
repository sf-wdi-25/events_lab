console.log("Sanity Check: JS is working!");

$(document).ready(function(){


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
          var totalTime = endTime - startTime;
          if (totalTime > 0) {
            $('span').text(totalTime + ' milliseconds');
          }
        }
    }
 });



 /*pseudo code

 write a code that will append the totalTime to

 */

})
