// The following example creates complex markers to indicate beaches near
// Sydney, NSW, Australia. Note that the anchor is set to (0,32) to correspond
// to the base of the flagpole.
function initialize() {
    // array of lat and lng locations
    let locations = [{
        lat: -33.91722,
        lng: 151.23064,
        info: "This is random text"
    },
    {
        lat: 22.3193,
        lng: 114.1694,
        info: "This is random text"
    },
    {
        lat: 22.3255,
        lng: 114.3532,
        info: "This is random text"
    },
    {
        lat: 23.3532,
        lng: 115.1234,
        info: "This is random text"
    }
    ];


    // window.addEventListener('load',
    //   function() {
    //     for (i = 0; i < locations.length; i++) {
    //       initMap(locations[i], new google.maps.InfoWindow());
    //     }
    //   }, false);

    function initMap() {
        map = new google.maps.Map(document.getElementById(map), {
            zoom: 4,
            center: location
        });
        if (locations) {
            for (var i = 0; i < locations.length; i++) {
                createMarker(locations[i], map, infowindow);
            }
        }
    }

    function createMarker(location, map, infowindow) {
        let marker = new google.maps.Marker({
            position: location,
            map: map
        });
        this.event.addListener(marker, 'click', function (evt) {
            infowindow.setContent(location.info);
            infowindow.open(map, marker);
        })
    }
    initMap();
}