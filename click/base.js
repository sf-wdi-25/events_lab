// 4. click
//- **Challenge**: Can you create a list of all the phrases that you click?
//- Stretch: In addition to listing the phrase I clicked, can you include a timestamp?


console.log("Sanity Check: JS is working!");

$(document).ready(function(){
var clickedItems = [];
  $("span").on("click", function listClicks(event){
        console.log(this);
        $("ul").append("<li>" + $(this).text() + "</li><li>@" + event.timeStamp + "</li>");
});

});
