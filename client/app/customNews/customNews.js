'use strict';

angular.module('inews.customNews', [])

.controller('customNewsController', function($scope, News, $location, CustomNewsService, $window) {
  $scope.custom1news = {};
  $scope.custom2news = {};

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

  $scope.initializeCustom1 = function(query1) {
    CustomNewsService.edit({username: $window.localStorage['com.inews'], field: 'customnews1', value: query1})
    .then(function(resp){
      // console.log(resp);
    })


      // News.getBingNews(query1)
      // .then(function(data) {
      //   $scope.custom1news = data.data.value;
      // })
      // .catch(function(error) {
      //   console.log(error);
      // });
  };

  $scope.initializeCustom2 = function(query2) {
    CustomNewsService.edit({username: $window.localStorage['com.inews'], field: 'customnews2', value: query2})
    .then(function(resp){
      // console.log(resp);
    })

    // News.getBingNews(query2)
    // .then(function(data) {
    //   $scope.custom2news = data.data.value;
    // })
    // .catch(function(error) {
    //   console.log(error);
    // });
  };
});
