System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, delay, AppRoot, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function requireAppRootAsync() {
    return _requireAppRootAsync.apply(this, arguments);
  }

  function _requireAppRootAsync() {
    _requireAppRootAsync = _asyncToGenerator(function* () {
      while ((_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
        error: Error()
      }), AppRoot) : AppRoot).Instance == null) yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
        error: Error()
      }), delay) : delay)(10);

      (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
        error: Error()
      }), AppRoot) : AppRoot).Instance.node.setSiblingIndex(1000); // render on top

      (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
        error: Error()
      }), AppRoot) : AppRoot).Instance.node.active = false; // forces engine to reorder by hierarchy

      (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
        error: Error()
      }), AppRoot) : AppRoot).Instance.node.active = true;
    });
    return _requireAppRootAsync.apply(this, arguments);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../Services/Utils/AsyncUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "./AppRoot", _context.meta, extras);
  }

  _export("requireAppRootAsync", requireAppRootAsync);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      delay = _unresolved_2.delay;
    }, function (_unresolved_3) {
      AppRoot = _unresolved_3.AppRoot;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43cfbVDTGJMNrso8wey4dKA", "AppRootUtils", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=79b461952dcecd4dcb57074f9c1e34ba91901d28.js.map