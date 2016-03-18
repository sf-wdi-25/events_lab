/*
Challenge: Stop watch. When the user hits spacebar, record their "start" time.
When they hit it again, record their "end" time. Then, calculate the total time, and put it on the page.

notes: * this code works for every keypress and not specifically for spacebar
       * I wasnt' able to display the time in 00:00 format
*/

console.log("Sanity Check: Hi there JS is working!");

$(document).ready(function(){

  var timeStart;
  var timeEnd;
  var keyPressCounter = 0;
  var diff;

  $(document).on("keypress", function handleClick(event)
    {
      if(keyPressCounter===0){
        //first keypress
        timeStart = event.timeStamp;
        keyPressCounter++;
      } else if (keyPressCounter===1) {
        //second keypress
        timeEnd = event.timeStamp;
        keyPressCounter=0;
        //update the stopwatch
        //diff = Math.round(((timeEnd - timeStart)/1000)*100)/100;
        diff= Math.floor((timeEnd - timeStart)/1000) + ":" + Math.floor(((timeEnd - timeStart)/1000 - Math.floor((timeEnd - timeStart)/1000))*100);
        $("#total-time").text(diff + " Seconds");
      }
    });

});
