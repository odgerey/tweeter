$(document).ready(function(){

//<-----------------JQUERY---------------------------------------->  
$('#tweet-text').on("input", function(){
    const maxLength = 140
    $("#count").text(maxLength)
    const count = $('#count')
    const currentLength = $(this).val().length;
    if (currentLength > maxLength) {
       count.addClass('red')
    } else {
      count.removeClass('red');
    }
      count.text(maxLength - currentLength)

  });  
});





