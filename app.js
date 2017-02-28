//Module

var weatherApp = angular.module('weatherApp',['ngResource','ngRoute']);

//Routing
weatherApp.config(['$routeProvider','$locationProvider','$sceDelegateProvider',function($routeProvider,$locationProvider,$sceDelegateProvider){
	
  $sceDelegateProvider.resourceUrlWhitelist([
  'self',
  'http://api.openweathermap.org/**'
  ]);
	$locationProvider.hashPrefix('');
	
	$routeProvider.when('/', {templateUrl: 'pages/home.html', controller: 'HomeCtrl'})
	.when('/forecast', {templateUrl: 'pages/forecast.html', controller: 'ForecastCtrl'})
	.when('/forecast/:days', {templateUrl: 'pages/forecast.html', controller: 'ForecastCtrl'});
	//Notice we use :days as routeParams, we can input in the url for no. of days
}]);

//Services
weatherApp.service('cityService',function(){
	this.city = 'Mumbai, MH';
});


//Controllers

weatherApp.controller("HomeCtrl",['$scope','cityService',function($scope,cityService){
	
	$scope.city = cityService.city;

	//Watch for any change in city variable in the input field.(user input of city)
	$scope.$watch('city', function(){
		//if there is a change in user input, do this
		//put the city user has input into cityService
		cityService.city = $scope.city;
		
	});
	
}]);

weatherApp.controller("ForecastCtrl",['$scope','cityService','$resource','$routeParams',function($scope,cityService,$resource,$routeParams){
	//As we have diffr $scope for each controller.
    
	
	$scope.city = cityService.city;
	$scope.days = $routeParams.days || 2;
	$scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',{get: {method: 'JSONP'}});
	$scope.weatherResult = $scope.weatherAPI.get( 
												  { 
													q: $scope.city,
													cnt: $scope.days,
													APPID: '6f6d395cd7089e9b23c0940ecf01973f'
												  }
												);
	
	//console.log($scope.weatherResult);
	
	//Convert to celsius
	$scope.convertToCelsius = function(degK) {
	   return (degK-273.15).toFixed(2);
	};
	
	$scope.convertToDate = function(dt){
		console.log(new Date(dt*1000));
		return new Date(dt*1000);
	}
	
	

}]);

