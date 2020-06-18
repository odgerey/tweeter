/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {


//<<----------APPENDS TWEET TO THE TOP OF PAGE && RENDERS IT ------->>
const renderTweets = function(tweets) {
  const tweetContainer = $('#tweet-container');
    for (let tweet of tweets) {
      const twtToTop = createTweetElement(tweet);
      tweetContainer.prepend(twtToTop);
    }
}

//<-------SECURS TEXT FROM CROSS SCRIPT ----------->

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


//<-------TWEET CREATION ELEMENTS----------------->
const createTweetElement = function(tweet) {
  const $tweet =
       `<article class="new-tweet-box">
        <header>
        <h2 class="image"><img src="${tweet.user.avatars}">${escape(tweet.user.name)}</h2>
        <h2 class="alias">${escape(tweet.user.handle)}</h2>
        </header>

        <p class="tweet">${escape(tweet.content.text)}</p>
        <footer> 
          <p>${moment(tweet.created_at, "").fromNow()}</p>
          <div id="user-buttons">
          <button type="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></button>
          <button type="like"><i class="fa fa-heart" aria-hidden="true"></i></button>
          <button type="flag"><i class="fa fa-flag" aria-hidden="true"></i></button>
          </div>
        </footer>
        </article>`
  return $tweet;
}



const loadTweets = function() {
  $.ajax ({ 
      url: "/tweets",
      method:"GET",
      dataType: "JSON",
  })
  .then (function(tweets) {
    $('#tweet-container').empty();
    $('#tweet-text').val('');
    $("#count").text(140);
    renderTweets(tweets);
  });
}

// <<----------- TWEET VALIDATION & REPOST -------------------------->>

$('form').on('submit', (event) => {
  event.preventDefault();
  const tweetValidation = $("#tweet-text").val();
    if (tweetValidation === null || tweetValidation === "") {
      $('#error').fadeIn().text(`*Field is empty`);  
      setTimeout(function() {  
         $('#error').fadeOut("Slow");  
      }, 5000); 
    return false;
    
    } else if (tweetValidation.length > 140) {
      $("#error").fadeIn().text("*Maximum characters exceeded");  
      setTimeout(function() {  
         $('#error').fadeOut("Slow");  
      }, 5000); 
    return false;

    } else {
     console.log("This tweet is posted:", tweetValidation);
    }



  $.ajax ({
    method: "POST",
    url: "/tweets",
    data: $("form").serialize(), 
    })
  .then(function(response) {
    console.log(response);
    $('#tweet-container').empty();
    loadTweets();
  })
})

loadTweets();

});
