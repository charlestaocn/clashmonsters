System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Signal, _crd;

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "./ISignal", _context.meta, extras);
  }

  _export("Signal", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "421ffEMfhNPp4RKAD/X5zjK", "Signal", undefined); // Need to capture *this*

      /* eslint-disable @typescript-eslint/no-explicit-any */


      _export("Signal", Signal = class Signal {
        constructor() {
          this.handlers = [];
          this.thisArgs = [];
        }

        on(handler, thisArg) {
          this.handlers.push(handler);
          this.thisArgs.push(thisArg);
        }

        off(handler) {
          var index = this.handlers.indexOf(handler);
          this.handlers.splice(index, 1);
          this.thisArgs.splice(index, 1);
        }

        trigger(data) {
          // protect from trigger >> off
          var handlers = [...this.handlers];
          var thisArgs = [...this.thisArgs];

          for (var i = 0; i < handlers.length; i++) {
            handlers[i].call(thisArgs[i], data);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c01c17b74ab8fb2183dbcd3207aede9415bb10c.js.map