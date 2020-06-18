$(document).ready(function() {
  $('#tweet-container').hover(function() { 
    $( this ).addClass( "hover" );
    $(this).find(".alias").show();
    

  }, function() {
      $( this ).removeClass( "hover" );
      $(this).find(".alias").hide();
  });
});
