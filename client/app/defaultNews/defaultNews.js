angular.module('inews.defaultNews', [])

.controller('defaultNewsController', function($scope, News, $location) {
  $scope.usNews = {};
  $scope.worldNews = {};

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
    News.getDefaultNews(src)
      .then(function(data) {
        $scope.usNews = data.data.articles.slice(0,10);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  var initializeWorldNews = function(src) {
    News.getDefaultNews(src)
      .then(function(data) {
        $scope.worldNews = data.data.articles.slice(0,10);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  initializeUSNews('cnbc');
  initializeWorldNews('google-news');
});
