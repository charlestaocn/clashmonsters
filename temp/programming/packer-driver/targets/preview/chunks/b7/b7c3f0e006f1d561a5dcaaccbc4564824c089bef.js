System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, instantiate, Label, Node, Prefab, Sprite, _decorator, AppRoot, Signal, UIButton, formatString, UpgradeLevelPointUI, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, UpgradeUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../../../AppRoot/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMetaUpgradeSettings(extras) {
    _reporterNs.report("MetaUpgradeSettings", "../../../Game/Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTranslationData(extras) {
    _reporterNs.report("TranslationData", "../../../Game/Data/TranslationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMetaUpgradeType(extras) {
    _reporterNs.report("MetaUpgradeType", "../../../Game/Upgrades/UpgradeType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../../Services/EventSystem/Signal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIButton(extras) {
    _reporterNs.report("UIButton", "../../../Services/UI/Button/UIButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfformatString(extras) {
    _reporterNs.report("formatString", "../../../Services/Utils/StringUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgradeLevelPointUI(extras) {
    _reporterNs.report("UpgradeLevelPointUI", "./UpgradeLevelPointUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }, function (_unresolved_3) {
      Signal = _unresolved_3.Signal;
    }, function (_unresolved_4) {
      UIButton = _unresolved_4.UIButton;
    }, function (_unresolved_5) {
      formatString = _unresolved_5.formatString;
    }, function (_unresolved_6) {
      UpgradeLevelPointUI = _unresolved_6.UpgradeLevelPointUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76eda6MFrpILZH9KDOZFHWs", "UpgradeUI", undefined);

      __checkObsolete__(['Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UpgradeUI", UpgradeUI = (_dec = ccclass("UpgradeUI"), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Sprite), _dec9 = property(_crd && UIButton === void 0 ? (_reportPossibleCrUseOfUIButton({
        error: Error()
      }), UIButton) : UIButton), _dec(_class = (_class2 = class UpgradeUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "levelPointPrefab", _descriptor, this);

          _initializerDefineProperty(this, "levelPointsParent", _descriptor2, this);

          _initializerDefineProperty(this, "title", _descriptor3, this);

          _initializerDefineProperty(this, "description", _descriptor4, this);

          _initializerDefineProperty(this, "cost", _descriptor5, this);

          _initializerDefineProperty(this, "maxLevel", _descriptor6, this);

          _initializerDefineProperty(this, "icon", _descriptor7, this);

          _initializerDefineProperty(this, "uiButton", _descriptor8, this);

          this.interactedEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.upgradeType = void 0;
          this.upgradeSettings = void 0;
          this.translationData = void 0;
          this.levelPointUIs = [];
        }

        init(upgradeType, upgradeSettings, level, translationData) {
          this.upgradeType = upgradeType;
          this.upgradeSettings = upgradeSettings;
          this.translationData = translationData;
          this.icon.spriteFrame = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.GameAssets.MetaUpgradeIcons.getIcon(upgradeType);
          this.title.string = "" + translationData[upgradeType + "_TITLE"];
          this.uiButton.InteractedEvent.on(() => this.interactedEvent.trigger(upgradeType), this);

          for (var i = 0; i < this.upgradeSettings.bonuses.length; i++) {
            var node = instantiate(this.levelPointPrefab);
            node.setParent(this.levelPointsParent);
            var levelPointUI = node.getComponent(_crd && UpgradeLevelPointUI === void 0 ? (_reportPossibleCrUseOfUpgradeLevelPointUI({
              error: Error()
            }), UpgradeLevelPointUI) : UpgradeLevelPointUI);
            levelPointUI.init();
            this.levelPointUIs.push(levelPointUI);
          }

          this.updateLevel(level);
        }

        updateLevel(level) {
          for (var i = 0; i < this.levelPointUIs.length; i++) {
            if (i < level) {
              this.levelPointUIs[i].upgrade();
            }
          }

          if (level < this.upgradeSettings.bonuses.length) {
            this.maxLevel.node.active = false;
            this.description.string = (_crd && formatString === void 0 ? (_reportPossibleCrUseOfformatString({
              error: Error()
            }), formatString) : formatString)("" + this.translationData[this.upgradeType + "_DESC"], [this.upgradeSettings.bonuses[level].toString()]);
            this.cost.string = this.upgradeSettings.costs[level].toString();
          } else {
            // reached max level
            this.maxLevel.node.active = true;
            this.cost.node.active = false;
            this.description.node.active = false;
          }
        }

        get InteractedEvent() {
          return this.interactedEvent;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelPointPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "levelPointsParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "cost", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maxLevel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "uiButton", [_dec9], {
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
//# sourceMappingURL=b7c3f0e006f1d561a5dcaaccbc4564824c089bef.js.map