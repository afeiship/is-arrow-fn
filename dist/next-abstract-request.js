/*!
 * name: @feizheng/next-abstract-request
 * description: Standard abstract request.
 * homepage: https://github.com/afeiship/next-abstract-request
 * version: 1.1.0
 * date: 2020-06-29T02:07:46.652Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxStubSingleton = nx.stubSingleton || require('@feizheng/next-stub-singleton');
  var nxParseRequestArgs = nx.parseArgs || require('@feizheng/next-parse-request-args');
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
        return function () {
          // [ method, url, data, options ]
          var args = [inMethod].concat(nxParseRequestArgs(arguments, true));
          return this.request.apply(this, args);
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAbstractRequest;
  }
})();

//# sourceMappingURL=next-abstract-request.js.map
