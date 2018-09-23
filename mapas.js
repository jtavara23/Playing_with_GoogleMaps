
var markers = [
    {
        position: {lat:-8.1120408, lng:-79.028485},
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachfalag.png',
        content: '<h1>Trux</h1>'
    },
    {
        position: {lat:-8.058065, lng:-79.055249},
        content: '<h1>La esperanza</h1>'
    },
    {
        position: {lat:-8.1160, lng:-79.03},
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachfalag.png',
        content: '<h1>Huanchaco</h1>'
    }
]





function initMap(){
    var optionsMap1 ={
        zoom:14,
        center: {lat:-8.11, lng: -79.03}
    };
    
    var mapa1 = new google.maps.Map( document.getElementById('map1'), optionsMap1);
    
    var marker = new google.maps.Marker(
        {position: {lat:-8.1120408, lng:-79.028485},
        map : mapa1
        }
    );

    var optionsMap2 = {
        zoom: 10,
        center: {lat: -12.049, lng: -77.0282}
        //mapTypeId: google.maps.MapTypeId.SATELLITE,
    };

    var mapa2 = new google.maps.Map( document.getElementById('map2'), optionsMap2 );
    
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


