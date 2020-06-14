(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxAbstractRequest = require('../src/next-abstract-request');

  describe('NxAbstractRequest.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
