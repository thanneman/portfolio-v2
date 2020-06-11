$(document).ready(function() {
  // open side nav
  $('.openbtn').click(function() {
    $('#mySidenav').css('width', '160px');
  });

  // close side nav
  $('.closebtn').click(function() {
    $('#mySidenav').css('width', '0px');
  });

  // auto scroll
  $('.nav-link').click(function() {
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    $('#mySidenav').css('width', '0px');
    $('html, body')
      .stop()
      .animate({ scrollTop: new_position.top }, 500);
    e.preventDefault();
  });

  // // fade in elements
  // $(window).scroll(function() {
  //   // fade in projects, work, skills
  //   $('.project-card, .work-sub, .skills-sub').each(function() {
  //     var bottom_of_object = $(this).offset().top + $(this).outerHeight();
  //     var bottom_of_window = $(window).scrollTop() + $(window).height();
  //     if (bottom_of_window > bottom_of_object) {
  //       $(this).animate({ opacity: '1' }, 1000);
  //     }
  //   });
  // });

  // auto set footer copyright date
  var date = new Date();
  var year = date.getFullYear();
  $('.year').text(year);
});
