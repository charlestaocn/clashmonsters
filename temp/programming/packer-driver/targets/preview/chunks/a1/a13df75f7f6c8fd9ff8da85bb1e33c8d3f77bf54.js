System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioClip, instantiate, Label, Node, Prefab, _decorator, AppRoot, MetaUpgradeType, ModalWindow, UpgradeUI, Empty, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, UpgradesModalWindow;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../../../AppRoot/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMetaUpgradeSettings(extras) {
    _reporterNs.report("MetaUpgradeSettings", "../../../Game/Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMetaUpgradesData(extras) {
    _reporterNs.report("MetaUpgradesData", "../../../Game/Data/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../../../Game/Data/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMetaUpgradeType(extras) {
    _reporterNs.report("MetaUpgradeType", "../../../Game/Upgrades/UpgradeType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalWindow(extras) {
    _reporterNs.report("ModalWindow", "../../../Services/ModalWindowSystem/ModalWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgradeUI(extras) {
    _reporterNs.report("UpgradeUI", "./UpgradeUI", _context.meta, extras);
  }

  _export("Empty", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioClip = _cc.AudioClip;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }, function (_unresolved_3) {
      MetaUpgradeType = _unresolved_3.MetaUpgradeType;
    }, function (_unresolved_4) {
      ModalWindow = _unresolved_4.ModalWindow;
    }, function (_unresolved_5) {
      UpgradeUI = _unresolved_5.UpgradeUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "854a4tmkIROzYFPAwDxL3/z", "UpgradesModalWindow", undefined);

      __checkObsolete__(['AudioClip', 'instantiate', 'Label', 'Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UpgradesModalWindow", UpgradesModalWindow = (_dec = ccclass("UpgradesModalWindow"), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(AudioClip), _dec(_class = (_class2 = class UpgradesModalWindow extends (_crd && ModalWindow === void 0 ? (_reportPossibleCrUseOfModalWindow({
        error: Error()
      }), ModalWindow) : ModalWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "upgradeButtonPrefab", _descriptor, this);

          _initializerDefineProperty(this, "upgradeButtonParent", _descriptor2, this);

          _initializerDefineProperty(this, "goldCoinsLabel", _descriptor3, this);

          _initializerDefineProperty(this, "upgradeAudioClip", _descriptor4, this);

          this.typeToLevel = new Map();
          this.typeToCosts = new Map();
          this.typeToLevelKey = new Map();
          this.typeToUpgradeUI = new Map();
          this.userData = void 0;
        }

        setup() {
          this.userData = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.LiveUserData;
          var settings = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.Settings.metaUpgrades;
          this.createUpgradeButton((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).Health, settings.health, "healthLevel");
          this.createUpgradeButton((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).OverallDamage, settings.overallDamage, "overallDamageLevel");
          this.createUpgradeButton((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).ProjectilePiercing, settings.projectilePiercing, "projectilePiercingLevel");
          this.createUpgradeButton((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).MovementSpeed, settings.movementSpeed, "movementSpeedLevel");
          this.createUpgradeButton((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).XPGatherer, settings.xpGatherer, "xpGathererLevel");
          this.createUpgradeButton((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).GoldGatherer, settings.goldGatherer, "goldGathererLevel");
          this.goldCoinsLabel.string = this.userData.game.goldCoins.toString();
        }

        createUpgradeButton(upgradeType, upgradeSettings, levelKey) {
          var upgradeButton = instantiate(this.upgradeButtonPrefab);
          var upgradeUI = upgradeButton.getComponent(_crd && UpgradeUI === void 0 ? (_reportPossibleCrUseOfUpgradeUI({
            error: Error()
          }), UpgradeUI) : UpgradeUI);
          upgradeUI.init(upgradeType, upgradeSettings, this.userData.game.metaUpgrades[levelKey], (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.TranslationData);
          upgradeUI.InteractedEvent.on(this.tryUpgrade, this);
          upgradeButton.setParent(this.upgradeButtonParent);
          this.typeToLevel.set(upgradeType, this.userData.game.metaUpgrades[levelKey]);
          this.typeToCosts.set(upgradeType, upgradeSettings.costs);
          this.typeToLevelKey.set(upgradeType, levelKey);
          this.typeToUpgradeUI.set(upgradeType, upgradeUI);
        }

        tryUpgrade(upgradeType) {
          console.log("Trying to upgrade " + upgradeType);
          var costs = this.typeToCosts.get(upgradeType);
          var currentLevel = this.typeToLevel.get(upgradeType);
          if (costs.length <= currentLevel) return; // already max level

          if (this.userData.game.goldCoins < costs[currentLevel]) return; // not enough gold

          (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.AudioPlayer.playSound(this.upgradeAudioClip);
          this.userData.game.goldCoins -= costs[currentLevel];
          var level = ++this.userData.game.metaUpgrades[this.typeToLevelKey.get(upgradeType)];
          this.typeToUpgradeUI.get(upgradeType).updateLevel(level);
          this.typeToLevel.set(upgradeType, level);
          this.goldCoinsLabel.string = this.userData.game.goldCoins.toString();
          (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.saveUserData();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "upgradeButtonPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "upgradeButtonParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "goldCoinsLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "upgradeAudioClip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _export("Empty", Empty = class Empty {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a13df75f7f6c8fd9ff8da85bb1e33c8d3f77bf54.js.map