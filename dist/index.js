/*!
 * name: @jswork/next-abstract-request
 * description: Standard abstract request.
 * homepage: https://github.com/afeiship/next-abstract-request
 * version: 1.0.0
 * date: 2020-11-19 14:10:16
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxStubSingleton = nx.stubSingleton || require('@jswork/next-stub-singleton');
  var nxParseRequestArgs = nx.parseArgs || require('@jswork/next-parse-request-args');
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
      request: function (inMethod, inUrl, inData, inOptions) {
        nx.error(MSG_IMPL);
      },
      'get,post,put,patch,delete,head': function (inMethod) {
        return function () {
          // [ method, url, data, options ]
          var inputArgs = [inMethod].concat(nx.slice(arguments));
          var args = nxParseRequestArgs(inputArgs, true);
          return this.request.apply(this, args);
        };
      }
    }
  });


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAbstractRequest;
  }
})();
