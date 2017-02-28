//Controllers

weatherApp.controller("HomeCtrl",['$scope','cityService','$location',function($scope,cityService,$location){
	
	$scope.city = cityService.city;
  
	//Watch for any change in city variable in the input field.(user input of city)
	$scope.$watch('city', function(){
		//if there is a change in user input, do this
		//put the city user has input into cityService
		cityService.city = $scope.city;
		
	});
	
	$scope.submit = function() {
		$location.path('/forecast'); //This is relative to the home.html page wherein we use form submit funct in ng-submit
	};
	
}]);

weatherApp.controller("ForecastCtrl",['$scope','cityService','$routeParams','weatherService',function($scope,cityService,$routeParams,weatherService) {
	//As we have diffr $scope for each controller.
    
	
	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '2'; //routeParams value is string and not number.

	$scope.weatherResult = weatherService.GetWeather($scope.city,$scope.days); 
	//Convert to celsius
	$scope.convertToCelsius = function(degK) {
	   return (degK-273.15).toFixed(2);
	};
	
	$scope.convertToDate = function(dt){
		//console.log(new Date(dt*1000));
		return new Date(dt*1000);
	}
	
	

}]);