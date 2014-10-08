angular.module('poolBa').controller('poolBaCtrl', function($scope, $http, $firebase, $location, $anchorScroll, $document){
	var ref = new Firebase("https://poolba.firebaseio.com/")

	var sync = $firebase(ref);

	$scope.data = sync.$asObject();

	$scope.data = {
	"PoolBars": [
		{
			"name":"Tap A Keg",
			"address": "2731 Broadway, New York, NY 10025",
			"expense": "$",
			"table quality":"***",
			"que stick quality":"**",
			"table style": "bar",
			"beer selection" : "*",
			"competition":"***",
			"hosts league competition": "yes",
			"pay style" :  "quarters",
			"notes":"League nights on Sunday, Monday, Tuesday, and Wednesday. Strong local competition for games on Thursday, Friday and Saturday nights."
		},
		{
			"name":"Bleecker Street Bar",
			"address": "56-58 Bleecker St, New York, NY 10012",
			"expense": "$",
			"table quality":"***",
			"que stick quality":"***",
			"table style": "bar",
			"beer selection" : "*",
			"competition":"**",
			"hosts league competition": "no",
			"pay style" :  "quarters",
			"notes":"Pool tables are quality but bar is more geared towards getting drunk than playing a good game of pool."	
		},
		{

			"name":"Amsterdam Billiards",
			"address": "110 E 11th St, New York, NY 10003",
			"expense": "$$",
			"table quality":"***",
			"que stick quality":"**",
			"table style": "full sized",
			"beer selection" : "*",
			"competition":"***",
			"hosts league competition": "unsure",
			"pay style" :  "reserve a table",
			"notes":"Full sized, high quality pool tables. Amsterdam Billiards puts together a legendary pool hall."	
		}

	]
}

	console.log($scope.data);

	/*http({method: 'GET', url: 'https://poolba.firebaseio.com/poolba/'}).
		success(function(data, status, headers, config) {
			console.log(data);
		}).
		error(function(data, status, headers, config) {
			console.log(data);
		});*/


	
	var firstSection = angular.element(document.getElementById('app-description'));
	var secondSection = angular.element(document.getElementById('app'));

	var duration = 2000;
	var offset = 200;

	$scope.toTheTop = function() {
      $document.scrollTopAnimated(0);
    }

	$scope.scrollToDescription = function (){
		$document.scrollToElementAnimated(firstSection, offset, duration);
	}

	$scope.scrollToApp = function (){
		$document.scrollToElementAnimated(secondSection, offset, duration);
	}


});