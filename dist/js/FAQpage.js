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
      var FAQ = $.ajax({
        type: "GET",
        url: "FAQ.html",
        cache:false,
        // data: "data",
        dataType: "html",
        success: function (response) {
          $('body').append(response);
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
      $('body').delegate('.button-menu','click',function(){
        $('.modal').toggleClass('hiden')
      })
      $('body').delegate('.close','click',function(){
        $('.modal').toggleClass('hiden')
      })
});