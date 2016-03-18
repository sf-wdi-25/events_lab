console.log("Sanity Check: JS is working!");
//choose listener(spacebar) code == 32
//an event listener on keypress event
//which triggers a stopWatcher function
//inside that function start the watch
//otherwise when user presses the spacebar , stopwatch stops

// var startTime; // undefined
// var endTime; // undefined
// var totalTime; // undefined

$(document).ready(function(){
  var startTime;
  var endTime;
  var totalTime;

  $(window).on("keypress", function stopWatcher(event) {
    if (startTime) {
      endTime = Date.now();
      totalTime = (endTime - startTime) / 1000;
      $('#total-time').text( totalTime + " in seconds" );
    } else {
      startTime = Date.now();
    }
  });
});

//MAYBE if there is time
//$(window).keypress(function(event){
// if (event.keyCode == 32) {
//   console.log("hello");
// }
// }).keydown(function(event) {
// if (event.keyCode == 32) {
//   console.log("stop");
