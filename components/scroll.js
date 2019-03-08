let yourNavigation = $('.header');
stickyDiv = 'sticky';
yourHeader = $('.splash').height();

$(window).scroll(function() {
  if ($(this).scrollTop() > yourHeader) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});
