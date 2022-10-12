import createMap from "./createMap";
import myFetch from "./myFetch";

function initMap() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    // myFetch(url).then(userList => {
    //     createMap(userList);
    // });

    const center = {
        lat: 50.452953673096964,
        lng: 30.51429457659543
    }

    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            center,
            zoom: 19,
            //mapTypeId: 'hybrid',
            mapTypeControlOptions: {
                mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
            },
        }
    );

    const marker = new google.maps.Marker({
        position: center,
        map,
        title: 'test',
        icon: 'http://maps.google.com/mapfiles/kml/pushpin/wht-pushpin.png'
    });

    const marker2 = new google.maps.Marker({
        position: {
            lat: 50.45247548848575,
            lng: 30.513379943405067
        },
        map,
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
        content: contentString,
    });

    // marker.addListener("mouseover", () => {
    //     infowindow.open({
    //         anchor: marker,
    //         map,
    //         shouldFocus: false,
    //     });
    // });

    const flightPlanCoordinates = [
        { lat: 50.45188799791832, lng: 30.515718829451973 },
        { lat: 50.452484027539064, lng: 30.514232885793735 },
        { lat: 50.45300149129225, lng: 30.513618659985543 },
        { lat: 50.45325765937262, lng: 30.513991487004485 },
        { lat: 50.45330376947977, lng: 30.514214110332347 },
        { lat: 50.453348171762705, lng: 30.514334809726968 },
    ];

    const flightPath = new google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: "#000000",
        strokeOpacity: 1.0,
        strokeWeight: 5,
    });

    flightPath.setMap(map);
}

window.initMap = initMap;
