/**
 * Created by kishanpatel on 11/7/16.
 */

angular.module('indexApp', []).
    controller('indexController', function($scope, $http) {
        $scope.result = "hello";
    $scope.city = "What's Trending?"
    $scope.help = "Click on a pin to see what's trending at that location."

    var lookupLocation;
    var locations = [];

    var map;

    var username;
    var password;
    var loggedIn = false;

    var markers = [];
    var woeids = [];
    //based on what you search for, this function will return its lat/long values


        //this function IS being called
        $scope.initMap = function() {
            console.log("this function is being called")
            // Console.log("initMap");
            var key = "";
            var async = "";
            var defer = "";
            var src = "https://maps.googleapis.com/maps/api/js?key="
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

            //USA Markers
            var bostonMarker = addMarker(42.3601, -71.0589, map, "Boston", 2367105); //marker for Boston
            //var newYorkMarker = addMarker(40.7128, -74.0059, map, "New York", 2459115);


            var image = 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Marker.png'
            console.log(image)

            function addMarker(lat, long, map, label, woeid) {
                var marker = new google.maps.Marker({
                    position: {lat: parseFloat(lat), lng: parseFloat(long)},
                    map: map,
                    label: label,
                    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Marker.png',
                    optimized: false
                });
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
                                if (loggedIn) {
                                    $http.post('http://localhost:3000/addLocation', {username: username, password: password, location: lookupLocation, latitude: latval,
                                        longitude: longval, woeid: woeidval})
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
                            $scope.message = "Logged in";
                            loggedIn = true;
                            if (response.data['latitudes'] != undefined) {
                                for (var i = 0; i < response.data['latitudes'].length; i++) {
                                    console.log("lattiddddee", response.data.latitudes[i]);
                                    var marker = addMarker(response.data['latitudes'][i], response.data['longitudes'][i], map, response.data['locations'][i], response.data['woeids'][i]);
                                }
                                loggedIn = false;
                            }
                        }
                        else {
                            $scope.message = "Invalid credentials";
                        }
                    });


            }

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

        // $scope.createUser = function() {
        //     var username = "";
        //     var password = "";
        //     username = $scope.username;
        //     password = $scope.password;
        //     console.log(username);
        //     console.log(password);
        //     //send username and password to index.js
        //
        // }




    });



// var losAngelesMarker = addMarker(34.052234, -118.243685, map, "Los Angeles", 2442047);
// var miamiMarker = addMarker(25.761680, -80.191790, map, "Miami", 2450022);
// var newOrleansMarker = addMarker(29.951066, -90.071532, map, "New Orleans", 2458833);
// var providenceMarker = addMarker(41.823989, -71.412834, map, "Providence", 2477058);
// var chicagoMarker = addMarker(41.878114, -87.629798, map, "Chicago", 2379574);
// var houstonMarker = addMarker(29.760427, -95.369803, map, "Houston", 2424766);
// var portlandMarker = addMarker(45.523062, -122.676482, map, "Portland", 2475687);
// var sacramentoMarker = addMarker(38.581572, -121.494400, map, "Sacramento", 2486340);
// var stLouisMarker = addMarker(38.610302, -90.412518, map, "St Louis", 2486982);
// var sanFranciscoMarker = addMarker(37.774929, -122.419416, map, "San Francisco", 2487956);
// var minneapolisMarker = addMarker(44.977753, -93.265011, map, "Minneapolis", 2452078);
// var nashvilleMarker = addMarker(36.162664, -86.781602, map, "Nashville", 2457170);
// var lasVegasMarker = addMarker(36.114707, -115.172850, map, "Las Vegas", 2436704);
// var denverMarker = addMarker(39.739236, -104.990251, map, "Denver", 2391279);
// var cincinnatiMarker = addMarker(39.103118, -84.512020, map, "Cincinnati", 2380358);
// var baltimoreMarker = addMarker(39.290385, -76.612189, map, "Baltimore", 2358820);
// var richmondMarker = addMarker(37.540725, -77.436048, map, "Richmond", 2480894);
// var sanAntonioMarker = addMarker(29.424122, -98.493628, map, "San Antonio", 2487796);
// var pittsburghMarker = addMarker(40.440625, -79.995886, map, "Pittsburgh", 2473224);
// var orlandoMarker = addMarker(28.538335, -81.379236, map, "Orlando", 2466256);
// var detroitMarker = addMarker(42.331427, -83.045754, map, "Detroit", 2391585);
// var indianapolisMarker = addMarker(39.768403, -86.158068, map, "Indianapolis", 2427032);
// var milwaukeeMarker = addMarker(43.038902, -87.906474, map, "Milwaukee", 2451822);
// var charlotteMarker = addMarker(35.227087, -80.843127, map, "Charlotte", 2378426);
// var birminghamMarker = addMarker(33.520661, -86.802490, map, "Birmingham", 2364559);
// var seattleMarker = addMarker(47.606209, -122.332071, map, "Seattle", 2490383);
// var clevelandMarker = addMarker(41.499320, -81.694361, map, "Cleveland", 2381475);
// var phoenixMarker = addMarker(33.448377, -112.074037, map, "Phoenix", 2471390);
// var atlantaMarker = addMarker(33.748995, -84.387982, map, "Atlanta", 2357024);
//
// //Global Markers
// var tokyoMarker = addMarker(35.689487, 139.691706, map, "Tokyo", 1118370);
// //var saoPauloMarker = addMarker(-23.550520, -46.633309, map, "Sao Paulo", 455827);
// var seoulMarker = addMarker(37.566535, 126.977969, map, "Seoul", 1132599);
// var mexicoCityMarker = addMarker(19.432608, -99.133208, map, "Mexico City", 116545);
// var manilaMarker = addMarker(14.599512, 120.984219, map, "Manila", 1199477);
// var mumbaiMarker = addMarker(19.075984, 72.877656, map, "Mumbai", 2295411);
// var delhiMarker = addMarker(28.704059, 77.102490, map, "Delhi", 2295019);
// var lagosMarker = addMarker(6.524379, 3.379206, map, "Lagos", 1398823);
// var kolkataMarker = addMarker(22.572646, 88.363895, map, "Kolkata", 2295386);
// var cairoMarker = addMarker(30.044420, 31.235712, map, "Cairo", 1521894);
// var buenosAiresMarker = addMarker(-34.603684, -58.381559, map, "Buenos Aires", 468739);
// var rioDeJaneiroMarker = addMarker(-22.906847, -43.172896, map, "Rio De Janeiro", 455825);
// var moscowMarker = addMarker(55.755826, 37.617300, map, "Moscow", 2122265);
// var shanghaiMarker = addMarker(31.230416, 121.473701, map, "Shanghai", 2151849);
// var karachiMarker = addMarker(24.861462, 67.009939, map, "Karachi", 2211096);
// var parisMarker = addMarker(48.856614, 2.352222, map, "Paris", 615702);
// var istanbulMarker = addMarker(41.008238, 28.978359, map, "Istanbul", 2344116);
// var beijingMarker = addMarker(39.904211, 116.407395, map, "Beijing", 2151330);
// var londonMarker = addMarker(51.507351, -0.127758, map, "London", 44418);
// var bangkokMarker = addMarker(13.756331, 100.501765, map, "Bangkok", 1225448);
// var berlinMarker = addMarker(52.520007, 13.404954, map, "Berlin", 638242);
// var barcelonaMarker = addMarker(41.385064, 2.173403, map, "Barcelona", 753692);
// var madridMarker = addMarker(40.416775, -3.703790, map, "Madrid", 766273);
// var bogotaMarker = addMarker(4.710989, -74.072092, map, "Bogota", 368148);
// //var stPetersburgMarker = addMarker(27.751828, -82.626734, map, "St Petersburg", 2123260);
// var torontoMarker = addMarker(43.653226, -79.383184, map, "Toronto", 4118);
// var milanMarker = addMarker(-79.383184, 9.185924, map, "Milan", 718345);
// var singaporeMarker = addMarker(1.352083, 103.819836, map, "Singapore", 23424948);
// //var athensMarker = addMarker(33.951935, -83.357567, map, "Athens", 946738);

