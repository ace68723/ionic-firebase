'use strict';

/**
 * @ngdoc function
 * @name ionicFirebaseApp.controller:SetpriorityCtrl
 * @description
 * # SetpriorityCtrl
 * Controller of the ionicFirebaseApp
 */
angular.module('ionicFirebaseApp')
  	.controller('SetpriorityCtrl',['$firebaseArray', function ($firebaseArray) {
    	var sp = this;

    	var ref = new Firebase('https://cm-restaurant.firebaseio.com/');

    	sp.syncQuestions = $firebaseArray(ref.child("questions"));
    	
    	var submitData = {}
		sp.user = {}
		sp.submit = function() {
			submitData.user = sp.user
	    	sp.syncQuestions.$add(submitData)
			.then(function(ref) {
				ref.setPriority(sp.user.rank);
				var id = ref.key();
				console.log("added record with id " + id);
				sp.syncQuestions.$indexFor(id); // returns location in the array

				console.log(sp.user);
		    	
		    	
			});

		};
		var test = new Firebase('https://cm-restaurant.firebaseio.com/questions/-JlyInXsmBVvWxx62NFI')
		test.setPriority(4441);

		sp.click = function(id) {
			sp.syncQuestions.$save(id)
			.then(function(ref) {
				console.log( ref.key())
			  	ref.key() === sp.syncQuestions[2].$id; // true
			  	
			  	sp.rank = sp.syncQuestions[id].user.rank;
			  	
			  	console.log(sp.rank)
			  	ref.setPriority(sp.rank);
			}, function(error) {
			  console.log("Error:", error);
			});
		};

		sp.setRandom = function() {
			var dirget = Math.floor((Math.random() * 10) );
			var tensDirget = Math.floor((Math.random() * 10) );
			var hundredsDirget = Math.floor((Math.random() * 10) );
			var thousandsDirget = Math.floor((Math.random() * 10) );
			var rank = String(dirget) + String(tensDirget) + String(hundredsDirget) + String(thousandsDirget) 
			
			var possible = "abcdefghijklmnopqrstuvwxyz";
			var firstName = '';
			var lastName = '';

			for( var i=0; i < 5; i++ ){
		        firstName += possible.charAt(Math.floor(Math.random() * possible.length));
				lastName += possible.charAt(Math.floor(Math.random() * possible.length));
			}

			sp.user.firstName = firstName;
			sp.user.lastName = lastName;
			sp.user.rank = rank;

			sp.submit();
		};

  	}]);
