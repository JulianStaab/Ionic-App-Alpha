angular
 .module('app')
 .controller('homeCtrl', ['$rootScope', '$scope', '$ionicPopup', '$ionicListDelegate', '$ionicUser', '$ionicPush', function($rootScope, $scope, $ionicPopup, $ionicListDelegate, $ionicUser, $ionicPush) {
 	$scope.title = "Home";

//  $scope.tasks = getJSON;

  /*jsonFileService
          .getTasks()
          .then(function(tasks) { // regular promises
              $scope.tasks = tasks;
          });
*/



  $scope.krass = [
  {"title": "Alle sollen Basics in HTML, CSS und Javascript beherrschen ", "completed": false},
  {"title": "Herausfinden wie man Cordova und Ionic kombiniert", "completed": true},
  {"title": "Einarbeiten in die Funktionsweise von Git", "completed": false}
];
 	$scope.items = ['Element1', 'Sache2', 'af'];

$scope.feschuelers =
    [
      {title: "Arbër Rrapaj",},
    ];

$scope.newTask = function() {
    $ionicPopup.prompt({
        title: "Neuer Eintrag",
        template: "Aufgabe hier eingeben:",
        inputPlaceholder: "Was gibt's noch zu tun?",
        okText: 'Aufgabe hinzufügen'
    }).then(function(res) {
        if (res) $scope.tasks.push({title: res, completed: false});
      })
};

$scope.edit = function(task) {
    $scope.data = { response: task.title };
    $ionicPopup.prompt({
       title: "Aufgabe bearbeiten",
       scope: $scope
    }).then(function(res) {
        if (res !== undefined) task.title = $scope.data.response;
        $ionicListDelegate.closeOptionButtons()
     	})
};




 }]);
