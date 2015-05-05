// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {
  
  var count=10;
    
  var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

  function timer()
  {
    count=count-1;
    $('#countDown').text(count)
    if (count <= 0)
    {
       // clearInterval(counter);
       count = 11;
       return;
    }
    //Do code for showing the number of seconds here
  }

  $('button').on('click', function(event) {
    event.preventDefault();
  
    $.ajax({
      url: '/index',
      type: 'POST',
      data: {count: count},
    })
    .done(function(data) {
      $('#history').append('<p>'+data);
    });  
  });
});