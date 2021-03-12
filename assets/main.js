$(document).ready(function() {
  // open side nav
  $('.openbtn').click(function() {
    $('#mySidenav').css('margin-right', '0px');
  });

  // close side nav
  $('.closebtn').click(function() {
    $('#mySidenav').css('margin-right', '-300px');
  });

  // auto scroll
  $('.nav-link').click(function() {
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    // $('.nav-link').removeClass('active');
    // $(this).addClass('active');
    $('#mySidenav').css('margin-right', '-300px');
    $('html, body')
      .stop()
      .animate({ scrollTop: new_position.top }, 500);
    e.preventDefault();
  });

  // auto set footer copyright date
  var date = new Date();
  var year = date.getFullYear();
  $('.year').text(year);
});
