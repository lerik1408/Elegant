$(document).ready(function(){
    var a = $('#k');
      $.ajax({
        type: "GET",
        url: "header.html",
        cache:false,
        // data: "data",
        dataType: "html",
        success: function (response) {
          $('body').append(response); 
        }
      });
  });