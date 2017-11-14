
$(function () {

$.ajax({
  $.get("https:omdbapi.com?t=titanic").then(function(response){
    console.log(response);
  });

})



})