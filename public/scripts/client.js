/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
// Fake data taken from initial-tweets.json
  // const data = [
  //   {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": "https://i.imgur.com/73hZDYK.png"
  //     ,
  //     "handle": "@SirIsaac"
  //   },
  //   "content": {
  //     "text": "If I have seen further it is by standing on the shoulders of giants"
  //   },
  //   "created_at": 1461116232227
  //   },
  //   {
  //   "user": {
  //     "name": "Descartes",
  //     "avatars": "https://i.imgur.com/nlhLi3I.png",
  //     "handle": "@rd" },
  //   "content": {
  //     "text": "Je pense , donc je suis"
  //   },
  //   "created_at": 1461113959088
  //  }
  // ]


const renderTweets = function(tweets) {
  const arrayOfTweets = [];
  const tweet_container = $('#tweet-container');
  for (let tweet of tweets){
  //arrayOfTweets.push(createTweetElement(tweet))
  const x = createTweetElement(tweet);
  tweet_container.prepend(x);
}
return arrayOfTweets;
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
}



const createTweetElement = function(tweet) {
  const $tweet =`
      <article>
        <header>
        <h2><img src="${tweet.user.avatars}">${tweet.user.name}</h2>
        <h2 class="alias">${tweet.user.handle}</h2>
        </header>

        <p class="tweet">${tweet.content.text}</p>
        <footer> 
          <p><span id="datetime"></span></p>
          <time data-time="<?=$time?>"></time>
          <div>
          <button type="retweet"><i class="fa fa-retweet" aria-hidden="true"></i></button>
          <button type="like"><i class="fa fa-heart" aria-hidden="true"></i></button>
          <button type="flag"><i class="fa fa-flag" aria-hidden="true"></i></button>
          </div>
        </footer>
      </article>`
return $tweet;
}




const loadTweets= function() {
  $.ajax(
    { url: "/tweets",
      method:"GET",
      dataType: "JSON",
  }).then (function(tweets) {
    $('#tweet-text').empty();
    renderTweets(tweets)
  });
}

// function validateForm() {
//   const check = document.forms["form"]["#tweet-text"].value;
//   if(check === "" || check === null) {
//     alert ("Empty field!");
//     return false;
//   } else if (check.length > 140){
//     alert ("Maximum characters surpassed")
//     return false;
//   } 
  
// }


$('form').on('submit', (event) => {
  event.preventDefault();
  const tweetValidation = $("#tweet-text").val()
  console.log(tweetValidation)
  if (tweetValidation === null || tweetValidation === "") {
    alert("Empty field")
    return false;
  } else if (tweetValidation.length > 140){
    alert("Maximum characters exceeded");
    return false;
  } else {
  alert("THIS WORKS!");
  }



$.ajax ({
   method: "POST",
   url: "/tweets",
   data: $("form").serialize(), 
  }).then(function(response) {
    console.log(response);
    loadTweets();
  })
})

loadTweets();

});
