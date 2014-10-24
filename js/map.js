var map;
function initialize() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(-12.044156, -77.036706),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);