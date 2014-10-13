angular.module('poolBa').controller('detailsCtrl', function($scope, $http, $firebase,  $route, $routeParams){
	var ref = new Firebase("https://poolba.firebaseio.com/")

	var sync = $firebase(ref);

	$scope.PoolBars = sync.$asObject();

	var id = $routeParams.id;

	selected Array 
	
	console.log(id);


	JSON.stringify($routeParams);
	$scope.routeParams = $routeParams;
	console.log($scope.routeParams);


	$scope.selectData = function(){

		console.log('select data')
		for (var i = 0, j = $scope.PoolBars.length; i < j; i++){
			if ($scope.PoolBars[i].id == $routeParams){
				$scope.PoolBars[i] = test;
			}
		}
	};	

	$scope.test1 = 'hey';
});