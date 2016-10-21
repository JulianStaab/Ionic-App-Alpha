angular
 .module('app')
 .controller('kalenderCtrl', ['$scope', function($scope) {
 	$scope.title = "Kalender";
 	$scope.items = ['Element1', 'Sache2', 'af'];
 }]);