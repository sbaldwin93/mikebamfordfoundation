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
		$scope.current = "Mike's Story";
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
		.when('/foundation', {
			templateUrl : '/html/foundation.html',
			controller : 'mainController'
		})
		.when('/ngu', {
			templateUrl : '/html/ngu.html',
			controller : 'mainController'
		})
		.when('/ofn', {
			templateUrl : '/html/ofn.html',
			controller : 'mainController'
		})
		.when('/wydg', {
			templateUrl : '/html/wydg.html',
			controller : 'mainController'
		})
		.when('/ms', {
			templateUrl : '/html/ms.html',
			controller : 'mainController'
		})
		.when('/atp', {
			templateUrl : '/html/atp.html',
			controller : 'mainController'
		})
		.when('/gt', {
			templateUrl : '/html/gt.html',
			controller : 'mainController'
		})
				
	}]);
}());