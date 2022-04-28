$(document).ready(function() {
  $("#tweet-text").on("input", function() {
    const $textarea = $(this);
    const characterCount = $textarea.val().length; // getting total amount of characters inputted.
    const $tweetForm = $(this).parent(); // traversing up the DOM to parent element (form).
    const outputCounter = $tweetForm.find(".counter"); //traversing down the DOM to child element (output).
    
    outputCounter.html(140 - characterCount); // change html to render updated character count.
          
    // add class to change text color if max character count is exceeded.
    if (characterCount > 140) {
      outputCounter.addClass('over-count');
      outputCounter.html(140 - characterCount + " (Max character exceeded)");
    } else {
      outputCounter.removeClass('over-count');
    }
  });

});