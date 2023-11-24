System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, MenuModalWindowTypes, ModalWindow, UIButton, LevelUpModalWindow, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, PauseModalWindow;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMenuModalWindowTypes(extras) {
    _reporterNs.report("MenuModalWindowTypes", "../../Menu/ModalWindows/MenuModalWindowTypes", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalWindow(extras) {
    _reporterNs.report("ModalWindow", "../../Services/ModalWindowSystem/ModalWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalWindowManager(extras) {
    _reporterNs.report("ModalWindowManager", "../../Services/ModalWindowSystem/ModalWindowManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIButton(extras) {
    _reporterNs.report("UIButton", "../../Services/UI/Button/UIButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelUpModalWindow(extras) {
    _reporterNs.report("LevelUpModalWindow", "../UI/LevelUpWindow/LevelUpModalWindow", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      MenuModalWindowTypes = _unresolved_2.MenuModalWindowTypes;
    }, function (_unresolved_3) {
      ModalWindow = _unresolved_3.ModalWindow;
    }, function (_unresolved_4) {
      UIButton = _unresolved_4.UIButton;
    }, function (_unresolved_5) {
      LevelUpModalWindow = _unresolved_5.LevelUpModalWindow;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7951egxdo1MwZEP2TuQOLOq", "PauseModalWindow", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PauseModalWindow", PauseModalWindow = (_dec = ccclass("PauseModalWindow"), _dec2 = property(_crd && UIButton === void 0 ? (_reportPossibleCrUseOfUIButton({
        error: Error()
      }), UIButton) : UIButton), _dec3 = property(_crd && UIButton === void 0 ? (_reportPossibleCrUseOfUIButton({
        error: Error()
      }), UIButton) : UIButton), _dec4 = property(_crd && UIButton === void 0 ? (_reportPossibleCrUseOfUIButton({
        error: Error()
      }), UIButton) : UIButton), _dec(_class = (_class2 = class PauseModalWindow extends (_crd && ModalWindow === void 0 ? (_reportPossibleCrUseOfModalWindow({
        error: Error()
      }), ModalWindow) : ModalWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "continueBtn", _descriptor, this);

          _initializerDefineProperty(this, "audioSettingsButton", _descriptor2, this);

          _initializerDefineProperty(this, "exitBtn", _descriptor3, this);

          this.modalWindowManager = void 0;
        }

        setup(modalWindowManager) {
          this.modalWindowManager = modalWindowManager;
          this.continueBtn.InteractedEvent.on(this.continueGame, this);
          this.audioSettingsButton.InteractedEvent.on(this.openSettingsWindow, this);
          this.exitBtn.InteractedEvent.on(this.exitGame, this);
        }

        openSettingsWindow() {
          this.modalWindowManager.showModal((_crd && MenuModalWindowTypes === void 0 ? (_reportPossibleCrUseOfMenuModalWindowTypes({
            error: Error()
          }), MenuModalWindowTypes) : MenuModalWindowTypes).AudioSettings, {});
        }

        continueGame() {
          this.dismiss(false);
        }

        exitGame() {
          this.modalWindowManager.closeModel((_crd && LevelUpModalWindow === void 0 ? (_reportPossibleCrUseOfLevelUpModalWindow({
            error: Error()
          }), LevelUpModalWindow) : LevelUpModalWindow).name);
          this.dismiss(true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "continueBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "audioSettingsButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "exitBtn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e4146c7fc86bdd7c1541e5ab66ba364990dfe355.js.map