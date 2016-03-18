console.log("Sanity Check: JS is working!");

$(document).ready(function(){
//makes a list of the buttons clicked

  $('span').on('click', function trackClicks(event) {
    $('ul').append('<li> '+ $(this).text() + " at " + event.timeStamp +'</li>');
  });

})
