/*
Challenge: Can you create a list of all the phrases that you click?
*/


console.log("Sanity Check: JS is working!");

$(document).ready(function(){
  var phraseArr=[];
  var i=0;
  $("span").on("click", function handleClick(event){
  phraseArr[i]=$("span").text();});
  $("h2").on("click", function handleClick(event){
  alert("You clicked on the following phrases: " + phraseArr);});


});
