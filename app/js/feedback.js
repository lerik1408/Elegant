$(document).ready(function(){
    console.log($('.feedback'))
    // -670
    position= 0
    $('.next').bind('click',function(){
        position=position-850
        if(position<=-850*3){
            position=0
        }
        $('.gallery').css('left',position + 'px')
    })
    $('.prev').bind('click',function(){
        position=position+850
        if(position>0){
            position=-850*2
        }
        $('.gallery').css('left',position + 'px')
    })
})