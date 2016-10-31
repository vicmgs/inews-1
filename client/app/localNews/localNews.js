'use strict';

angular.module('inews.localNews', [])

.controller('localNewsController', function($scope, News, $location, $window) {
  $scope.localnews = {};
  $scope.searchnews = {};
  $scope.lim1 = 3;
  $scope.lim2 = 3;

  $scope.lat;
  $scope.long;
  $scope.isLocNewsLoading = false;
  $scope.isSearchNewsLoading = false;

  $scope.loadMore1 = function() {
    if ($scope.lim1 === 3) $scope.lim1 = 10;
    else $scope.lim1 = 3;
  }

  $scope.loadMore2 = function() {
    if ($scope.lim2 === 3) $scope.lim2 = 10;
    else $scope.lim2 = 3;
  }

  var initializeLocalNews = function(lat, long) {
    $scope.isLocNewsLoading = true;
    News.getNeighborhood(lat, long)
      .then(function(data) {
        return News.getBingNews(data.neighbourhood + '+' + data.city + '+' + data.state);
      })
      .then(function(data) {
        $scope.localnews = JSON.parse(String(data.data.body)).value;
        $scope.isLocNewsLoading = false;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  $scope.initializeSearch = function(query1) {
     $scope.isSearchNewsLoading = true;
      News.getBingNews(query1)
      .then(function(data) {
        $scope.searchnews = JSON.parse(String(data.data.body)).value;
        $scope.isSearchNewsLoading = false;
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  if ($window.navigator.geolocation) {
    $window.navigator.geolocation.getCurrentPosition(function(position){
      $scope.lat = position.coords.latitude;
      $scope.long = position.coords.longitude;
      initializeLocalNews($scope.lat, $scope.long);
    });
  }

  $scope.$on('signedout', function(event) {
    $scope.searchnews = {};
  });

});
