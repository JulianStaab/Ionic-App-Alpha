angular
 .module('app')
 .controller('weckerCtrl', ['$scope', '$filter', '$ionicPush', function ($scope, $filter, $ionicPush) {
 	var now = moment();
 	time1 = new Date(1970, 0, 1, 7, 0, 0);
	$scope.time1 = time1;
	tempTime2 = moment();
	var tempTime3;

 	var tempTime1 = moment(time1);
 	$scope.tempTime1 = tempTime1;
 	$scope.now = now;

	 	$scope.setAlarm = function () {
	 		now = moment();
	 		tempTime1 = moment($scope.time1);
      tempTime1.set({'year': now.year(), 'month': now.month(), 'date': now.date()+1,});


      var diff = moment(tempTime1).unix() - moment(now).unix();




      $scope.$broadcast('timer-set-countdown', diff);
      $scope.$broadcast('timer-start');

   		 };

    $scope.$on('timer-stopped', function (event, data){
         console.log('Timer Stopped - data = ', data);
    });



 }]);
