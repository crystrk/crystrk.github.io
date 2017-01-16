// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic-toast'])

.constant('APPVERSION','0.0.1')
.constant('BASEURL', 'http://cryst.web.id/api/dev/nonton/')
.constant('APKURL', 'http://cryst.web.id/apk/gorontalosinema/')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
			if(typeof analytics !== undefined) {
				
                window.analytics.startTrackerWithId("UA-52278306-2");
								
            } else {
                console.log("Google Analytics Unavailable");
            }
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
  .state('menu', {
    url: "/menu",
	controller: 'AboutCtrl',
    templateUrl: "templates/about.html"
  })

  .state('xnowplay', {
    url: "/xnow/:nowId",
  controller: 'XnowCtrl',
    templateUrl: "templates/xnow.html"
  })

  .state('xcomingsoon', {
    url: "/xsoon/:soonId",
  controller: 'XsoonCtrl',
    templateUrl: "templates/xsoon.html"
  })

  // Each tab has its own nav history stack:


  .state('menu.about', {
      url: '/about'
    })
	
  .state('tab.now', {
      url: '/now',
      views: {
        'now': {
          templateUrl: 'templates/gorontalo/nowlist.html',
          controller: 'NowCtrl'
        }
      }
    })
  
  .state('tab.now-detail', {
      url: '/now/pelem/:nowId',
      views: {
        'now': {
          templateUrl: 'templates/gorontalo/nowdetail.html',
          controller: 'NowDetailCtrl'
        }
      }
    })
	
	.state('tab.soon', {
      url: '/soon',
      views: {
        'soon': {
          templateUrl: 'templates/gorontalo/soonlist.html',
          controller: 'SoonCtrl'
        }
      }
    })
  
  .state('tab.soon-detail', {
      url: '/soon/pelem/:soonId',
      views: {
        'soon': {
          templateUrl: 'templates/gorontalo/soondetail.html',
          controller: 'SoonDetailCtrl'
        }
      }
    })
	
	.state('tab.ads1-detail', {
      url: '/ads1/:adsId',
      views: {
        'ads1': {
          templateUrl: 'templates/gorontalo/ads1detail.html',
          controller: 'AdsDetailCtrl'
        }
      }
    })
	.state('tab.adsNow1-detail', {
      url: '/now/ads1/:adsId',
      views: {
        'now': {
          templateUrl: 'templates/gorontalo/ads1detail.html',
          controller: 'AdsDetailCtrl'
        }
      }
    })
	.state('tab.adsNow2-detail', {
      url: '/now/ads2/:adsId',
      views: {
        'now': {
          templateUrl: 'templates/gorontalo/ads2detail.html',
          controller: 'AdsDetailCtrl'
        }
      }
    })
	
	.state('tab.adsSoon1-detail', {
      url: '/soon/ads1/:adsId',
      views: {
        'soon': {
          templateUrl: 'templates/gorontalo/ads1detail.html',
          controller: 'AdsDetailCtrl'
        }
      }
    })
	.state('tab.adsSoon2-detail', {
      url: '/soon/ads2/:adsId',
      views: {
        'soon': {
          templateUrl: 'templates/gorontalo/ads2detail.html',
          controller: 'AdsDetailCtrl'
        }
      }
    })
	;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/now');
 

});
