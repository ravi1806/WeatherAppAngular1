//Services
weatherApp.service('cityService',function(){
	this.city = 'Mumbai, MH';
});

weatherApp.service('weatherService',['$resource',function($resource){
	
	this.GetWeather = function(city,days) {
	
	var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',{get: {method: 'JSONP'}});
	return  weatherAPI.get( 
								  { 
									q: city,
									cnt: days,
									APPID: '6f6d395cd7089e9b23c0940ecf01973f'
								  }
							  );
			 
	//console.log($scope.weatherResult);
  };
}]);