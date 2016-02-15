'use strict';

angular.module('myApp.restaurants', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/restaurants', {
    templateUrl: 'restaurants/restaurants.html',
    controller: 'RestaurantsCtrl'
  });
}])

.controller('RestaurantsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('restaurants/restaurants.json').success(function(data) {
    $scope.restaurantsList = data;
  });
}]);