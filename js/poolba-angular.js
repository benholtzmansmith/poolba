angular.module('poolBa', ['ngRoute', 'ngResource','firebase', 'duScroll'])

.config(function($routeProvider){

	$routeProvider
		.when('/', 
		{
			templateUrl: 'index.html',
			controller: 'poolBaCtrl'	
		})
		.when('/:id',
		{
			templateUrl: 'angular_templates/details.html',
			controller: 'detailsCtrl'	
		})
})