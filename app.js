//Module

var weatherApp = angular.module('weatherApp',['ngResource','ngRoute']);

//Routing
weatherApp.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
	
	$locationProvider.hashPrefix('');
	
	$routeProvider.when('/', {templateUrl: 'pages/home.html', controller: 'HomeCtrl'})
	.when('/forecast', {templateUrl: 'pages/forecast.html', controller: 'ForecastCtrl'});
	
}]);

//Services
weatherApp.service('cityService',function(){
	this.city = 'Mumbai, MH';
});


//Controllers

weatherApp.controller("HomeCtrl",['$scope','cityService',function($scope,cityService){}]);
weatherApp.controller("ForecastCtrl",['$scope','cityService',function($scope,cityService){}]);

