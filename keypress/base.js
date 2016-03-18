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
      timePassed = endTime - startTime;
      console.log("endTime capture:", endTime);
      console.log("timePassed:", timePassed);
      milliseconds = timePassed % 1000;
      seconds = (((timePassed - milliseconds)/1000) % 60);
      minutes = (seconds - (seconds % 60));
      console.log("Minutes: ", minutes);
      console.log("Seconds: ", seconds);
      console.log("Milliseconds: ", milliseconds);

    }
  }
);

//^^ MY CODE ABOVE ^^
});
