angular.module('starter.services', [])

.factory('crystService', function($http, BASEURL, APPVERSION, APKURL) {

    return {
        ambilSemuaNow: function (){
            return $http.get(BASEURL+APPVERSION+'/select_now.php', {timeout: 10000}); 
        },
		ambilSemuaSoon: function (){
            return $http.get(BASEURL+APPVERSION+'/select_soon.php', {timeout: 10000}); 
        },
        ambilSatuNow: function (now_id){
            return $http.get(BASEURL+APPVERSION+'/select_now_id.php?id='+now_id, {timeout: 10000}); 
        },
		ambilSatuSoon: function (soon_id){
            return $http.get(BASEURL+APPVERSION+'/select_soon_id.php?id='+soon_id, {timeout: 10000}); 
        },
		ambilSatuAds: function (ads_id){
            return $http.get(BASEURL+APPVERSION+'/select_ads_id.php?id='+ads_id, {timeout: 10000}); 
        },
        ambilVoters: function (){
            return $http.get('http://cryst.web.id/api/dev/pilgub2017/slim/last_voters', {timeout: 10000}); 
        },
		ambilVersion: function (){
            return $http.get(APKURL+'version.php', {timeout: 10000}); 
        }
    };
})
;
