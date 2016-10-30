// 'use strict';
//
// describe('Services', function() {
//
//   beforeEach(module('inews.services'));
//
//   afterEach(inject(function ($httpBackend) {
//     $httpBackend.verifyNoOutstandingExpectation();
//     $httpBackend.verifyNoOutstandingRequest();
//   }));
//
//   describe('Authentication Factory', function() {
//     var $httpBackend, $window, AuthenticationService;
//
//     beforeEach(inject(function (_$httpBackend_, _$window_, _AuthenticationService_) {
//       $httpBackend = _$httpBackend_;
//       $window = _$window_;
//       AuthenticationService = _AuthenticationService_;
//     }));
//
//     it('should pass this canary test', function() {
//         expect(true).to.equal(true);
//     });
//
//     it('should exist', function() {
//       expect(AuthenticationService).to.exist;
//     });
//
//     it('should have `login` method', function() {
//       expect(AuthenticationService.login).to.be.a('function');
//     });
//
//     it('should have `signup` method', function() {
//       expect(AuthenticationService.signup).to.be.a('function');
//     });
//
//     it('should have `logout` method', function() {
//       expect(AuthenticationService.logout).to.be.a('function');
//     });
//
//     it('should return token after `login` method', function() {
//       var user = { username: 'james', password: 'secret' };
//       var fakeToken = 'eewwlleerraaii23kkww';
//
//       $httpBackend
//         .expect('POST', '/api/user/login', JSON.stringify(user))
//         .respond(201, {
//           token: fakeToken
//         });
//
//       AuthenticationService.login(user).then(function(resp) {
//         expect(resp.status).to.equal(201);
//         expect(resp.data.token).to.equal(fakeToken);
//       });
//
//       $httpBackend.flush();
//     });
//   });
// });
