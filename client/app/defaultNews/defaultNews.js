'use strict';

angular.module('inews.defaultNews', [])

.controller('defaultNewsController', function($scope, News, $location) {
  $scope.usNews = {};
  $scope.worldNews = {};
  $scope.isUSNewsLoading = true;
  $scope.isWorldNewsLoading = true;

  $scope.lim1 = 3;
  $scope.lim2 = 3;

  $scope.loadMore1 = function() {
    if ($scope.lim1 === 3) $scope.lim1 = 10;
    else $scope.lim1 = 3;
  }

  $scope.loadMore2 = function() {
    if ($scope.lim2 === 3) $scope.lim2 = 10;
    else $scope.lim2 = 3;
  }

  var initializeUSNews = function(src) {
    $scope.isUSNewsLoading = true;
    News.getDefaultNews(src)
      .then(function(data) {
        $scope.usNews = data.data.articles.slice(0,10);
        $scope.isUSNewsLoading = false;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  var initializeWorldNews = function(src) {
    $scope.isWorldNewsLoading = true;
    News.getDefaultNews(src)
      .then(function(data) {
        $scope.worldNews = data.data.articles.slice(0,10);
        $scope.isWorldNewsLoading = false;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  initializeUSNews('cnbc');
  initializeWorldNews('google-news');
});
