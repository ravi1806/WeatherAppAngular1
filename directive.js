//Directives

weatherApp.directive('weatherReport', function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherReport.html',
		replace: true,
		scope: {
			weatherDay: '=', //for obj
			convertToStandard: '&', //function
			convertToDate: '&',
			format: '@' //string one way binding
			
		}
	};
});