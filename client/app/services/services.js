angular.module('inews.services', [])

.factory('News', function($http) {

  // var getCurrentLocation = function(lat, long) {
  //   var url = 'http://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + long ;
  //   return $http({
  //     method: 'GET',
  //     url: url
  //   })
  //   .then(function (resp) {
  //     if (resp) {
  //       var address = resp.body.address;
  //       return {
  //         neigbourhood: address.neighbourhood,
  //         city: address.city,
  //         state: address.state,
  //         country: address.country_code
  //       }
  //     }
  //   });
  // };

  // var getLocalNews = function(locationInfo) {

  // };

  var getDefaultNews = function(src) {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=' + src + '&apiKey=25e1cb57f180459c8a21c273e7f6a795'
    })
    .then(function(data) {
      return data;
    });
  }
  return {
    getDefaultNews: getDefaultNews
  }

})
.factory('geolocate', function($window) {
  var getLoc = function() {
    if ($window.navigator.geolocation) {
      
      $window.navigator.geolocation.getCurrentPosition(function(position){
        console.log('here');
        return position;
      });
    }
  };

  return {getLoc: getLoc};

});