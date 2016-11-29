/**
 * Created by kishanpatel on 11/7/16.
 */

angular.module('indexApp', []).
    controller('indexController', function($scope, $http) {
        $scope.result = "hello";

        var markers = [];

    // var request = {
    //     method: 'post',
    //     url: 'http://localhost:3000/',
    //     data: {
    //         city: "Boston"
    //     }
    // };
    // $http(request)
    //     .then(function(response) {
    //         var trends = response.trends;
    //         console.log("hey");
    //         console.log(trends);
    //     })

        //this function IS being called
        $scope.initMap = function() {
            console.log("this function is being called")
            // Console.log("initMap");
            var key = "";
            var async = "";
            var defer = "";
            var src = "https://maps.googleapis.com/maps/api/js?key="
            var center = {lat: 37.0902, lng: -95.7129};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: center
            });

            //USA Markers
            var bostonMarker = addMarker(42.3601, -71.0589, map, "BOS", 2367105); //marker for Boston
            var newYorkMarker = addMarker(40.7128, -74.0059, map, "NYC", 2459115);
            var losAngelesMarker = addMarker(34.052234, -118.243685, map, "LA", 2442047);
            var miamiMarker = addMarker(25.761680, -80.191790, map, "MIA", 2450022);
            var newOrleansMarker = addMarker(29.951066, -90.071532, map, "NOL", 2458833);
            var providenceMarker = addMarker(41.823989, -71.412834, map, "PROV", 2477058);
            var chicagoMarker = addMarker(41.878114, -87.629798, map, "CHI", 2379574);
            var houstonMarker = addMarker(29.760427, -95.369803, map, "HOU", 2424766);
            var portlandMarker = addMarker(45.523062, -122.676482, map, "PDX", 2475687);
            var sacramentoMarker = addMarker(38.581572, -121.494400, map, "SAC", 2486340);
            var stLouisMarker = addMarker(38.610302, -90.412518, map, "STL", 2486982);
            var sanFranciscoMarker = addMarker(37.774929, -122.419416, map, "SFO", 2487956);
            var minneapolisMarker = addMarker(44.977753, -93.265011, map, "MN", 2452078);
            var nashvilleMarker = addMarker(36.162664, -86.781602, map, "NASH", 2457170);
            var lasVegasMarker = addMarker(36.114707, -115.172850, map, "LV", 2436704);
            var denverMarker = addMarker(39.739236, -104.990251, map, "DEN", 2391279);
            var cincinnatiMarker = addMarker(39.103118, -84.512020, map, "CIN", 2380358);
            var baltimoreMarker = addMarker(39.290385, -76.612189, map, "BAL", 2358820);
            var richmondMarker = addMarker(37.540725, -77.436048, map, "RICH", 2480894);
            var sanAntonioMarker = addMarker(29.424122, -98.493628, map, "SA", 2487796);
            var pittsburghMarker = addMarker(40.440625, -79.995886, map, "PITT", 2473224);
            var washingtonDCMarker = addMarker(38.9072, -77.0369, map, "DC", 2347567);
            var orlandoMarker = addMarker(28.538335, -81.379236, map, "ORL", 2466256);
            var detroitMarker = addMarker(42.331427, -83.045754, map, "DET", 2391585);
            var indianapolisMarker = addMarker(39.768403, -86.158068, map, "IND", 2427032);
            var milwaukeeMarker = addMarker(43.038902, -87.906474, map, "MIL", 2451822);
            var charlotteMarker = addMarker(35.227087, -80.843127, map, "CHA", 2378426);
            var birminghamMarker = addMarker(33.520661, -86.802490, map, "BIR", 2364559);
            var seattleMarker = addMarker(47.606209, -122.332071, map, "SEA", 2490383);
            var clevelandMarker = addMarker(41.499320, -81.694361, map, "CLE", 2381475);
            var phoenixMarker = addMarker(33.448377, -112.074037, map, "PHO", 2471390);
            var atlantaMarker = addMarker(33.748995, -84.387982, map, "ATL", 2357024);

            //Global Markers
            var tokyoMarker = addMarker(35.689487, 139.691706, map, "tokyo", 1118370);
            var saoPauloMarker = addMarker(-23.550520, -46.633309, map, "sao paulo", 455827);
            var seoulMarker = addMarker(37.566535, 126.977969, map, "seoul", 1132599);
            var mexicoCityMarker = addMarker(19.432608, -99.133208, map, "ATL", 116545);
            var manilaMarker = addMarker(14.599512, 120.984219, map, "ATL", 1199477);
            var mumbaiMarker = addMarker(19.075984, 72.877656, map, "ATL", 2295411);
            var delhiMarker = addMarker(28.704059, 77.102490, map, "ATL", 2295019);
            var lagosMarker = addMarker(6.524379, 3.379206, map, "ATL", 1398823);
            var kolkataMarker = addMarker(22.572646, 88.363895, map, "ATL", 2295386);
            var cairoMarker = addMarker(30.044420, 31.235712, map, "ATL", 1521894);
            var buenosAiresMarker = addMarker(-34.603684, -58.381559, map, "ATL", 468739);
            var rioDeJaneiroMarker = addMarker(-22.906847, -43.172896, map, "ATL", 455825);
            var moscowMarker = addMarker(55.755826, 37.617300, map, "ATL", 2122265);
            var shanghaiMarker = addMarker(31.230416, 121.473701, map, "ATL", 2151849);
            var karachiMarker = addMarker(24.861462, 67.009939, map, "ATL", 2211096);
            var parisMarker = addMarker(48.856614, 2.352222, map, "ATL", 615702);
            var istanbulMarker = addMarker(41.008238, 28.978359, map, "ATL", 2344116);
            var beijingMarker = addMarker(39.904211, 116.407395, map, "ATL", 2151330);
            var londonMarker = addMarker(51.507351, -0.127758, map, "ATL", 44418);
            var bangkokMarker = addMarker(13.756331, 100.501765, map, "ATL", 1225448);
            var berlinMarker = addMarker(52.520007, 13.404954, map, "ATL", 638242);
            var barcelonaMarker = addMarker(41.385064, 2.173403, map, "ATL", 753692);
            var madridMarker = addMarker(40.416775, -3.703790, map, "ATL", 766273);
            var bogotaMarker = addMarker(4.710989, -74.072092, map, "ATL", 368148);
            var stPetersburgMarker = addMarker(27.751828, -82.626734, map, "ATL", 2123260);
            var torontoMarker = addMarker(43.653226, -79.383184, map, "ATL", 4118);
            var milanMarker = addMarker(-79.383184, 9.185924, map, "ATL", 718345);
            var singaporeMarker = addMarker(1.352083, 103.819836, map, "ATL", 23424948);
            var athensMarker = addMarker(33.951935, -83.357567, map, "ATL", 946738);

            var req = new XMLHttpRequest();
            req.open('GET', 'http://where.yahooapis.com/v1.q(Boston)', false);
            req.send(null);
            if (req.status == 200) {
                dump(req.responseText);
            }
            else {
                console.log(req.responseText);
            }

            var image = '/images/pin.png'
            console.log(image)

            function addMarker(lat, long, map, label, woeid) {
                var marker = new google.maps.Marker({
                    position: {lat: lat, lng: long},
                    map: map,
                    label: label,
                    icon: image
                });
                google.maps.event.addListener(marker, 'click', function() {
                    $http.post('http://localhost:3000/', {woeid: woeid})
                        .then(function(response) {
                            var trends = response.data;
                            var city = label;
                            console.log(trends);
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
                        });
                    console.log(marker.label);
                });
                return marker;
            }

            // google.maps.event.addListener(marker, 'click', function() {
            //     console.log(this.label);
            // });

            // bostonMarker.addListener('click', function() {
            //     var city = "Boston";
            //     $http.post('http://localhost:3000/', {city: city})
            //         .then(function(response) {
            //             console.log(response.data);
            //             var trends = response.data;
            //             trends = response.data;
            //             console.log(trends);
            //             for (var i = 0; i < 50; i++) {
            //                 $scope.trends = [
            //                     {trend: trends[0]},
            //                     {trend: trends[1]},
            //                     {trend: trends[2]},
            //                     {trend: trends[3]},
            //                     {trend: trends[4]},
            //                     {trend: trends[5]},
            //                     {trend: trends[6]},
            //                     {trend: trends[7]},
            //                     {trend: trends[8]},
            //                     {trend: trends[9]}
            //                 ];
            //             }
            //         });
            // });
            //
            // newYorkMarker.addListener('click', function() {
            //     var city = "notboston...";
            //     $http.post('http://localhost:3000/', {city: city})
            //         .then(function(response) {
            //             console.log(response.data);
            //             var trends = response.data;
            //             trends = response.data;
            //             console.log(trends);
            //             for (var i = 0; i < 50; i++) {
            //                 $scope.trends = [
            //                     {trend: trends[0]},
            //                     {trend: trends[1]},
            //                     {trend: trends[2]},
            //                     {trend: trends[3]},
            //                     {trend: trends[4]},
            //                     {trend: trends[5]},
            //                     {trend: trends[6]},
            //                     {trend: trends[7]},
            //                     {trend: trends[8]},
            //                     {trend: trends[9]}
            //                 ];
            //             }
            //         });
            // });

            // $http.get('http://localhost:3000/index')
            //     .then(function(response) {
            //         key = response.data;
            //         src += key;
            //     })

            //$scope.src = src;
            //console.log(key);
            //console.log("");
            $scope.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDjj7_B6dfemXryFJbD_u7kA9HfvtEUWcI"
            console.log($scope.src);
        }

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

        // $scope.getUser = function() {
        //     var users;
        //     var usernames;
        //     var passwords;
        //
        //     $http.get('http://localhost:3000/')
        //         .then(function(response) {
        //             users = response.users;
        //         });
        //     console.log(users); //does not receive users
        // }

        // $http.post('http://localhost:3000/')
        //     .then(function(response) {
        //         var trends = response.data;
        //         console.log("hey");
        //         console.log(response.data[0]);
        //     })


    })
    //controller for navigation Bar
    .controller('navBarController', function($scope, $http) {
        $scope.trending = function(woeid) {
            console.log(city);
            //top trending topics for Boston will display on home page
            $http.post('http://localhost:3000/', {woeid: woeid})
                .then(function(response) {
                    console.log(response.data);
                    var trends = response.data;
                    trends = response.data;
                    console.log(trends);
                    for (var i = 0; i < 50; i++) {
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
                    }
                });

            //on Boston, NY, etc. button click
            $scope.trending = function() {
            }
        }

    });


