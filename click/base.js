console.log("Sanity Check: JS is working!");

$('#imperatives span').on("click", function handleClick(event){

      $('#imperatives ul').append("<li>''#imperatives'</li>");
      console.log(this);
});
