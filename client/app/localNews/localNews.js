angular.module('inews.localNews', [])

.controller('localNewsController', function($scope, News, $location, geolocate) {
  $scope.news = {};
  $scope.position = '';
  
  geolocate.getLoc(function(position) {
    $scope.position = position;
    console.log($scope.position);
  });
  // var initializeUSNews = function(src) {
  //   News.getDefaultNews(src)
  //     .then(function(data) {
  //       $scope.usNews = data.data.articles.slice(0,5);
  //       console.log($scope.usNews);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  // initializeUSNews('cnbc');

});