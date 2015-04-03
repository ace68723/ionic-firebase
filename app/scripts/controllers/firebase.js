'use strict';

/**
 * @ngdoc function
 * @name ionicFirebaseApp.controller:FirebaseCtrl
 * @description
 * # FirebaseCtrl
 * Controller of the ionicFirebaseApp
 */
angular.module('ionicFirebaseApp')
  .controller('FirebaseCtrl', ['$firebase', function ($firebase) {
    
    var fc = this;
    fc.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  }]);
