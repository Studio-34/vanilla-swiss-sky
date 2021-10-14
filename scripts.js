// This example displays a marker at the center of Australia.
// When the user clicks the marker, an title window opens.

function locWindow(locName, locText, locEmbed) {
  let content = `<div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${locName}</h1>
      <div id="bodyContent">
      <p>${locText}</p>
      <iframe width="100%" height="50%" src=${locEmbed} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
      lat: 43.07397,
      lng: -73.76797,
      title: "Saratoga",
      text: "Winner of the G1 Alabama Stakes",
      embed: "https://www.youtube.com/embed/mfstGc18Qm0",
    },
    {
      lat: 34.13643,
      lng: -118.04116,
      title: "Santa Anita",
      text: "Winner of the G1 Beholder Mile",
      embed: "https://www.youtube.com/embed/InMlNXhh-CI",
      link: "https://www.youtube.com/embed/Gc8MS837mw0",
    },
    {
      lat: 34.63643,
      lng: -119.54116,
      title: "Santa Anita",
      text: "Winner of the G2 Santa Anita Oaks.",
      embed: "https://www.youtube.com/embed/Gc8MS837mw0",
    },
    {
      lat: 39.35225,
      lng: -76.67447,
      title: "Pimlico",
      text: "Swiss Skydiver won the Preakness Stakes.  Only the 6th filly to win in the history of the race.",
      embed: "https://www.youtube.com/embed/vTPXlSXVWbw",
    },
    {
      lat: 34.48401,
      lng: -93.05916,
      title: "Oaklawn",
      text: "Winner of the G1 Apple Blossom Handicap",
      embed: "https://www.youtube.com/embed/NaJPFz6brH0",
    },
    {
      lat: 25.97806,
      lng: -80.13957,
      title: "Gulfstream",
      text: "Winner of the G3 Fantasy Stakes",
      embed: "https://www.youtube.com/embed/tBvsfGPrtwQ",
    },
  ];

  const center = {
    lat: 37.0000,
    lng: -95.0000,
  };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: center,
  });

  function makeMarkers() {
    for (let i = 0; i < locations.length; i++) {
      locationMarkers[i] = new google.maps.Marker({
        position: locations[i],
        map,
        title: locations[i].title,
        icon: '/img/map_pin.png'
      });
      locationMarkers[i].addListener("click", function() {
        if (infowindow) {
        infowindow.close();
        };
        infowindow = new google.maps.InfoWindow({
          content: locWindow(
            locations[i].title,
            locations[i].text,
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
