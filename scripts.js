// This example displays a marker at the center of Australia.
// When the user clicks the marker, an title window opens.

console.log(screen.width);
let pin = './img/map_pin.png';
let zoom = 4.75;
let device = 'standard';

if (screen.width < 768) {
  pin = './img/map_bigPin.png';
  zoom = 4.5;
  device = 'mobile';

}

function locWindow(device, locName, locCity, locText, locGrade, locEmbed) {
  let content = `<div id="content">
      <div id="siteNotice">
      </div>
      <div class="${device} mx-auto">
      <div id="firstHeading" class="firstHeading"><span class="mapPark">${locName} |</span><span class="mapCity"> ${locCity}</span></div>
      <div id="bodyContent">
      <p class="mapRace">Won ${locText}</p>
      <p class="mapCity grade">Grade ${locGrade}</p>
      <iframe width="100%" height="50%" src=${locEmbed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>
      </div>`;
  return content;
}

let locationMarkers = [];
let locationListener = [];
let infowindow = false;

function initMap() {
  let locations = [
    {
      lat: 25.97806,
      lng: -80.13957,
      title: "Gulfstream",
      city: "Hallandale Beach, FL",
      text: "Fasig-Tipton Gulfstream Park Oaks",
      grade: "2",
      embed: "https://www.youtube.com/embed/tBvsfGPrtwQ",
    },
    {
      lat: 34.48401,
      lng: -93.05916,
      title: "Oaklawn",
      city: "Hot Springs, AR",
      text: "Fantasy Stakes",
      grade: "3",
      embed: "https://www.youtube.com/embed/f1gX0hUnfvE",
    },
    {
      lat: 34.13643,
      lng: -118.04116,
      title: "Santa Anita",
      city: "Arcadia, CA",
      text: "Santa Anita Oaks",
      grade: "2",
      embed: "https://www.youtube.com/embed/Gc8MS837mw0",
    },
    {
      lat: 43.07397,
      lng: -73.76797,
      title: "Saratoga",
      city: "Saratoga Springs,  NY",
      text: "Alabama Stakes",
      grade: "1",
      embed: "https://www.youtube.com/embed/mfstGc18Qm0",
    },
    {
      lat: 39.35225,
      lng: -76.67447,
      title: "Pimlico",
      city: "Baltimore, MD",
      text: "Preakness Stakes",
      grade: "1",
      embed: "https://www.youtube.com/embed/vTPXlSXVWbw",
    },
    {
      lat: 34.93643,
      lng: -119.74116,
      title: "Santa Anita",
      city: "Arcadia, CA",
      text: "Beholder Mile Stakes",
      grade: "1",
      embed: "https://www.youtube.com/embed/InMlNXhh-CI",
    },
  ];

  const center = {
    lat: 37.0000,
    lng: -95.0000,
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: zoom,
    center: center,
    mapTypeId: 'hybrid',
  });

  function makeMarkers() {
    for (let i = 0; i < locations.length; i++) {
      locationMarkers[i] = new google.maps.Marker({
        position: locations[i],
        map,
        title: locations[i].title,
        icon: pin
      });
      locationMarkers[i].addListener("click", function() {
        if (infowindow) {
        infowindow.close();
        };
        infowindow = new google.maps.InfoWindow({
          content: locWindow(
            device,
            locations[i].title,
            locations[i].city,
            locations[i].text,
            locations[i].grade,
            locations[i].embed),
        });
        infowindow.open({
          anchor: locationMarkers[i],
          map,
          shouldFocus: false,
        });
      });
    }
  }
  makeMarkers();
}
