$(document).ready(function() {
  // event listener on textarea element in main section
  $("#tweet-text").on( "keypress",function() {
    const textarea = $(this);
    const characterCount = textarea.val().length;
    let count = 140;
    if (characterCount) {
      count = count - characterCount;
    }
    console.log(count)
  })

});