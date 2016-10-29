'use strict';

angular.module('inews.navigation', [])

.controller('navController', function($scope, $mdDialog, AuthenticationService, $window) {
  $scope.user = {};

  $scope.signinshow = function() {
    $mdDialog.show({
      contentElement: '#signInDialog',
      parent: angular.element(document.body)
    });
  };

  $scope.signinCancel = function() {
    $mdDialog.hide({
      contentElement: '#signInDialog',
      parent: angular.element(document.body)
    });
  };

  $scope.signupshow = function() {
    $mdDialog.show({
      contentElement: '#signUpDialog',
      parent: angular.element(document.body)
    });
  };

  $scope.signupCancel = function() {
    $mdDialog.hide({
      contentElement: '#signInDialog',
      parent: angular.element(document.body)
    });
  };

  $scope.signup = function() {
    AuthenticationService.signup($scope.user).then(function(resp) {
      $window.localStorage.setItem('com.inews', resp.data.username);
      $mdDialog.hide({
        contentElement: '#signInDialog',
        parent: angular.element(document.body)
      });
    });
  };

  $scope.login = function() {
    AuthenticationService.login($scope.user).then(function(resp) {
      $window.localStorage.setItem('com.inews', resp.data.username);
      $mdDialog.hide({
        contentElement: '#signInDialog',
        parent: angular.element(document.body)
      });
    });
  };

  $scope.logout = function() {
    AuthenticationService.logout();
    // set the UI states after logout
  };

  $scope.isAuth = function() {
    return AuthenticationService.isAuth();
  };
});
