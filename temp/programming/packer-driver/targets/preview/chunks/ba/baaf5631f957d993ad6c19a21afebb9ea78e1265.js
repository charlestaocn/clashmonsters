System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MenuModalWindowTypes, MenuModalLauncher, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfModalWindowManager(extras) {
    _reporterNs.report("ModalWindowManager", "../../Services/ModalWindowSystem/ModalWindowManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMenuModalWindowTypes(extras) {
    _reporterNs.report("MenuModalWindowTypes", "./MenuModalWindowTypes", _context.meta, extras);
  }

  _export("MenuModalLauncher", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MenuModalWindowTypes = _unresolved_2.MenuModalWindowTypes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc622fSex1J84Wiq9uC4WOL", "MenuModalLauncher", undefined);

      _export("MenuModalLauncher", MenuModalLauncher = class MenuModalLauncher {
        constructor(modalWindowManager) {
          this.modalWindowManager = modalWindowManager;
        }

        openUpgradesWindow() {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield _this.modalWindowManager.showModal((_crd && MenuModalWindowTypes === void 0 ? (_reportPossibleCrUseOfMenuModalWindowTypes({
              error: Error()
            }), MenuModalWindowTypes) : MenuModalWindowTypes).Upgrades, {});
          })();
        }

        openAudioSettingsWindow() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            yield _this2.modalWindowManager.showModal((_crd && MenuModalWindowTypes === void 0 ? (_reportPossibleCrUseOfMenuModalWindowTypes({
              error: Error()
            }), MenuModalWindowTypes) : MenuModalWindowTypes).AudioSettings, {});
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=baaf5631f957d993ad6c19a21afebb9ea78e1265.js.map