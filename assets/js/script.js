$(document).ready(function () {
  // Function to set equal height for elements with a specific class
  function setEqualHeight(className) {
    var elements = $('.' + className);
    var maxHeight = 0;

    elements.each(function () {
      maxHeight = Math.max(maxHeight, $(this).height());
    });

    elements.height(maxHeight);
  }

  // Function to handle resizing and apply equal heights if screen width > 800px
  function handleResize() {
    if ($(window).width() > 767) {
      setEqualHeight('story-title');
      setEqualHeight('story-description');
      setEqualHeight('story-content-div');
    } else {
      // Reset heights to 'auto' when screen width is 800px or less
      $('.story-title, .story-description, .story-content-div').css('height', 'auto');
    }
  }

  // Initial call to set heights based on screen width
  handleResize();

  // Re-run height adjustment on window resize
  $(window).resize(handleResize);
});