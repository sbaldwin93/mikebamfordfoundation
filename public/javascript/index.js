(function() {
angular.module('mikebamfordfoundation', ['ngRoute', 'ngFileUpload'])
angular.module('mikebamfordfoundation')
	.controller('mainController', ['$scope', '$http', 'Upload', '$timeout', function($scope, $http, Upload, $timout) {
	$scope.current = "Home";
	$scope.home = function() {
		$scope.current = "Home";
	};
	$scope.aboutTheFoundation = function() {
		$scope.current = "About The Foundation";
	};
	$scope.neverGiveUp = function() {
		$scope.current = "Never Give Up";
	};
	$scope.ourFamilyNow = function() {
		$scope.current = "Our Family Now";
	};
	$scope.whereYourDonationsGo = function() {
		$scope.current = "Where your donations go";
	};
	$scope.mikesStory = function() {
		$scope.current = "Mikes Story";
	};
	$scope.aboutThePendants = function() {
		$scope.current = "About The Pendants";
	};
	$scope.order = function() {
		$scope.current = "Order";
	};
	$scope.golfTournament = function() {
		$scope.current = "Golf Tournament";
	};
	$scope.contact = function() {
		$scope.current = "Contact";
	};
}]);
angular.module('mikebamfordfoundation')
.config(['$routeProvider', function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/html/home.html',
			controller : 'mainController'
		})
		.when('/home', {
			templateUrl: '/html/home.html',
			controller : 'mainController'
		})
		.when('/carousel-example-generic', {
			templateUrl : '/html/home.html',
			controller : 'mainController'
		})
				
	}]);
}());