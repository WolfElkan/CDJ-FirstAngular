console.log('client.js connected')

var app = angular.module('app',[])
app.controller('divController',['$scope',function($scope) {
	$scope.myName = 'Wolf Elkan';
	$scope.myFavoriteLanguage = 'JavaScript';
	$scope.myFavoriteJSLibrary = 'Angular';
}])