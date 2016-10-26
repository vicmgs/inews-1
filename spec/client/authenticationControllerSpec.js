'use strict';

describe('Authentication controllers', function() {
  var $scope, $rootScope, $location, $window, $httpBackend, createController, AuthenticationService;

  beforeEach(module('inews'));
  beforeEach(inject(function($injector) {

    $rootScope = $injector.get('$rootScope');
    $location = $injector.get('$location');
    $window = $injector.get('$window');
    $httpBackend = $injector.get('$httpBackend');
    AuthenticationService = $injector.get('AuthenticationService');
    $scope = $rootScope.$new();

    var $controller = $injector.get('$controller');
    createController = function() {
      return $controller('AuthenticationController', {
        $scope: $scope,
        $window: $window,
        $location: $location,
        AuthenticationService: AuthenticationService
      });
    };

    createController();
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
    $window.localStorage.removeItem('inews');
  });

  it('should have a signup method', function() {
    expect($scope.signup).to.be.a('function');
  });

  it('should have a login method', function() {
    expect($scope.login).to.be.a('function');
  });

  it('should have a logout method', function() {
    expect($scope.logout).to.be.a('function');
  });

  it('should store token in localStorage after signup', function() {
    var fakeToken = 'eewwlleerraaii23kkww';

    $httpBackend.expectPOST('/api/users/signup').response({token: fakeToken});
    $scope.signup();
    $httpBackend.flush();
    expect($window.localStorage.getItem('inews')).to.equal(fakeToken);
  });

  it('should store token in localStorage after login', function() {
    var fakeToken = 'eewwlleerraaii23kkww';

    $httpBackend.expectPOST('/api/users/signup').response({token: fakeToken});
    $scope.login();
    $httpBackend.flush();
    expect($window.localStorage.getItem('inews')).to.equal(fakeToken);
  });

  it('should remove token from localStorage after logout', function() {
    $scope.logout();
    expect($window.localStorage.getItem('inews')).to.be.an('undefined');
  });
});
