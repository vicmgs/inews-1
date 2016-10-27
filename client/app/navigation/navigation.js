'use strict';

angular.module('inews.navigation', [])

.controller('navController', function($scope, $mdDialog) {

  $scope.signIn = function() {
    $mdDialog.show({
      contentElement: '#signInDialog',
      parent: angular.element(document.body)
    });
  };

  $scope.signUp = function() {
    $mdDialog.show({
      contentElement: '#signUpDialog',
      parent: angular.element(document.body)
    });
  };
});
