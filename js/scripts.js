$(document).ready(function() {
  $(".clickable").click(function(){
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".clickable-history").click(function() {
    $("#history-fadeIn").fadeIn().delay(5000).fadeOut();
  });

});
