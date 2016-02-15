'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
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