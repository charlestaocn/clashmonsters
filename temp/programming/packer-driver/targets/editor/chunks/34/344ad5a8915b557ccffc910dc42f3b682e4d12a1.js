System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CCInteger, Component, _decorator, AppRoot, GameRunner, delay, UserData, Game, TestValues, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, TestGameRunner;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../AppRoot/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameRunner(extras) {
    _reporterNs.report("GameRunner", "../Menu/GameRunner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../Services/Utils/AsyncUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSettings(extras) {
    _reporterNs.report("GameSettings", "./Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISpawner(extras) {
    _reporterNs.report("ISpawner", "./Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "./Data/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "./Game", _context.meta, extras);
  }

  _export("TestValues", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }, function (_unresolved_3) {
      GameRunner = _unresolved_3.GameRunner;
    }, function (_unresolved_4) {
      delay = _unresolved_4.delay;
    }, function (_unresolved_5) {
      UserData = _unresolved_5.UserData;
    }, function (_unresolved_6) {
      Game = _unresolved_6.Game;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "605c7sb1/tOhb3LnxAsxFGX", "TestGameRunner", undefined);

      __checkObsolete__(['CCInteger', 'Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TestGameRunner", TestGameRunner = (_dec = ccclass("TestGameRunner"), _dec2 = property(CCInteger), _dec3 = property(CCInteger), _dec4 = property(CCInteger), _dec5 = property(CCInteger), _dec6 = property(CCInteger), _dec7 = property(CCInteger), _dec8 = property(CCInteger), _dec9 = property(CCInteger), _dec(_class = (_class2 = class TestGameRunner extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "startTime", _descriptor, this);

          _initializerDefineProperty(this, "startXP", _descriptor2, this);

          _initializerDefineProperty(this, "maxHpLevel", _descriptor3, this);

          _initializerDefineProperty(this, "bonusDamageLevel", _descriptor4, this);

          _initializerDefineProperty(this, "projectilePiercingLevel", _descriptor5, this);

          _initializerDefineProperty(this, "movementSpeedLevel", _descriptor6, this);

          _initializerDefineProperty(this, "xpGathererLevel", _descriptor7, this);

          _initializerDefineProperty(this, "goldGathererLevel", _descriptor8, this);
        }

        start() {
          if ((_crd && GameRunner === void 0 ? (_reportPossibleCrUseOfGameRunner({
            error: Error()
          }), GameRunner) : GameRunner).Instance.IsRunning) return;
          this.playTestGameAsync();
        }

        async playTestGameAsync() {
          while ((_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
            error: Error()
          }), Game) : Game).Instance == null || (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance == null) await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(100);

          const testUserData = new (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData)();
          testUserData.game.metaUpgrades.healthLevel = this.maxHpLevel;
          testUserData.game.metaUpgrades.overallDamageLevel = this.bonusDamageLevel;
          testUserData.game.metaUpgrades.projectilePiercingLevel = this.projectilePiercingLevel;
          testUserData.game.metaUpgrades.movementSpeedLevel = this.movementSpeedLevel;
          testUserData.game.metaUpgrades.xpGathererLevel = this.xpGathererLevel;
          testUserData.game.metaUpgrades.goldGathererLevel = this.goldGathererLevel;
          const settings = this.getTimeModifiedSettings((_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.Settings);
          (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
            error: Error()
          }), Game) : Game).Instance.play(testUserData, settings, (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.TranslationData, {
            startTime: this.startTime,
            startXP: this.startXP
          });
        }

        getTimeModifiedSettings(settings) {
          const spawners = [...settings.enemyManager.circularEnemySpawners, ...settings.enemyManager.individualEnemySpawners, ...settings.enemyManager.waveEnemySpawners];

          for (const spawner of spawners) {
            spawner.common.startDelay -= this.startTime;
            spawner.common.stopDelay -= this.startTime;
          }

          return settings;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startXP", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "maxHpLevel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bonusDamageLevel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "projectilePiercingLevel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "movementSpeedLevel", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "xpGathererLevel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "goldGathererLevel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _export("TestValues", TestValues = class TestValues {
        constructor() {
          this.startTime = 0;
          this.startXP = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=344ad5a8915b557ccffc910dc42f3b682e4d12a1.js.map