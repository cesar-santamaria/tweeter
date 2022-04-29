$(document).ready(function() {

  /* Render tweets and append to HTML */
  const renderTweets = function(tweetsDB) {
    const $tweetsContainer = $("#tweets-container");
    let $styledTweet = '';

    for (const tweet of tweetsDB) {
      $styledTweet = createTweetElement(tweet);
      $tweetsContainer.append($styledTweet);
    }
  };

  /* Creates new tweet into HTML elements */
  const createTweetElement = function({user, content, created_at}) {
    /* timeago library to format time */
    const formatTime = timeago.format(created_at);

    /* Selectors */
    const $article = $("<article>");
    const $header = $("<header>");
    const $userInfo = $("<div>").addClass("user-info");
    const $userAvatar = $("<img>").attr("src",`${user.avatars}`);
    const $username = $("<h3>").addClass("name").text(`${user.name}`);
    const $userHandle = $("<h3>").addClass("user").text(`${user.handle}`);
    const $userTweetDiv = $("<div>").addClass("user-tweet");
    const $userTweet = $("<p>").text(`${content.text}`);
    const $tweetFooter = $("<footer>");
    const $timeOfTweet = $("<span>").text(`${formatTime}`);
    const $socialIconDiv = $("<div>");
    const $bookmarkIcon = $("<i>").addClass("fas fa-bookmark");
    const $retweetIcon = $("<i>").addClass("fas fa-retweet");
    const $heartIcon = $("<i>").addClass("fas fa-heart");

    /* Apending HTML elements to form new tweet structure. */
    $article.append($header, $userTweetDiv, $tweetFooter);
    $header.append($userInfo, $userHandle);
    $userInfo.append($userAvatar, $username);
    $userTweetDiv.append($userTweet);
    $tweetFooter.append($timeOfTweet, $socialIconDiv);
    $socialIconDiv.append($bookmarkIcon, $retweetIcon, $heartIcon);
    
    return $article;
  };
  renderTweets([]);

  //Ajax Async GET request
  const fetchTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function(data) {
        $("#tweets-container").empty();
        renderTweets(data);
      });
  };
  fetchTweets();

  $(".tweet-form").on("submit", function(event) {
    event.preventDefault();

    const $textarea = $("#tweet-text");
    const characterCount = $textarea.val().length;
    const $errorMessage = $("#error-message");

    if ($textarea.val() === "" || $textarea.val() === null || characterCount > 140) {
      // Animation for dynamic alert message
      $("#error-message").slideDown("slow", function() {
        $errorMessage.removeAttr("hidden");
      });
      return;
    }
    
    //Ajax Async POST request
    const data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: '/tweets/',
      data: data,
    }).then(()=>{
      fetchTweets();
    });
  });

  $(".tweet-form").on("input", function() {
    // applying hidden to animation when validation erros are not found
    $("#error-message").slideUp("slow", function() {
      const $textarea = $("#tweet-text");
      const characterCount = $textarea.val().length;
      const $errorMessage = $("#error-message");
      if (characterCount < 140) {
        $errorMessage.attr("hidden",true);
      }
    });
  });
});

