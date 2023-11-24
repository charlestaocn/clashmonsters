System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, SpriteFrame, _decorator, MetaUpgradeType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, MetaUpgradeIcons;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMetaUpgradeType(extras) {
    _reporterNs.report("MetaUpgradeType", "../../Upgrades/UpgradeType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      SpriteFrame = _cc.SpriteFrame;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      MetaUpgradeType = _unresolved_2.MetaUpgradeType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b18fbEgJGZOJ6w+6tEMaD+0", "MetaUpgradeIcons", undefined);

      __checkObsolete__(['Component', 'SpriteFrame', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MetaUpgradeIcons", MetaUpgradeIcons = (_dec = ccclass("MetaUpgradeIcons"), _dec2 = property(SpriteFrame), _dec3 = property(SpriteFrame), _dec4 = property(SpriteFrame), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec7 = property(SpriteFrame), _dec(_class = (_class2 = class MetaUpgradeIcons extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "healthSprite", _descriptor, this);

          _initializerDefineProperty(this, "overallDamageSprite", _descriptor2, this);

          _initializerDefineProperty(this, "projectilePiercingSprite", _descriptor3, this);

          _initializerDefineProperty(this, "movementSpeedSprite", _descriptor4, this);

          _initializerDefineProperty(this, "xpGathererSprite", _descriptor5, this);

          _initializerDefineProperty(this, "goldGathererSprite", _descriptor6, this);

          this.typeToIcon = new Map();
        }

        init() {
          this.typeToIcon.set((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).Health, this.healthSprite);
          this.typeToIcon.set((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).OverallDamage, this.overallDamageSprite);
          this.typeToIcon.set((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).ProjectilePiercing, this.projectilePiercingSprite);
          this.typeToIcon.set((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).MovementSpeed, this.movementSpeedSprite);
          this.typeToIcon.set((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).XPGatherer, this.xpGathererSprite);
          this.typeToIcon.set((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).GoldGatherer, this.goldGathererSprite);
        }

        getIcon(upgradeType) {
          if (!this.typeToIcon.has(upgradeType)) throw new Error("Does not have upgrade type asset " + upgradeType);
          return this.typeToIcon.get(upgradeType);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "healthSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "overallDamageSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "projectilePiercingSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "movementSpeedSprite", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "xpGathererSprite", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "goldGathererSprite", [_dec7], {
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
//# sourceMappingURL=007878a311b4b32fcb3c9856158e5753c622b080.js.map