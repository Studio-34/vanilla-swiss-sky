// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function locWindow(locName, locText) {
    let content =
        `<div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${locName}</h1>
      <div id="bodyContent">
      <p>${locText}</p>
      </div>
      </div>`;
    return content
}

function initMap() {
    const saratoga = {
        lat: 43.07397,
        lng: -73.76797,
        title: "Saratoga",
        text: "Winner of the G1 Alabama Stakes",
    };
    const santaAnita = {
        lat: 34.13643,
        lng: -118.04116,
        title: "Santa Anita",
        text: "Winner of the G1 Beholder Mile & the G2 Santa Anita Oaks.",
    };
    const pimlico = {
        lat: 39.35225,
        lng: -76.67447,
        title: "Pimlico",
        text: "Swiss Skydiver won the Preakness Stakes.  Only the 6th filly to win in the history of the race.",
    };
    const oaklawn = {
        lat: 34.48401,
        lng: -93.05916,
        title: "Oaklawn",
        text: "Winner of the G3 Fantasy Stakes",
    };
    const gulfstream = {
        const gulfstream = {
            lat: 25.97806,
            lng: -80.13957,
            title: "Gulfstream",
            text: "Winner of the G3 Fantasy Stakes",
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: oaklawn,
    });
    const contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        '<div id="bodyContent">' +
        "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
        "sandstone rock formation in the southern part of the " +
        "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
        "south west of the nearest large town, Alice Springs; 450&#160;km " +
        "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
        "features of the Uluru - Kata Tjuta National Park. Uluru is " +
        "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
        "Aboriginal people of the area. It has many springs, waterholes, " +
        "rock caves and ancient paintings. Uluru is listed as a World " +
        "Heritage Site.</p>" +
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
        "(last visited June 22, 2009).</p>" +
        "</div>" +
        "</div>";
    const infowindow = new google.maps.InfoWindow({
        content: locWindow("Santa Anita", "This filly is fast"),
    });
    const santaAnitaMarker = new google.maps.Marker({
        position: santaAnita,
        map,
        title: "Santa Anita",
    });
    const saratogaMarker = new google.maps.Marker({
        position: saratoga,
        map,
        title: "Saratoga",
    });
    const pimlicoMarker = new google.maps.Marker({
        position: pimlico,
        map,
        title: "Pimlico",
    });
    const oaklawnMarker = new google.maps.Marker({
        position: oaklawn,
        map,
        title: "Oaklawn",
    });
    const gulfstreamMarker = new google.maps.Marker({
        position: gulfstream,
        map,
        title: "Gulfstream",
    });

    santaAnitaMarker.addListener("click", () => {
        let infoTest = new google.maps.InfoWindow({
            content: locWindow("Santa Anita", "Winner of the G1 Beholder Mile & the G2 Santa Anita Oaks."),
        });
        infoTest.open({
            anchor: santaAnitaMarker,
            map,
            shouldFocus: false,
        })
    });
    saratogaMarker.addListener("click", () => {
        let infoTest = new google.maps.InfoWindow({
            content: locWindow("Saratoga", "Winner of the G1 Alabama Stakes"),
        });
        infoTest.open({
            anchor: saratogaMarker,
            map,
            shouldFocus: false,
        });
    });
    pimlicoMarker.addListener("click", () => {
        let infoTest = new google.maps.InfoWindow({
            content: locWindow("Pimlico", "Swiss Skydiver won the Preakness Stakes.  Only the 6th filly to win in the history of the race."),
        });
        infoTest.open({
            anchor: pimlicoMarker,
            map,
            shouldFocus: false,
        });
    });
    oaklawnMarker.addListener("click", () => {
        let infoTest = new google.maps.InfoWindow({
            content: locWindow("Oaklawn", "Winner of the G3 Fantasy Stakes"),
        });
        infoTest.open({
            anchor: oaklawnMarker,
            map,
            shouldFocus: false,
        });
    });
    gulfstreamMarker.addListener("click", () => {
        let infoTest = new google.maps.InfoWindow({
            content: locWindow("Gulfstream", "Winner of the G3 Fantasy Stakes"),
        });
        infoTest.open({
            anchor: gulfstreamMarker,
            map,
            shouldFocus: false,
        });
    });
}

