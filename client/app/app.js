'use strict';

angular.module('inews', [
  'ngMaterial',
  'inews.services',
  'inews.authentication',
  'inews.defaultNews',
  'inews.localNews',
  'inews.customNews',
  'inews.navigation'
])
.config(function($httpProvider) {
  $httpProvider.interceptors.push('AttachToken');
})
.factory('AttachToken', function($window) {
  var attach = {
    request: function(object) {
      var jwt = $window.localStorage.getItem('com.inews');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };

  return attach;
});
