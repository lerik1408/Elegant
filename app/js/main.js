$(document).ready(function(){
    var a = $.ajax({
        type: "GET",
        url: "header.html",
        cache:false,
        // data: "data",
        dataType: "html",
        success: function (response) {
          $('body').append(response);
        }
      });
      var b = $.ajax({
        type: "GET",
        url: "aboutus.html",
        cache:false,
        // data: "data",
        dataType: "html",
        success: function (response) {
          $('body').append(response);
        }
      });
  });
