console.log("Sanity Check: JS is working!");

// click
// - **Challenge**: Can you create a list of all the phrases that you click?
// - Stretch: In addition to listing the phrase I clicked, can you include a timestamp?


$(document).ready(function(){
    $('span').on('click', function listAdder(event) {
    var newPhrase = 'This is what you clicked: ' + $(this).text();
    $('ul'). append('<li>' + newPhrase + '</li>');
  });
});
