console.log("Sanity Check: JS is working!");

$(document).ready(function(){


  $("span").on("click", function (event){
    var itemText = $(this).text() + " at " + Date.now();
    $("ul").append("<li>" + itemText + "</li>")
  })

})

