$(document).ready(function(){
  function makePage(url, target){
    $.ajax({
      type: "GET",
      url: url,
      cache:false,
      dataType: "html",
      success: function (response) {
        $(target).append(response);
      }
    });
  }
  
  var header = makePage("header.html",'#targetHead');
  var FAQ =makePage("FAQ.html",'#targetFAQ');
  var footer = makePage('footer.html','#targetFooter');

      $('body').delegate('.button-menu','click',function(){
        $('.modal').toggleClass('hiden')
      })
      $('body').delegate('.close','click',function(){
        $('.modal').toggleClass('hiden')
      })
});