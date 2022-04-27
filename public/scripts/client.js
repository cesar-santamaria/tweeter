/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/* Selectors */

/* Mock Tweet Data */
const tweetObject =  {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further, it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};


/* function that creates new tweet html markup */
const createTweetElement = function({user, content, created_at}) {
  
  const $tweet = `
  <article>
    <header>
      <div class="user-info">
        <i class="fa-solid fa-meteor"></i>
        <h3 class="name">${user.name}</h3>
      </div>
      <h3 class="user">${user.handle}</h3>
    </header>
    <div class="users-tweet">
      <p>${content.text}</p>
    </div>
    <footer>
      <span>${created_at}</span>
      <span>
        <i class="fas fa-bookmark"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </span>
    </footer>
  </article>
  `;

  $(".tweets-container").append($tweet);
};



$(document).ready(function() {
  createTweetElement(tweetObject);
});

