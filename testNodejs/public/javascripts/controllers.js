/**
 * Created by kishanpatel on 11/7/16.
 */

angular.module('indexApp', []).
    controller('indexController', function($scope, $http) {
        $scope.result = "hello";

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
            var uluru = {lat: 42.350504, lng: -71.105404};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 5,
                center: uluru
            });
            var marker = new google.maps.Marker({
                position: uluru,
                map: map
            });

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
        $scope.trending = function(city) {
            console.log(city);
            //top trending topics for Boston will display on home page
            $http.post('http://localhost:3000/', {city: city})
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


