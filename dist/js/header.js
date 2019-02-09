$(document).ready(function(){
    var button = $('.button');
    $('.button').bind('click', function (e) {
        alert(e.target)
        console.log(e.target)
    });
});