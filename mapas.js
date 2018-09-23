
var markers = [
    {
        name: 'Trujillo', 
        label: 'T',
        position: {lat:-8.1120408, lng:-79.028485},
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h4>Capital of La Libertad</h4>'
    },
    {
        name: 'La Esperanza',
        position: {lat:-8.058065, lng:-79.055249},
        content: '<h4>La Esperanza Disctrict</h4>'
    },
    {
        name: 'Huanchaco District',
        position: {lat:-8.086244, lng:-79.092896},
        label: 'H',
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h4>Huanchaco</h4>'
        
    },
    {
        name: 'Lima, Peru',
        position: {lat: -12.049, lng: -77.0282},
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<h4>Capital of Peru</h4>'
    }
]

function createMarker(marker, mapa, draggable_st=false){
    return new google.maps.Marker({
        position: marker.position,
        map: mapa,
        content: marker.content,
        icon: marker.icon,
        shape: marker.shape,
        title: marker.name,
        label: marker.label,
        draggable: draggable_st
    });
}

function createInfoWindow(marker){
    return new google.maps.InfoWindow({
        content :marker.content,
        maxWidth: 500
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


    created_markers = [];
    created_markers.push(createMarker(markers[0],mapa1));
    created_markers.push(createMarker(markers[1],mapa1));
    created_markers.push(createMarker(markers[2],mapa1,true));
    created_markers.push(createMarker(markers[3],mapa2));

    created_markers.forEach(function(marker){
        marker.addListener('click', function(){
            //console.log(marker.content);
            createInfoWindow(marker).open(marker.map, marker);
        });
    });


    


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


