console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("span").on("click", function handleClick(event){
      console.log(this);
      $('ul').append('<li>' + $(this).text() + ' - ' + event.timeStamp + '</li>');
  });

})



// ###4. click
// - **Challenge**: Can you create a list of all the phrases that you click?
// - Stretch: In addition to listing the phrase I clicked, can you include a timestamp?
