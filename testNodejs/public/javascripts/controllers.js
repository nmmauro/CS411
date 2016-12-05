/**
 * Created by kishanpatel on 11/7/16.
 */

angular.module('indexApp', []).
controller('indexController', function($scope, $http) {
    $scope.result = "hello";
    $scope.city = "What's Trending?";
    $scope.help = "Click on a pin to see what's trending at that location.";

    var lookupLocation;
    var locations = [];

    var map;

    var username;
    var password;
    var loggedIn = false;

    var markers = [];
    var woeids = [];

    //this function IS being called
    $scope.initMap = function() {
        loggedIn = false;
        console.log("this function is being called");
        // Console.log("initMap");
        var key = "";
        var async = "";
        var defer = "";
        var src = "https://maps.googleapis.com/maps/api/js?key=";
        var center = {lat: 40.7128, lng: -74.0059};
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: center,
            styles: [
                {
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#bdbdbd"
                        }
                    ]
                },
                {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "poi.business",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#757575"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dadada"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#616161"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e5e5e5"
                        }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#c9c9c9"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#157f9f"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#9e9e9e"
                        }
                    ]
                }
            ]
        });

        var bostonMarker = addMarker(42.3601, -71.0589, map, "Boston", 2367105); //marker for Boston

        var image = 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Marker.png';
        console.log(image)

        //this function will add a marker to the map
        function addMarker(lat, long, map, label, woeid) {
            var marker = new google.maps.Marker({
                position: {lat: parseFloat(lat), lng: parseFloat(long)},
                map: map,
                label: label,
                icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Marker.png',
                optimized: false
            });
            //get twitter trend for location based on WOEID (where on earth id)
            google.maps.event.addListener(marker, 'click', function() {
                $http.post('http://localhost:3000/', {woeid: woeid})
                    .then(function(response) {
                        map.setZoom(6);
                        map.setCenter(marker.getPosition());
                        var trends = response.data;
                        var queries = [];
                        for (var i = 0; i < trends.length; i++) {
                            if (trends[i][0] == "#") {
                                var temp = trends[i].substring(1);
                                queries[i] = "%23" + temp;
                            }
                            else {
                                queries[i] = trends[i];
                            }
                        }
                        console.log(response.data[0]);
                        var city = label;
                        console.log(trends);
                        $scope.help = "";
                        $scope.city = "Trending in " + city;
                        //trends
                        $scope.trends = [
                            {trend: trends[0]},
                            {trend: trends[1]},
                            {trend: trends[2]},
                            {trend: trends[3]},
                            {trend: trends[4]},
                            {trend: trends[5]},
                            {trend: trends[6]},
                            {trend: trends[7]},
                            {trend: trends[8]},
                            {trend: trends[9]}
                        ];
                        //urls to link to
                        $scope.queries = [
                            {query: queries[0]},
                            {query: queries[1]},
                            {query: queries[2]},
                            {query: queries[3]},
                            {query: queries[4]},
                            {query: queries[5]},
                            {query: queries[6]},
                            {query: queries[7]},
                            {query: queries[8]},
                            {query: queries[9]}
                        ];
                    });
            });
            markers.push(marker);
            woeids.push(woeid);
            return marker;
        }

        //gets coordinates based on search query, and then creates a marker
        $scope.getCoordinates = function() {
            console.log("getting coordinates");
            var latval;
            var longval;
            var geocoder = new google.maps.Geocoder();
            var woeidval;
            lookupLocation = $scope.location_searched;
            geocoder.geocode( { 'address': lookupLocation}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK)
                {
                    //var text = $scope.location_searched;
                    latval = results[0].geometry.location.lat();
                    longval = results[0].geometry.location.lng();
                    console.log(lookupLocation, latval, longval);
                    $http.post('http://localhost:3000/woeid', {lookupLocation: lookupLocation})
                        .then(function(response) {
                            woeidval = response.data;
                            console.log(woeidval);
                            var marker = addMarker(latval, longval, map, lookupLocation, woeidval);
                            google.maps.event.trigger(marker, 'click');
                            console.log(loggedIn);

                            //saving locations to user account
                            if (loggedIn) {
                                $http.post('http://localhost:3000/addLocation', {username: username, password: password, location: lookupLocation,
                                    latitude: latval, longitude: longval, woeid: woeidval})
                                    .then(function(response) {
                                        console.log(response);
                                    });
                            }
                        })
                }
            })


        };

        $scope.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDjj7_B6dfemXryFJbD_u7kA9HfvtEUWcI"
        console.log($scope.src);

        $scope.getUser = function() {
            console.log("getUser()");
            username = $scope.username;
            password = $scope.password;

            $http.post('http://localhost:3000/login', {username: username, password: password})
                .then(function(response) {
                    if (response.data != "user does not exist") {
                        loggedIn = true;
                        $scope.message = "Logged in";
                        if (response.data['latitudes'] != undefined) {
                            for (var i = 0; i < response.data['latitudes'].length; i++) {
                                var marker = addMarker(response.data['latitudes'][i], response.data['longitudes'][i], map, response.data['locations'][i], response.data['woeids'][i]);
                            }
                        }
                    }
                    else {
                        $scope.message = "Invalid credentials";
                    }
                });
        };

        //register button press
        $scope.createUser = function() {
            console.log("createUser()");
            var username = $scope.username;
            var password = $scope.password;

            var users;

            $http.post('http://localhost:3000/register', {username: username, password: password})
                .then(function(response) {
                    if (response.data == "user exists") {
                        $scope.message = "This user already exists";
                    }
                    else {
                        $scope.message = "Success";
                        loggedIn = true;
                    }
                });
        }
    };
});

