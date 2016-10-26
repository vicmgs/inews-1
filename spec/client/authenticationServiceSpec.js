'use strict';

describe('Authentication Service', function() {
  beforeEach(module('inews.services'));

  afterEach(inject(function($httpBackend) {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  }));

  describe('Authentication Factory', function() {
    var $httpBackend;
    var AuthenticationService;

    beforeEach(inject(function(_$httpBackend_, _AuthenticationService_) {
      $httpBackend = _$httpBackend_;
      AuthenticationService = _AuthenticationService_;
    }));

    it('should exist', function() {
      expect(AuthenticationService).to.exist;
    });

    it('should have `login` method', function() {
      expect(AuthenticationService.login).to.be.a('function');
    });

    it('should have `signup` method', function() {
      expect(AuthenticationService.signup).to.be.a('function');
    });

    it('should have `logout` method', function() {
      expect(AuthenticationService.logout).to.be.a('function');
    });

    it('should return username and token after `login` method', function() {
      var user = { username: 'james', password: 'secret' };
      var fakeToken = 'eewwlleerraaii23kkww';

      $httpBackend
        .expect('POST', '/api/user/login', JSON.stringify(user))
        .response(201, {
          username: 'james',
          token: fakeToken
        });

      AuthenticationService.login(user)
        .then(function(resp) {
          expect(resp.status).to.equal(201);
          expect(resp.data.token).to.equal(fakeToken);
          expect(resp.data.username).to.equal(user.username);
        });
      });

      $httpBackend.flush();
  });
});
