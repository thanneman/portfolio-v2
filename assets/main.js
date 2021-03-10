$(document).ready(function() {
  // open side nav
  $('.openbtn').click(function() {
    $('#mySidenav').css('margin-right', '0px');
  });

  // close side nav
  $('.closebtn').click(function() {
    $('#mySidenav').css('margin-right', '-160px');
  });

  $('.openbtn').bind('keypress', function(e) {
    if(e.keyCode==13){
      $('#mySidenav').css('margin-right', '0px');
    }
  });

  $('.closebtn').bind('keypress', function(e) {
    if(e.keyCode==13){
      $('#mySidenav').css('margin-right', '-160px');
    }
  });

  // auto scroll
  $('.nav-link').click(function() {
    var jump = $(this).attr('href');
    var new_position = $(jump).offset();
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    $('#mySidenav').css('margin-right', '-160px');
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
