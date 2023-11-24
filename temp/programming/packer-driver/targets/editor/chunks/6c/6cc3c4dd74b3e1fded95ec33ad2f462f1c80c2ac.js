System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MenuModalWindowTypes, MenuModalLauncher, _crd;

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

        async openUpgradesWindow() {
          await this.modalWindowManager.showModal((_crd && MenuModalWindowTypes === void 0 ? (_reportPossibleCrUseOfMenuModalWindowTypes({
            error: Error()
          }), MenuModalWindowTypes) : MenuModalWindowTypes).Upgrades, {});
        }

        async openAudioSettingsWindow() {
          await this.modalWindowManager.showModal((_crd && MenuModalWindowTypes === void 0 ? (_reportPossibleCrUseOfMenuModalWindowTypes({
            error: Error()
          }), MenuModalWindowTypes) : MenuModalWindowTypes).AudioSettings, {});
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6cc3c4dd74b3e1fded95ec33ad2f462f1c80c2ac.js.map