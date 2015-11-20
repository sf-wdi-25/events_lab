console.log("Sanity Check: JS is working!");


$(document).ready(function(){

$("span").on("click", function respondToClick (event){
var current_text = $(this).text();
$("ul").append(current_text + "<br>");

	})

})
/*
$("h2") + current_text)
});
//(this).text

$(document).ready(function(){

});

/*
  $("span").on("click", function handleClick(event){
    var itemText = "You Clicked: " + $(this).text() + " at " + Date.now();
    $("ul").append("<li>" + itemText + "</li>")
  })

})




/*$("span").on("click", function handleClick(event){
    //console.log("you chose", this);
};

this does not work
*/

/*
$(".happy").on("click", function respondToClickWithSmileys(){
var current_text = $(this).text()
$(this).text( current_text + " :)" )
})
*/