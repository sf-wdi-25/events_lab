console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$('input').eq(1).remove();

});

$('form').eq(1).append("action", ("<iframe width="640" height="360" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>"));