console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() + " yr mom" );

  // sets all values to 0
  $("input").val(0);


  $("input").on("click", function doMath(left, right){

    // var $left = $('#left').val();
    // var $right = $('#right').val();
    // var $total = $left + $right;
//    $('#total').val('#left' + '#right');
    $('#total').val (
      $('#left').val() + $('#right').val()
    );
  });

  // $('article').text("Boo!")
  // <input type="number" class="add" id="left"> +
  // <input type="number" class="add" id="right"> =
  // <input type="number" id="total"><br>
});
// set the total box to be the sum of left and right
