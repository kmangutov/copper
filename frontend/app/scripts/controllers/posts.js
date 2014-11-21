'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('PostsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
