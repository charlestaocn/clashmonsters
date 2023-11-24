System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, delay, AppRoot, _crd;

  async function requireAppRootAsync() {
    while ((_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
      error: Error()
    }), AppRoot) : AppRoot).Instance == null) await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
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
//# sourceMappingURL=98934ba70f22af98af4da79588d0c31e1fb42688.js.map