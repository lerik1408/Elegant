$(document).ready(function(){
    var header = $.ajax({
        type: "GET",
        url: "header.html",
        cache:false,
        // data: "data",
        dataType: "html",
        success: function (response) {
          $('body').append(response);
        }
      });

      var aboutus = $.ajax({
        type: "GET",
        url: "aboutus.html",
        cache:false,
        // data: "data",
        dataType: "html",
        success: function (response) {
          $('body').append(response);
        }
      });

      var FAQ = $.ajax({
        type: "GET",
        url: "FAQ.html",
        cache:false,
        // data: "data",
        dataType: "html",
        success: function (response) {
          $('.block-2').after(response);
        }
      });

      var contact = $.ajax({
        type: "GET",
        url: "contact.html",
        cache:false,
        // data: "data",
        dataType: "html",
        success: function (response) {
          $('.block-FAQ').after(response);
        }
      });

      var footer = $.ajax({
        type: "GET",
        url: "footer.html",
        cache:false,
        // data: "data",
        dataType: "html",
        success: function (response) {
          $('body').append(response);
        }
      });

  });
