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