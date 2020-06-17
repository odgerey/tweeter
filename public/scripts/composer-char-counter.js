$(document).ready(function(){
//<--------------- DOING SAME THING WITHOUT JQUERY --------------->
  // const form = document.getElementById("tweet-text")
  // form.addEventListener("keypress", function (event) {
  // const currentLength = event.target.value.length
  // })
//<---------------- JQUERY with KEYPRESS ------------------------->
  // $("#tweet-text").on("keypress", function () {
  // })
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

  const dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
  
  });





