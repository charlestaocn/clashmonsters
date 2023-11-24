System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Canvas, Component, Label, Node, _decorator, AppRoot, requireAppRootAsync, UIButton, GameRunner, MenuModalLauncher, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, Menu;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../AppRoot/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrequireAppRootAsync(extras) {
    _reporterNs.report("requireAppRootAsync", "../AppRoot/AppRootUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMetaUpgradeSettings(extras) {
    _reporterNs.report("MetaUpgradeSettings", "../Game/Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMetaUpgradesData(extras) {
    _reporterNs.report("MetaUpgradesData", "../Game/Data/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIButton(extras) {
    _reporterNs.report("UIButton", "../Services/UI/Button/UIButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRunner(extras) {
    _reporterNs.report("GameRunner", "./GameRunner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMenuModalLauncher(extras) {
    _reporterNs.report("MenuModalLauncher", "./ModalWindows/MenuModalLauncher", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Canvas = _cc.Canvas;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }, function (_unresolved_3) {
      requireAppRootAsync = _unresolved_3.requireAppRootAsync;
    }, function (_unresolved_4) {
      UIButton = _unresolved_4.UIButton;
    }, function (_unresolved_5) {
      GameRunner = _unresolved_5.GameRunner;
    }, function (_unresolved_6) {
      MenuModalLauncher = _unresolved_6.MenuModalLauncher;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22c61zFd7hNRaAttffaS6ep", "Menu", undefined);

      __checkObsolete__(['approx', 'Canvas', 'Component', 'Label', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Menu", Menu = (_dec = ccclass("Menu"), _dec2 = property(_crd && UIButton === void 0 ? (_reportPossibleCrUseOfUIButton({
        error: Error()
      }), UIButton) : UIButton), _dec3 = property(_crd && UIButton === void 0 ? (_reportPossibleCrUseOfUIButton({
        error: Error()
      }), UIButton) : UIButton), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(_crd && UIButton === void 0 ? (_reportPossibleCrUseOfUIButton({
        error: Error()
      }), UIButton) : UIButton), _dec8 = property(Canvas), _dec9 = property(Label), _dec(_class = (_class2 = class Menu extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "playBtn", _descriptor, this);

          _initializerDefineProperty(this, "upgradeBtn", _descriptor2, this);

          _initializerDefineProperty(this, "upgradeAvailableIndicator", _descriptor3, this);

          _initializerDefineProperty(this, "goldCounter", _descriptor4, this);

          _initializerDefineProperty(this, "goldLabel", _descriptor5, this);

          _initializerDefineProperty(this, "audioSettingsBtn", _descriptor6, this);

          _initializerDefineProperty(this, "menuCanvas", _descriptor7, this);

          _initializerDefineProperty(this, "highscoreLabel", _descriptor8, this);

          this.menuModalLauncher = void 0;
        }

        async start() {
          (_crd && requireAppRootAsync === void 0 ? (_reportPossibleCrUseOfrequireAppRootAsync({
            error: Error()
          }), requireAppRootAsync) : requireAppRootAsync)();
          this.menuCanvas.cameraComponent = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.MainCamera;
          this.playBtn.InteractedEvent.on(this.startGame, this);
          this.upgradeBtn.InteractedEvent.on(this.openUpgradesWindow, this);
          this.audioSettingsBtn.InteractedEvent.on(this.openAudioSettingsWindow, this);
          this.menuModalLauncher = new (_crd && MenuModalLauncher === void 0 ? (_reportPossibleCrUseOfMenuModalLauncher({
            error: Error()
          }), MenuModalLauncher) : MenuModalLauncher)((_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.ModalWindowManager);
          this.highscoreLabel.string = `Highscore: ${Math.floor((_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.LiveUserData.game.highscore)}`;
          this.updateGoldIndicators();
        }

        updateGoldIndicators() {
          this.upgradeAvailableIndicator.active = this.isUpgradeAffordable();
          const goldCoins = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.LiveUserData.game.goldCoins;
          this.goldCounter.active = true;
          this.goldLabel.string = goldCoins.toString();
        }

        isUpgradeAffordable() {
          const goldCoins = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.LiveUserData.game.goldCoins;
          const metaUpgrades = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.LiveUserData.game.metaUpgrades;
          const metaUpgradesSettings = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.Settings.metaUpgrades;
          const costs = [];
          this.tryPushLowestCost(metaUpgrades.goldGathererLevel, metaUpgradesSettings.goldGatherer, costs);
          this.tryPushLowestCost(metaUpgrades.healthLevel, metaUpgradesSettings.health, costs);
          this.tryPushLowestCost(metaUpgrades.movementSpeedLevel, metaUpgradesSettings.movementSpeed, costs);
          this.tryPushLowestCost(metaUpgrades.overallDamageLevel, metaUpgradesSettings.overallDamage, costs);
          this.tryPushLowestCost(metaUpgrades.projectilePiercingLevel, metaUpgradesSettings.projectilePiercing, costs);
          this.tryPushLowestCost(metaUpgrades.xpGathererLevel, metaUpgradesSettings.xpGatherer, costs);
          return 0 < costs.length ? Math.min(...costs) <= goldCoins : false;
        }

        tryPushLowestCost(upgradeLevel, metaUpgradeSettings, costs) {
          if (upgradeLevel < metaUpgradeSettings.costs.length) {
            costs.push(metaUpgradeSettings.costs[upgradeLevel]);
          }
        }

        startGame() {
          (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.ScreenFader.playOpen();
          (_crd && GameRunner === void 0 ? (_reportPossibleCrUseOfGameRunner({
            error: Error()
          }), GameRunner) : GameRunner).Instance.playGame();
        }

        async openUpgradesWindow() {
          await this.menuModalLauncher.openUpgradesWindow();
          this.updateGoldIndicators();
        }

        openAudioSettingsWindow() {
          this.menuModalLauncher.openAudioSettingsWindow();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "upgradeBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "upgradeAvailableIndicator", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "goldCounter", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "goldLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "audioSettingsBtn", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "menuCanvas", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "highscoreLabel", [_dec9], {
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
//# sourceMappingURL=b383cb1feb8a40bd1ddd93d974a0daf5790c0053.js.map