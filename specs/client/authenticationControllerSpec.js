// 'use strict';
//
// describe('Authentication controller', function() {
//   var $scope, $rootScope, $window, $httpBackend, createController, AuthenticationService;
//
//   beforeEach(module('inews'));
//   beforeEach(inject(function($injector) {
//     $rootScope = $injector.get('$rootScope');
//     $window = $injector.get('$window');
//     $httpBackend = $injector.get('$httpBackend');
//     AuthenticationService = $injector.get('AuthenticationService');
//     $scope = $rootScope.$new();
//
//     var $controller = $injector.get('$controller');
//     createController = function() {
//       return $controller('AuthenticationController', {
//         $scope: $scope,
//         $window: $window,
//         AuthenticationService: AuthenticationService
//       });
//     };
//
//     createController();
//   }));
//
//   afterEach(function() {
//     $httpBackend.verifyNoOutstandingExpectation();
//     $httpBackend.verifyNoOutstandingRequest();
//     $window.localStorage.removeItem('com.inews');
//   });
//
//   it('should pass this canary test', function() {
//     expect(true).to.equal(true);
//   });
//
//   it('should have a signup method', function() {
//     expect($scope.signup).to.be.a('function');
//   });
//
//   it('should have a login method', function() {
//     expect($scope.login).to.be.a('function');
//   });
//
//   it('should have a logout method', function() {
//     expect($scope.logout).to.be.a('function');
//   });
//
//   it('should have a isValid method', function() {
//     expect($scope.isAuth).to.be.a('function');
//   });
//
//   it('should store token in localStorage after signup', function() {
//     var fakeToken = 'eewwlleerraaii23kkww';
//
//     $httpBackend.expect('POST', '/api/user/signup').respond({token: fakeToken});
//     $scope.signup();
//     $httpBackend.flush();
//     expect($window.localStorage.getItem('com.inews')).to.equal(fakeToken);
//   });
//
//   it('should store token in localStorage after login', function() {
//     var fakeToken = 'eewwlleerraaii23kkww';
//
//     $httpBackend.expect('POST', '/api/user/login').respond({token: fakeToken});
//     $scope.login();
//     $httpBackend.flush();
//     expect($window.localStorage.getItem('com.inews')).to.equal(fakeToken);
//   });
//
//   it('should remove token from localStorage after logout', function() {
//     var fakeToken = 'eewwlleerraaii23kkww';
//
//     $httpBackend.expect('POST', '/api/user/login').respond({token: fakeToken});
//     $scope.login();
//     $httpBackend.flush();
//     $scope.logout();
//     expect($window.localStorage.getItem('com.inews')).to.be.null;
//   });
//
//   it('should return true on isValid method after login', function() {
//     var fakeToken = 'eewwlleerraaii23kkww';
//
//     $httpBackend.expect('POST', '/api/user/login').respond({token: fakeToken});
//     $scope.login();
//     $httpBackend.flush();
//     expect($scope.isAuth()).to.equal(true);
//   });
//
//   it('should return false on isValid method after logout', function() {
//     var fakeToken = 'eewwlleerraaii23kkww';
//
//     $httpBackend.expect('POST', '/api/user/login').respond({token: fakeToken});
//     $scope.login();
//     $httpBackend.flush();
//     $scope.logout();
//     expect($scope.isAuth()).to.equal(false);
//   });
// });
