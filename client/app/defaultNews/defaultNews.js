angular.module('inews.defaultNews', [])

.controller('defaultNewsController', function($scope, News, $location) {
  $scope.usNews = {};
  $scope.worldNews = {};

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
