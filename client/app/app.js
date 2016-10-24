angular.module('inews', [
  'ngMaterial',
  'inews.services',
  'inews.defaultNews',
  'inews.localNews'
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
      return object
    }
  }

  return attach;
});