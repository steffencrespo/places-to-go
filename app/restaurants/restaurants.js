'use strict';

angular.module('myApp.restaurants', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/restaurants', {
    templateUrl: 'restaurants/restaurants.html',
    controller: 'RestaurantsCtrl'
  });
}])

.controller('RestaurantsCtrl', ['$scope', function($scope) {
  $scope.restaurantsList = [
    {
      name: 'Loló',
      points: 322,
      url: 'www.lolosf.com'
    },
    {
      name: 'Fernando',
      points: 207,
      url: 'www.google.com'
    }
  ];
}]);