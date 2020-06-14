(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxStubSingleton = nx.stubSingleton || require('@feizheng/next-stub-singleton');
  var MSG_IMPL = 'Must be implement.';

  var NxAbstractRequest = nx.declare('nx.AbstractRequest', {
    statics: nx.mix(null, nxStubSingleton()),
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, this.defaults(), inOptions);
      },
      defaults: function () {
        return null;
      },
      request: function (inUrl, inMethod, inData, inOptions) {
        nx.error(MSG_IMPL);
      },
      'get,post,put,patch,delete,head': function (inMethod) {
        return function (inUrl, inData, inOptions) {
          return this.request(inUrl, inMethod, inData, inOptions);
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAbstractRequest;
  }
})();
