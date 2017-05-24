$(function() {
  $.scrollify({
    section : ".section",
    sectionName: "section",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    scrollbars: false
  });

  $('#scroll-down').click(function() {
    $.scrollify.next();
  });

  $('.flip').click(function(){
    $('.cont-flip').toggleClass('flipped');
    return false;
  });
});
