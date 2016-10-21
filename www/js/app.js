// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('app', [
    'ionic', 'ui.router', 'timer', 'angularMoment', 'ngCordova', 'ionic.cloud', 'ngCordova', 'ionic.service.core', 'ionic.service.push'
    ])


//.servive("jsonFileService", jsonFileService)

.config(['$urlRouterProvider', '$stateProvider', '$ionicCloudProvider', '$ionicAppProvider', function($urlRouterProvider, $stateProvider, $ionicCloudProvider, $ionicAppProvider) {


//einfach ignorieren: Ansätze für Benachrichtigungen
  $ionicAppProvider.identify({
      app_id: '30ffc7ac',
      api_key: '94ab38e643435519d73739f6c1639fe3ace95650f14c5f5a',
      dev_push: true
    });

  $ionicCloudProvider.init({
    "core": {
      "app_id": "cb1f5fe2"
    },
    "push": {
      "sender_id": "408107066968",
      "pluginConfig": {
        "ios": {
          "badge": true,
          "sound": true
        },
        "android": {
          "icon": "../img/icon.jpg",
          "iconColor": "#343434"
        }
      }
    }
  });
//Bis hier nur shit

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home.html',
      controller: 'homeCtrl',

      resolve: {
        user: function(getJSON) {
          return getJSON.loadData(success, error);

          function success(res) {
            console.log(res)
            return res.data;
          }

          function error(res) {
            return []; // or whatever default data, maybe {}
          }

        }
      },

    })

    .state('wecker', {
      url: '/wecker',
      templateUrl: 'pages/wecker.html',
      controller: 'weckerCtrl'
    })

    .state('kalender', {
      url: '/kalender',
      templateUrl: 'pages/kalender.html',
      controller: 'kalenderCtrl'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'pages/settings.html',
      controller: 'settingsCtrl'
    });

  }])

.factory('getJSON', function($http) {
  return {
    loadData: function(successCallback, errorCallbak) {
      return $http.get('/api/tasks.json').then(successCallback, errorCallbak)
    }
  }
})


myApp.run(function($ionicPlatform, $ionicPush) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);




      pushNotification = window.plugins.pushNotification;

      window.onNotification = function(e){
            switch(e.event){
              case 'registered':
                if(e.regid.length > 0){

                  var device_token = e.regid;
                  RequestsService.register(device_token).then(function(response){
                    alert('registered!');
                  });
                }
              break;

              case 'message':
                alert('msg received: ' + e.message);
                /*
                  {
                      "message": "Hello this is a push notification",
                      "payload": {
                          "message": "Hello this is a push notification",
                          "sound": "notification",
                          "title": "New Message",
                          "from": "813xxxxxxx",
                          "collapse_key": "do_not_collapse",
                          "foreground": true,
                          "event": "message"
                      }
                  }
                */
              break;

              case 'error':
                alert('error occured');
              break;

            }
      };

      window.errorHandler = function(error){
        alert('an error occured');
      }

      pushNotification.register(
        onNotification,
        errorHandler,
        {
          'badge': 'true',
          'sound': 'true',
          'alert': 'true',
          'ecb': 'onNotification',
          'senderID': '932102904014',
        }
      );












    }




    if(window.StatusBar) {
      StatusBar.styleDefault();
    }



  });




});
