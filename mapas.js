
var markers = [
    {
        name: 'Trujillo', 
        label: 'T',
        position: {lat:-8.1120408, lng:-79.028485},
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>Capital of La Libertad</h1>'
    },
    {
        name: 'La Esperanza',
        position: {lat:-8.058065, lng:-79.055249},
        content: '<h1>La Esperanza Disctrict</h1>'
    },
    {
        name: 'Huanchaco District',
        position: {lat:-8.086244, lng:-79.092896},
        label: 'H',
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>Huanchaco</h1>'
        
    },
    {
        name: 'Lima, Peru',
        position: {lat: -12.049, lng: -77.0282},
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h1>Capital of Peru</h1>'
    }
]

function createMarker(marker, mapa, draggable_st=false){
    return new google.maps.Marker({
        position: marker.position,
        map: mapa,
        icon: marker.icon,
        shape: marker.shape,
        title: marker.name,
        label: marker.label,
        draggable: draggable_st
    });
}


function initMap(){
    var charac_Map1 ={
        zoom:12,
        center: {lat:-8.11, lng: -79.03}
    };

    var charac_Map2 = {
        zoom: 10,
        center: {lat: -12.049, lng: -77.0282}
        //mapTypeId: google.maps.MapTypeId.SATELLITE,
    };

    var mapa1 = new google.maps.Map( document.getElementById('map1'), charac_Map1);
    var mapa2 = new google.maps.Map( document.getElementById('map2'), charac_Map2 );

    createMarker(markers[0],mapa1);
    createMarker(markers[1],mapa1);
    createMarker(markers[2],mapa1,true);
    createMarker(markers[3],mapa2);

    
    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, mapa2);
    });


}


function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        }
        else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}


