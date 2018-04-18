require(["esri/Map", "esri/views/MapView", "dojo/domReady!"],

    function (Map, MapView) {
        //my code starts here

        var mapConfig = {
            basemap: "dark-gray"

        };
        var myMap = new Map(mapConfig);

        var mapView = new MapView({

            map: myMap,
            container: "viewDiv",
            zoom: 4,
            center: [15, 65] // longitude, latitude

        });

        // my code ends here
    }