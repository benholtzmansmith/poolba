angular.module('poolBa').controller('poolBaCtrl', function($scope, $http, $firebase, $location, $anchorScroll, $document){
	var ref = new Firebase("https://poolba.firebaseio.com/")

	var sync = $firebase(ref);

	$scope.data = sync.$asObject();

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

	var duration = 1800;
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