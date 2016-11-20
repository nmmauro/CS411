/**
 * Created by kishanpatel on 11/7/16.
 */

var app = angular.module('indexApp', []).
    controller('indexController', function($scope, $http) {
        $scope.result = "hello";

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
                zoom: 15,
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

        $scope.createUser = function() {
            var username = "";
            var password = "";
            username = $scope.username;
            password = $scope.password;
            console.log(username);
            console.log(password);
            //send username and password to index.js

        }

        $scope.getUser = function() {
            var users;
            var usernames;
            var passwords;

            $http.get('http://localhost:3000/index')
                .then(function(response) {
                    users = response.users;
                })
            console.log(users); //does not receive users
        }

    });

