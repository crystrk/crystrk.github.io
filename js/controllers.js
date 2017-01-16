angular.module('starter.controllers', [])

.controller('NowCtrl', function($scope, $ionicPopup, crystService, ionicToast, $ionicLoading, APPVERSION, $ionicPlatform) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.showAlert = function(msg) {
    $ionicPopup.alert({
        title: msg.title,
        template: msg.message,
        okText: 'Ok',
        okType: 'button-positive'
    });
  };
  
	
	crystService.ambilVersion().then(function(items){
		$scope.appsetting = items;
		var isAndroid = ionic.Platform.isAndroid();
		//console.log($scope.appsetting);
		if (APPVERSION < $scope.appsetting.data.minversion){
			//console.log("Need To Update");
			var myPopup = $ionicPopup.confirm({
			  template: '<center>Versi terbaru telah tersedia, silahkan update aplikasi untuk dapat menggunakan Gorontalo Sinema<center>',
			  title: 'UPDATE VERSI '+$scope.appsetting.data.minversion,
			  scope: $scope,
			  buttons: [{ 
				text: 'Sabantar',
				type: 'button-default',
				onTap: function(e) {
				
				}
			  }, {
				text: 'Update',
				type: 'button-dark',
				onTap: function(e) {
				  
				  return true;
				}
			  }]
			});
			myPopup.then(function(res) {
				if(res) {
				   if(isAndroid){
						window.open($scope.appsetting.data.linkapp, "_system","location=yes");
					  } else {
						window.open($scope.appsetting.data.linkapp, "_system","location=yes");
					  }
					  if(typeof analytics !== "undefined") { window.analytics.trackEvent("Update", "Update Versi "+$scope.appsetting.data.minversion); }
					  ionic.Platform.exitApp();
				 } else {
				   //console.log('You are not sure');
				 }
			  
			});
		}
	});
	  
	  
	
	$scope.showData = function() {
	  $ionicLoading.show({
      template: 'Load Data'
    });
    crystService.ambilSemuaNow().success(function(dataChat) {
		
      $scope.chats = dataChat;
	  var monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
	  "Jul", "Aug", "Sep", "Okt", "Nov", "Des"
	];
	  var tanggal = new Date().getDate();
	  var bulan = monthNames[new Date().getMonth()];
	  var tahun = new Date().getFullYear();
	  var j = new Date().getHours();
	  var m = new Date().getMinutes();
	  var d = new Date().getSeconds();
	  ionicToast.show('Update : '+tanggal+' '+bulan+' '+tahun+' '+' '+j+':'+m+':'+d, 'middle',false, 1800);
	  $scope.getdata = "";
	  if(typeof analytics !== "undefined") { window.analytics.trackView("Now Playing"); }
    }).error(function(dataChat) {
      ionicToast.show('Something went wrong, Try again later', 'middle',false, 1500);
	  $scope.getdata = "gagal";
	  
    }).finally(function() {
			
			$ionicLoading.hide();
            $scope.$broadcast('scroll.refreshComplete');
        });
  };
  

  $scope.showData();

  console.log($scope.chats);

})

.controller('SoonCtrl', function($scope, $ionicPopup, crystService, ionicToast, $ionicLoading) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.showAlert = function(msg) {
    $ionicPopup.alert({
        title: msg.title,
        template: msg.message,
        okText: 'Ok',
        okType: 'button-positive'
    });
  };
  
	
	  
	  
	  
	
  $scope.showData = function() {
	  $ionicLoading.show({
      template: 'Load Data'
    });
    crystService.ambilSemuaSoon().success(function(dataChat) {
		
      $scope.chats = dataChat;
	  var monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
	  "Jul", "Aug", "Sep", "Okt", "Nov", "Des"
	];
	  var tanggal = new Date().getDate();
	  var bulan = monthNames[new Date().getMonth()];
	  var tahun = new Date().getFullYear();
	  var j = new Date().getHours();
	  var m = new Date().getMinutes();
	  var d = new Date().getSeconds();
	  ionicToast.show('Update : '+tanggal+' '+bulan+' '+tahun+' '+' '+j+':'+m+':'+d, 'middle',false, 1800);
	  $scope.getdata = "";
	  if(typeof analytics !== "undefined") { window.analytics.trackView("Coming Soon"); }
    }).error(function(dataChat) {
      ionicToast.show('Something went wrong, Try again later', 'middle',false, 1500);
	  $scope.getdata = "gagal";
	 
    }).finally(function() {
			
			$ionicLoading.hide();
            $scope.$broadcast('scroll.refreshComplete');
        });
  };
  
  $scope.showData();

  console.log($scope.chats);

})

.controller('NowDetailCtrl', function($scope,$stateParams,$ionicPopup,$ionicModal,$state, crystService, ionicToast, $sce) {

  $scope.showDataId = function() {
  crystService.ambilSatuNow($stateParams.nowId).success(function(dataChat) {
    $scope.nowDetail = dataChat;
	$scope.trust = $sce.trustAsHtml;
	judul =  $scope.nowDetail.now_judul;
	
	if(typeof analytics !== "undefined") { window.analytics.trackView("Now : "+judul+""); }
  }).error(function(dataChat) {
    ionicToast.show('Something went wrong, Try again later', 'middle',false, 1500);
  });  
  };

  $scope.showDataId();

})

.controller('SoonDetailCtrl', function($scope,$stateParams,$ionicPopup,$ionicModal,$state, crystService, ionicToast, $sce) {

  $scope.showDataId = function() {
  crystService.ambilSatuSoon($stateParams.soonId).success(function(dataChat) {
    $scope.soonDetail = dataChat;
	$scope.trust = $sce.trustAsHtml;
	judul =  $scope.soonDetail.soon_judul;
	if(typeof analytics !== "undefined") { window.analytics.trackView("Soon : "+judul+""); }
  }).error(function(dataChat) {
    ionicToast.show('Error, Something went wrong, Try again later', 'middle',false, 1500);
  });  
  };

  $scope.showDataId();

})

.controller('AdsDetailCtrl', function($scope,$stateParams,$ionicPopup,$ionicModal,$state, crystService, ionicToast, $sce) {

  $scope.showDataId = function() {
  crystService.ambilSatuAds($stateParams.adsId).success(function(dataChat) {
    $scope.adsDetail = dataChat;
	$scope.trust = $sce.trustAsHtml;
	link_ads =  $scope.adsDetail.ads_link;
	judul =  $scope.adsDetail.ads_judul;
	$scope.openInExternalBrowser = function()
	{
	  // Open in external browser
		window.open(link_ads,'_system','location=yes');
		if(typeof analytics !== "undefined") { window.analytics.trackEvent("Klik", judul); }
	};
	
	if(typeof analytics !== "undefined") { window.analytics.trackView("Iklan : "+judul+""); }
	
  }).error(function(dataChat) {
    ionicToast.show('Error, Something went wrong, Try again later', 'middle',false, 1500);
  });  
  };
	$scope.showDataId();

})
.controller('AboutCtrl', function($scope, APPVERSION) {
	console.log('About');
	if(typeof analytics !== "undefined") { window.analytics.trackView("About "+APPVERSION); }
	
	$scope.appVersi = APPVERSION;
	$scope.openInExternalBrowserTwitter = function()
	{
	  // Open in external browser
		window.open('https://twitter.com/crystrk','_system','location=yes');
		if(typeof analytics !== "undefined") { window.analytics.trackEvent("About", "Twitter Developer"); }
	};
	$scope.openInExternalBrowserEmail = function()
	{
	  // Open in external browser
		window.open('mailto:cryst@gmail.com?subject=Hae Gorontalo Sinema Developer','_system','location=yes');
		if(typeof analytics !== "undefined") { window.analytics.trackEvent("About", "Email Developer"); }
	};
})

.controller('XnowCtrl', function($scope,$stateParams,$ionicPopup,$ionicModal,$state, crystService, ionicToast, $sce) {
	console.log('Xnow');

	$scope.showDataId = function() {
	  crystService.ambilSatuNow($stateParams.nowId).success(function(dataChat) {
	    $scope.nowDetail = dataChat;
		$scope.trust = $sce.trustAsHtml;
		judul =  $scope.nowDetail.now_judul;
		
		if(typeof analytics !== "undefined") { window.analytics.trackView("X-Now : "+judul+""); }
	  }).error(function(dataChat) {
	    ionicToast.show('Something went wrong, Try again later', 'middle',false, 1500);
	  });  
	  };

	  $scope.showDataId();
	
	
})

.controller('XsoonCtrl', function($scope,$stateParams,$ionicPopup,$ionicModal,$state, crystService, ionicToast, $sce) {
	console.log('Xsoon');

	$scope.showDataId = function() {
	  crystService.ambilSatuSoon($stateParams.soonId).success(function(dataChat) {
	    $scope.soonDetail = dataChat;
		$scope.trust = $sce.trustAsHtml;
		judul =  $scope.soonDetail.soon_judul;
		if(typeof analytics !== "undefined") { window.analytics.trackView("X-Soon : "+judul+""); }
	  }).error(function(dataChat) {
	    ionicToast.show('Error, Something went wrong, Try again later', 'middle',false, 1500);
	  });  
	  };

	  $scope.showDataId();
	
	
})

;
