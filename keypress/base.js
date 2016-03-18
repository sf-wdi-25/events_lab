//5. keypress
// - **Challenge**: Stop watch. When the user hits spacebar, record their "start" time. When they  hit it again, record their "end" time. Then, calculate the total time, and put it on the page.

console.log("Sanity Check: JS is working!");

$(document).ready(function(){
//vv MY CODE BELOW vv

var startTime = 1458260807525;
console.log("startTime = ", startTime);

$(document).on("keypress",
  function(event){
    if (startTime === 0){
      startTime = Date.now();
      console.log("startTime capture:", startTime);
    } else {
      endTime = Date.now();
      var timePassed = endTime - startTime;
      var mill = Math.floor(timePassed % 100);          //milliseconds in hundreths
      var seconds = Math.floor(timePassed/1000)%60;     //timepassed/(1000ms/per-second)%60seconds-per-min)
      var minutes = Math.floor(timePassed/1000/60)%60;  //timepassed/(1000ms/per-second/60sec-per-min/60min-per-hour)


      console.log("endTime capture:", endTime);
      console.log("timePassed:", timePassed);
      console.log("Minutes: ", minutes);
      console.log("Seconds: ", seconds );
      console.log("Milliseconds: ", mill);

    }
  }
);

//^^ MY CODE ABOVE ^^
});
