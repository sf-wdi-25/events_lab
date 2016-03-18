console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  var $keyClick = false;
  var $startTime = 0;
  var $endTime = 0;
  var $totalTime = 0;

  $(window).on("keypress", function spacebarHit(event){
    // sets startTime and registers spacebar as being hit
    if(($keyClick === false)&&(event.keyCode === 32)){
      $startTime = Date.now();
        console.log("startTime is now: " + $startTime);
      $keyClick = true;
        console.log("keyClick is " + $keyClick);
    // sets endTime and resets spacebar boolean
      $('#total-time').text("00:00");
    }else if($keyClick === true){
      $endTime = Date.now();
        console.log ("endTime is now:" + $endTime);
      $keyClick = false;
        console.log ("keyClick is " + $keyClick);
      $totalTime = ($endTime - $startTime); // computes duration between hits
      var $convertedTime = milliToTime($totalTime);
      $('#total-time').text($convertedTime);
    }
  });

// converts milliseconds into mm:ss format
  function milliToTime (milliseconds) {
    var seconds = addAZero(Math.round(milliseconds / 1000));
    var minutes = addAZero(Math.round(seconds / 60));
    if (seconds >= 60){
      seconds = addAZero((seconds%60));
    }
    return ((minutes) + ":" + (seconds));
  }

// seconds was formatting as 00:n instead of 00:0n for times under ten seconds
  function addAZero (sec) {
    if (sec < 10){
      return ("0" + sec);
    } else {
      return (sec);
    }
  }

});
