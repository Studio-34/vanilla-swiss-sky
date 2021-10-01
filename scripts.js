// This example displays a marker at the center of Australia.
// When the user clicks the marker, an title window opens.

function locWindow(locName, locText) {
  let content = `<div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${locName}</h1>
      <div id="bodyContent">
      <p>${locText}</p>
      </div>
      </div>`;
  return content;
}
// const svg = '<?xml version="1.0" encoding="utf-8"?>
// <!-- Generator: Adobe Illustrator 25.4.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
// <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
// 	 viewBox="0 0 1446.8 1176.5" style="enable-background:new 0 0 1446.8 1176.5;" xml:space="preserve">
// <style type="text/css">
// 	.st0{fill:#EC1F27;}
// 	.st1{fill:#025FA9;}
// </style>
// <g>
// 	<path class="st0" d="M1004.1,338.4c-0.9-2.1-2-4-3.2-5.8c-3.1-4.6-7.2-8.3-12.2-11.3c-10.2-6-21-8-32.6-6.1
// 		c-6.3,1-11.9,3.4-16.7,7.2c-11.7-12.5-25.9-22.6-42.7-30.3c-17.4-7.9-36.1-13.4-55.9-16.6c-19.8-3.2-37.4-4.7-52.7-4.7
// 		c-21.1,0-41.7,2.9-61.8,8.7c-20.1,5.8-38,14.3-53.9,25.7c-8,5.7-15.2,12.2-21.6,19.5c-5.5,6.2-10.5,13.1-14.8,20.5
// 		c-0.7,1.2-1.4,2.3-2,3.5c-5,9.1-8.8,19-11.2,29.7c-2.3,10.1-3.4,20.8-3.4,32.3c0,4.7,0.2,9.3,0.7,13.8c0.3,2.9,0.6,5.7,0.8,8.6
// 		c1.5,16.2,6.7,30.9,16.1,44.7c8.4,12.5,18.4,24.6,29.9,36.3c5.1,5.7,10.5,11.2,16.3,16.7c18.2,17.4,38,34,59.4,49.8
// 		c21.4,15.8,41.3,32.1,59.8,49c8.5,7.7,16.4,15.7,23.6,23.7c0,0,0.1,0.1,0.1,0.1c8.7,10.4,16.4,21,23.2,32
// 		c8.5,13.5,14.4,28.1,17.7,43.5c2.1,9.8,3.2,20,3.2,30.5c0,12.7-1.3,24.9-3.9,36.1c-1.8,7.9-4.2,15.5-7.3,22.7
// 		c16.2-5.7,30.9-12.9,44-22.3c15.8-11.3,28.7-25.8,38.4-43.5c9.8-17.7,14.7-38.3,14.7-62c0-23.7-6.1-45.3-18.2-64.8
// 		c-12.1-19.5-27.3-37.9-45.6-55.3c-18.2-17.4-38.2-34.1-59.8-50.2c-6.5-4.8-12.8-9.7-19-14.5c-14.5-11.4-28.2-22.8-41.2-34.5
// 		c-6.3-5.6-12.2-11.4-17.8-17.3c-10.8-11.4-20.3-23.1-28.5-35.3c-8.3-12.3-13.9-25.4-16.9-39.3c0-0.1,0-0.1,0-0.2
// 		c-2.8-13.2-2.3-27,1.5-40c6.9-23.7,26-57.9,79.2-57.9c31.2,0,53.2,16.5,66.2,29.2c12.9,12.6,19.4,26.6,19.4,41.9
// 		c0,10-4.1,19.4-12.3,28.1c-5.7,6-13.6,11-23.8,14.9c-4.5,1.7-9.3,3.2-14.7,4.5c2.7,13.7,9.5,24.5,20.6,32.4
// 		c3.1,2.2,6.4,4.1,9.7,5.7c8.4,4,17.4,6,27.1,6.1l0,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.2,0c0.7,0,1.5,0,2.2,0c0.3,0,0.6,0,0.9,0
// 		c0.6,0,1.2-0.1,1.9-0.1c0.8,0,1.6-0.1,2.4-0.1c0,0,0.1,0,0.1,0c67.8-5,75.2-73.6,75.2-73.6c3-5.1,7.8-8.6,14.6-10.6
// 		c4.7-1.4,10.2-1.5,16.5-0.5c2.8,0.5,5.7,1.2,8.8,2.1C1007.6,353.2,1007.4,345.7,1004.1,338.4z"/>
// 	<path class="st1" d="M825.8,751.9c-0.3-2.9-0.6-5.7-0.8-8.6c-1.5-16.2-6.7-30.9-16.1-44.7c-8.4-12.5-18.4-24.6-29.9-36.3
// 		c-5.1-5.7-10.5-11.2-16.3-16.7c-18.2-17.4-38-34-59.4-49.8c-21.4-15.8-41.3-32.1-59.8-49c-8.5-7.7-16.4-15.7-23.6-23.7
// 		c0,0-0.1-0.1-0.1-0.1c-8.7-10.4-16.4-21-23.2-32c-8.5-13.5-14.4-28.1-17.7-43.5c-2.1-9.8-3.2-20-3.2-30.5c0-12.7,1.3-24.9,3.9-36.1
// 		c1.8-7.9,4.2-15.5,7.3-22.7c-16.2,5.7-30.9,12.9-44,22.3c-15.8,11.3-28.7,25.8-38.4,43.5c-9.8,17.7-14.7,38.3-14.7,62
// 		c0,23.7,6.1,45.3,18.2,64.8c12.1,19.5,27.3,37.9,45.6,55.3c18.2,17.4,38.2,34.1,59.8,50.2c6.5,4.8,12.8,9.7,19,14.5
// 		c14.5,11.4,28.2,22.8,41.2,34.5c6.3,5.6,12.2,11.4,17.8,17.3c10.8,11.4,20.3,23.1,28.5,35.3c8.3,12.3,13.9,25.4,16.9,39.3
// 		c0,0.1,0,0.1,0,0.2c2.8,13.2,2.3,27-1.5,40c-6.9,23.7-26,57.9-79.2,57.9c-31.2,0-53.2-16.5-66.2-29.2
// 		c-12.9-12.6-19.4-26.6-19.4-41.9c0-10,4.1-19.4,12.3-28.1c5.7-6,13.6-11,23.8-14.9c4.5-1.7,9.3-3.2,14.7-4.5
// 		c-2.7-13.7-9.5-24.5-20.6-32.4c-3.1-2.2-6.4-4.1-9.7-5.7c-8.1-3.9-16.9-5.9-26.2-6.1l0.1-0.1c-3,0-5.9,0.1-8.7,0.4
// 		c-0.1,0-0.1,0-0.2,0c-24.7,2.1-41.2,12.6-52.3,25.1c-2.1,2.3-3.9,4.6-5.6,7.1c-14,19.8-16.3,41.4-16.3,41.4
// 		c-3,5.1-7.8,8.6-14.6,10.6c-4.7,1.4-10.2,1.5-16.5,0.5c-2.8-0.5-5.7-1.2-8.8-2.1c-2.7,7.7-2.4,15.3,0.8,22.6c0.9,2.1,2,4,3.2,5.8
// 		c3.1,4.6,7.2,8.3,12.2,11.3c10.2,6,21,8,32.6,6.1c6.1-1,11.4-3.2,16.1-6.7c11.6,12.4,25.7,22.3,42.4,29.9
// 		c17.4,7.9,36.1,13.4,55.9,16.6c19.8,3.2,37.4,4.7,52.7,4.7c21.1,0,41.7-2.9,61.8-8.7c20.1-5.8,38-14.4,53.9-25.7
// 		c8-5.7,15.2-12.2,21.6-19.5c5.5-6.2,10.5-13.1,14.8-20.5c0.7-1.2,1.4-2.3,2-3.5c5-9.1,8.8-19,11.2-29.7c2.3-10.1,3.4-20.8,3.4-32.3
// 		C826.5,761.1,826.2,756.5,825.8,751.9z"/>
// </g>
// </svg>';
let locationMarkers = [];
let locationListener = [];

function initMap() {
  let locations = [
    {
      lat: 43.07397,
      lng: -73.76797,
      title: "Saratoga",
      text: "Winner of the G1 Alabama Stakes",
    },
    {
      lat: 34.13643,
      lng: -118.04116,
      title: "Santa Anita",
      text: "Winner of the G1 Beholder Mile & the G2 Santa Anita Oaks.",
    },
    {
      lat: 39.35225,
      lng: -76.67447,
      title: "Pimlico",
      text: "Swiss Skydiver won the Preakness Stakes.  Only the 6th filly to win in the history of the race.",
    },
    {
      lat: 34.48401,
      lng: -93.05916,
      title: "Oaklawn",
      text: "Winner of the G3 Fantasy Stakes",
    },
    {
      lng: -80.13957,
      title: "Gulfstream",
      text: "Winner of the G3 Fantasy Stakes",
      lat: 25.97806,
    },
  ];
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: locations[3],
  });

  function makeMarkers() {
    for (let i = 0; i < locations.length; i++) {
      locationMarkers[i] = new google.maps.Marker({
        position: locations[i],
        map,
        title: locations[i].title,
        icon: 'https://studio34productions.com/SwissIcon1.png'
      });
      locationMarkers[i].addListener("click", () => {
        locationListener[i] = new google.maps.InfoWindow({
          content: locWindow(locations[i].title, locations[i].text),
        });
        locationListener[i].open({
          anchor: locationMarkers[i],
          map,
          shouldFocus: false,
        });
      });
    }
  }
  makeMarkers();

  // function makeListeners() {
  //     for (let i = 0; i < locations.length; i++) {
  //         locationMarkers[i].addListener("click", () => {
  //             console.log(locations[i])
  //             locationListener[i] = new google.maps.InfoWindow({
  //                 content: contentString
  //             });
  //             locationListener[i].open({
  //                 anchor: locations[i],
  //                 map,
  //                 shouldFocus: false,
  //             })
  //         });
  //     }

  // }
  // makeListeners();
}
