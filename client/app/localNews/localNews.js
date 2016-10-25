angular.module('inews.localNews', [])

.controller('localNewsController', function($scope, News, $location, $window) {
  $scope.localnews = {};
  $scope.searchnews = {};
  $scope.lim1 = 3;
  $scope.lim2 = 3;

  $scope.lat;
  $scope.long;

  $scope.loadMore1 = function() {
    $scope.lim1 = 10;
  }

  $scope.loadMore2 = function() {
    $scope.lim2 = 10;
  }

  var initializeLocalNews = function(lat, long) {
    News.getNeighborhood(lat, long)
      .then(function(data) {
        return News.getBingNews(data.neighbourhood.split(' ').join('+') + '+' + data.city.split(' ').join('+'));
      })
      .then(function(data) {
        $scope.localnews = data.data.value;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  $scope.initializeSearch = function(query1) {
      News.getBingNews(query1)
      .then(function(data) {
        $scope.searchnews = data.data.value;
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

});
