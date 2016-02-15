'use strict';

describe('myApp.restaurants module', function() {

  beforeEach(module('myApp.restaurants'));

  describe('restaurants controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('RestaurantsCtrl');
      expect(RestaurantsCtrl).toBeDefined();
    }));

  });
});