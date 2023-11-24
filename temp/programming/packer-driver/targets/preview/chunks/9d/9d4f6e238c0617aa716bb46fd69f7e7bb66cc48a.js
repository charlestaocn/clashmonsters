System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, randomRangeInt, _decorator, ModalWindow, UIButton, LevelUpSkill, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ChestModalWindow;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfModalWindow(extras) {
    _reporterNs.report("ModalWindow", "../../Services/ModalWindowSystem/ModalWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIButton(extras) {
    _reporterNs.report("UIButton", "../../Services/UI/Button/UIButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelUpModalWindowParams(extras) {
    _reporterNs.report("LevelUpModalWindowParams", "../UI/LevelUpWindow/LevelUpModalWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelUpSkill(extras) {
    _reporterNs.report("LevelUpSkill", "../UI/LevelUpWindow/LevelUpSkill", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgradeType(extras) {
    _reporterNs.report("UpgradeType", "../Upgrades/UpgradeType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      randomRangeInt = _cc.randomRangeInt;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ModalWindow = _unresolved_2.ModalWindow;
    }, function (_unresolved_3) {
      UIButton = _unresolved_3.UIButton;
    }, function (_unresolved_4) {
      LevelUpSkill = _unresolved_4.LevelUpSkill;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "422c899zDhMapxhQgwpGmEL", "ChestModalWindow", undefined);

      __checkObsolete__(['randomRangeInt', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ChestModalWindow", ChestModalWindow = (_dec = ccclass("ChestModalWindow"), _dec2 = property(_crd && LevelUpSkill === void 0 ? (_reportPossibleCrUseOfLevelUpSkill({
        error: Error()
      }), LevelUpSkill) : LevelUpSkill), _dec3 = property(_crd && UIButton === void 0 ? (_reportPossibleCrUseOfUIButton({
        error: Error()
      }), UIButton) : UIButton), _dec(_class = (_class2 = class ChestModalWindow extends (_crd && ModalWindow === void 0 ? (_reportPossibleCrUseOfModalWindow({
        error: Error()
      }), ModalWindow) : ModalWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "levelUpSkill", _descriptor, this);

          _initializerDefineProperty(this, "okButton", _descriptor2, this);
        }

        setup(params) {
          var randomIndex = randomRangeInt(0, params.availableUpgrades.length - 1);
          var skillToUpgrade = params.availableUpgrades[randomIndex];
          this.levelUpSkill.init(skillToUpgrade, params.translationData);
          this.okButton.InteractedEvent.on(() => this.dismiss(skillToUpgrade), this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelUpSkill", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "okButton", [_dec3], {
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
//# sourceMappingURL=9d4f6e238c0617aa716bb46fd69f7e7bb66cc48a.js.map