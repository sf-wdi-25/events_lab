console.log("Sanity Check: JS is working!");

// * track space click
// * time stamp 1
// space click
// time stamp 2
// timestamp 2 - timestamp 1
// print to page

$(document).ready(function(){
/////////
////////

  $(window).on("keypress", function spacebarHit(event){
    var $startTime = 0;
    var $endTime = 0;
    var $keyClick = false;
    if(($keyClick === false)&&(event.keyCode === 32)){
      console.log(Date.now());
      $startTime = Date.now();
      console.log("startTime is now: " + $startTime + $keyClick);
      $keyClick = true;
    } else if((event.keycode === 32) && ($keyClick === true)){
      $endTime = Date.now();
      $keyClick = false;
      console.log ("endTime is now:" + $endTime + $keyClick);
    }
  });

/////////
////////
});

// Date.now();

// ###5. keypress
// - **Challenge**: Stop watch. When the user hits spacebar, record their
// "start" time. When they  hit it again, record their "end" time. Then,
// calculate the total time, and put it on the page.
