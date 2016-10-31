'use strict';

angular.module('inews.customNews', [])

.controller('customNewsController', function($http, $scope, News, $location, CustomNewsService, $window) {
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
    CustomNewsService.edit({user: $window.localStorage['com.inews'], field: 'customnews1', value: query1})
    .then(function(resp){
      News.getBingNews(query1)
      .then(function(data) {
        $scope.custom1news = JSON.parse(String(data.data.body)).value;
      })
      .catch(function(error) {
        console.log(error);
      });
    })
  };

  $scope.initializeCustom2 = function(query2) {
    CustomNewsService.edit({user: $window.localStorage['com.inews'], field: 'customnews2', value: query2})
    .then(function(resp){
      News.getBingNews(query2)
      .then(function(data) {
        $scope.custom2news = JSON.parse(String(data.data.body)).value;
      })
      .catch(function(error) {
        console.log(error);
      });
    })
  };

  $scope.$on('signedin', function(event, arg) {
    $http({
      method: 'GET',
      url: '/api/user/' + arg
    })
    .then(function(resp){
      if (!!resp.data[0].customnews1) {
        News.getBingNews(resp.data[0].customnews1)
        .then(function(data) {
          $scope.city1 = resp.data[0].customnews1;
          $scope.custom1news = JSON.parse(String(data.data.body)).value;
        })
        .catch(function(error) {
          console.log(error);
        });
      }

      if(!!resp.data[0].customnews2) {
        News.getBingNews(resp.data[0].customnews2)
        .then(function(data) {
          $scope.city2 = resp.data[0].customnews2;
          $scope.custom2news = JSON.parse(String(data.data.body)).value;
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    })
  });

  $scope.$on('signedout', function(event) {
    $scope.city1 = '';
    $scope.city2 = '';
    $scope.custom2news = {};
    $scope.custom1news = {};
  });
});
