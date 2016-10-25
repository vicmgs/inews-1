angular.module('inews.customNews', [])

.controller('customNewsController', function($scope, News, $location) {
  $scope.custom1news = {};
  $scope.custom2news = {};

  $scope.lim1 = 3;
  $scope.lim2 = 3;

  $scope.loadMore1 = function() {
    $scope.lim1 = 10;
  }

  $scope.loadMore2 = function() {
    $scope.lim2 = 10;
  }

  $scope.initializeCustom1 = function(query1) {
      News.getBingNews(query1)
      .then(function(data) {
        $scope.custom1news = data.data.value;
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  $scope.initializeCustom2 = function(query2) {
      News.getBingNews(query2)
      .then(function(data) {
        $scope.custom2news = data.data.value;
      })
      .catch(function(error) {
        console.log(error);
      });
  };


  $scope.initializeCustom1('Business');
  $scope.initializeCustom2('Sports');
});
