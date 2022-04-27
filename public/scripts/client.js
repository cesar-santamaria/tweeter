$(document).ready(function() {

  /* Mock Tweet Data */
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
  /* function that creates new tweet html markup */
  const createTweetElement = function(tweet) {
    
    /* Selectors */
    const $tweetsContainer = $("#tweets-container");
    const $article = $("<article>");
    const $header = $("<header>");
    const $userInfo = $("<div>").addClass("user-info");
    const $userIcon = $("<i>").addClass("fa-solid fa-meteor");
    const $username = $("<h3>").addClass("name").text("Newton");
    const $userHandle = $("<h3>").addClass("user").text("@SirIsaac");
    const $userTweetDiv = $("<div>").addClass("user-tweet");
    const $userTweet = $("<p>").text("If I have seen further, it is by standing on the shoulders of giants.");
    const $tweetFooter = $("<footer>");
    const $timeOfTweet = $("<span>").text("10 days ago");
    const $socialIconDiv = $("<div>");
    const $bookmarkIcon = $("<i>").addClass("fas fa-bookmark");
    const $retweetIcon = $("<i>").addClass("fas fa-retweet");
    const $heartIcon = $("<i>").addClass("fas fa-heart");

    /* Apending HTML elements to form new tweet structure. */
    $tweetsContainer.append($article);
    $article.append($header, $userTweetDiv, $tweetFooter);
    $header.append($userInfo, $userHandle);
    $userInfo.append($userIcon, $username);
    $userTweetDiv.append($userTweet);
    $tweetFooter.append($timeOfTweet, $socialIconDiv);
    $socialIconDiv.append($bookmarkIcon, $retweetIcon, $heartIcon);
  };
  createTweetElement(data);
});

