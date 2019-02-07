function initMap() {
    var position = {lat: 49.836412, lng:24.015147}
    var opt ={
        center: position,
        zoom: 17
    }
    var map = new google.maps.Map(document.getElementById('map'), opt)
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: 'Это место'
    });
    var info =new google.maps.InfoWindow({
        content: '<h3>Печать</h3><p>здесь</p>'
    })
    marker.addListener('click',function(){
        info.open(map,marker);
    })
}