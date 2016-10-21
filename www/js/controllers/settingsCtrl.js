angular
 .module('app')
 .controller('settingsCtrl', ['$scope', function($scope) {
 	$scope.title = "Einstellungen";
 	$scope.items = ['Element1', 'Sache2', 'af'];
 }]);