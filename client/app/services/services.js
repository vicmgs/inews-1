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

  var getBingNews = function(query) {
    return $http({
      method: 'GET',
      url: 'https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=' + query + '&count=10&offset=0&mkt=en-us&safeSearch=Moderate',
      headers: {"Ocp-Apim-Subscription-Key": "e3bbf6615de14f4e8e2610f061c16ac5"}
    })
    .then(function(data) {
      return data;
    });
  };

  var getNeighborhood = function(lat, long) {
    return $http({
      method: 'GET',
      url: 'http://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + long
    })
    .then(function(data) {
      return data.data.address;
    });
  };

  var getDefaultNews = function(src) {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=' + src + '&apiKey=25e1cb57f180459c8a21c273e7f6a795'
    })
    .then(function(data) {
      return data;
    });
  };

  return {
    getDefaultNews: getDefaultNews,
    getNeighborhood: getNeighborhood,
    getBingNews: getBingNews
  };

})
.factory('geolocate', function($window) {
  var getLoc = function() {
    if ($window.navigator.geolocation) {
      $window.navigator.geolocation.getCurrentPosition(function(position){
        return position;
      });
    }
  };

  return {getLoc: getLoc};

});
