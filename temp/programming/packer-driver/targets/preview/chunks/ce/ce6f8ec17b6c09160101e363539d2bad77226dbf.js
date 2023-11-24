System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioAssets, MetaUpgradeIcons, UpgradeIcons, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameAssets;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioAssets(extras) {
    _reporterNs.report("AudioAssets", "./AudioAssets", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMetaUpgradeIcons(extras) {
    _reporterNs.report("MetaUpgradeIcons", "./MetaUpgradeIcons", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgradeIcons(extras) {
    _reporterNs.report("UpgradeIcons", "./UpgradeIcons", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      AudioAssets = _unresolved_2.AudioAssets;
    }, function (_unresolved_3) {
      MetaUpgradeIcons = _unresolved_3.MetaUpgradeIcons;
    }, function (_unresolved_4) {
      UpgradeIcons = _unresolved_4.UpgradeIcons;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "564e96LsN1Hzbs2aO5hhzLF", "GameAssets", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameAssets", GameAssets = (_dec = ccclass("GameAssets"), _dec2 = property(_crd && UpgradeIcons === void 0 ? (_reportPossibleCrUseOfUpgradeIcons({
        error: Error()
      }), UpgradeIcons) : UpgradeIcons), _dec3 = property(_crd && MetaUpgradeIcons === void 0 ? (_reportPossibleCrUseOfMetaUpgradeIcons({
        error: Error()
      }), MetaUpgradeIcons) : MetaUpgradeIcons), _dec4 = property(_crd && AudioAssets === void 0 ? (_reportPossibleCrUseOfAudioAssets({
        error: Error()
      }), AudioAssets) : AudioAssets), _dec(_class = (_class2 = class GameAssets extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "upgradeIcons", _descriptor, this);

          _initializerDefineProperty(this, "metaUpgradeIcons", _descriptor2, this);

          _initializerDefineProperty(this, "audioAssets", _descriptor3, this);
        }

        init() {
          this.upgradeIcons.init();
          this.metaUpgradeIcons.init();
        }

        get UpgradeIcons() {
          return this.upgradeIcons;
        }

        get MetaUpgradeIcons() {
          return this.metaUpgradeIcons;
        }

        get AudioAssets() {
          return this.audioAssets;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "upgradeIcons", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "metaUpgradeIcons", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "audioAssets", [_dec4], {
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
//# sourceMappingURL=ce6f8ec17b6c09160101e363539d2bad77226dbf.js.map