console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

})

//
// 3. change
//
// Challenge: Some simple addition! Can you get the total to update whenever you update the numbers?
// Bonus: Add a "reset" button that clears all the inputs.


parseInt ( $("#left").val(0) );
parseInt ( $("#right").val(0) );


$(".add").on("keyup click", function something(event) {
          parseInt( $(".add").val() );
          $("#total").val( parseInt( $("#left").val() ) + parseInt( $("#right").val() ) );
       });
