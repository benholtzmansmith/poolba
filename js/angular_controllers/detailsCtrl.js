angular.module('poolBa').controller('detailsCtrl', function($scope, $http, $firebase,  $routeParams){
	var ref = new Firebase("https://poolba.firebaseio.com/")

	var sync = $firebase(ref);

	$scope.PoolBars = sync.$asObject();

	console.log($routeParams)

	$scope.selectData = function(){
	};	

	$scope.test = 'hey'

});