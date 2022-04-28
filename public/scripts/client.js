$(document).ready(function() {
  /* Mock Tweet Data */
  const tweetsDB = [];

  /* function that renders tweets from DB, and appends to HTML index  */
  const renderTweets = function(tweetsDB) {
    const $tweetsContainer = $("#tweets-container");
    let $styledTweet = '';

    for (const tweet of tweetsDB) {
      $styledTweet = createTweetElement(tweet);
      $tweetsContainer.append($styledTweet);
    }
  };

  /* function that creates new tweet elements in HTML markup */
  const createTweetElement = function({user, content, created_at}) {
    /* timeago library to format time */
    const formatTime = timeago.format(created_at);

    /* Selectors */
    const $article = $("<article>");
    const $header = $("<header>");
    const $userInfo = $("<div>").addClass("user-info");
    const $userIcon = $("<i>").addClass("fa-solid fa-meteor");
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
    $userInfo.append($userIcon, $username);
    $userTweetDiv.append($userTweet);
    $tweetFooter.append($timeOfTweet, $socialIconDiv);
    $socialIconDiv.append($bookmarkIcon, $retweetIcon, $heartIcon);
    
    return $article;
  };
  renderTweets(tweetsDB);

  const fetchTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then(function(data) {
        console.log('Success: ', data);
        renderTweets(data);
      });
  };
  fetchTweets();

  $(".tweet-form").on("submit", function(event) {
    event.preventDefault();

    const $textarea = $("#tweet-text");
    const characterCount = $textarea.val().length;
    if ($textarea.val() === "" || $textarea.val() === null) return alert("Tweet can not be empty");
    if (characterCount > 140) return alert("Tweet must be less than 140 characters");

    const data = $(this).serialize();
    $.ajax({
      type: "POST",
      url: '/tweets/',
      data: data,
    });
  });
});

