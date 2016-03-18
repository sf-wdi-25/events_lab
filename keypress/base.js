//could not get this one

var startTime; // undefined at first
var endTime; // undefined
var total; // undefined

$(window).on("keypress", function handleKeypress(event) {

  if (startTime) {
    endTime = Date.now();
    total = (endTime - startTime) / 1000;
    $("#total-time").text(total + " seconds");
  } else {
    startTime = Date.now();
  }

});
