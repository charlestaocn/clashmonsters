System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function delay(_x) {
    return _delay.apply(this, arguments);
  }

  function _delay() {
    _delay = _asyncToGenerator(function* (ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    });
    return _delay.apply(this, arguments);
  }

  _export("delay", delay);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a920eXh9GlPS62B+ifUnwOJ", "AsyncUtils", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e56e8756cdeda5720adc9177a58791fe4380322f.js.map