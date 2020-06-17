$(document).ready(function() {
  $('#tweet-container').hover(function() { 
    $(this).find(".alias").show();
    $( this ).addClass( "hover" );

  }, function() {
      $(this).find(".alias").hide();
      $( this ).removeClass( "hover" );
  });
});
