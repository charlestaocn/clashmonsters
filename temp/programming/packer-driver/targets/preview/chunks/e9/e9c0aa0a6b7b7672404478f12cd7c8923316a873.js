System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Canvas, Component, KeyCode, Vec2, _decorator, Node, AppRoot, requireAppRootAsync, delay, GameAudioAdapter, Background, MagnetCollisionSystem, PlayerCollisionSystem, PlayerProjectileCollisionSystem, WeaponCollisionSystem, KeyboardInput, MultiInput, VirtualJoystic, ItemAttractor, ItemManager, GameModalLauncher, Pauser, GameUI, EnemyDeathEffectSpawner, EnemyManager, EnemyProjectileLauncher, MetaUpgrades, Player, PlayerData, HaloProjectileLauncher, ProjectileData, ProjectileLauncher, WaveProjectileLauncher, Upgrader, MetaUpgradeType, GameResult, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _class3, _crd, ccclass, property, Game;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../AppRoot/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrequireAppRootAsync(extras) {
    _reporterNs.report("requireAppRootAsync", "../AppRoot/AppRootUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../Services/Utils/AsyncUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameAudioAdapter(extras) {
    _reporterNs.report("GameAudioAdapter", "./Audio/GameAudioAdapter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBackground(extras) {
    _reporterNs.report("Background", "./Background/Background", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMagnetCollisionSystem(extras) {
    _reporterNs.report("MagnetCollisionSystem", "./Collision/MagnetCollisionSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerCollisionSystem(extras) {
    _reporterNs.report("PlayerCollisionSystem", "./Collision/PlayerCollisionSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerProjectileCollisionSystem(extras) {
    _reporterNs.report("PlayerProjectileCollisionSystem", "./Collision/PlayerProjectileCollisionSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponCollisionSystem(extras) {
    _reporterNs.report("WeaponCollisionSystem", "./Collision/WeaponCollisionSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameSettings(extras) {
    _reporterNs.report("GameSettings", "./Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerSettings(extras) {
    _reporterNs.report("PlayerSettings", "./Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTranslationData(extras) {
    _reporterNs.report("TranslationData", "./Data/TranslationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "./Data/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKeyboardInput(extras) {
    _reporterNs.report("KeyboardInput", "./Input/KeyboardInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMultiInput(extras) {
    _reporterNs.report("MultiInput", "./Input/MultiInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVirtualJoystic(extras) {
    _reporterNs.report("VirtualJoystic", "./Input/VirtualJoystic", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemAttractor(extras) {
    _reporterNs.report("ItemAttractor", "./Items/ItemAttractor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemManager(extras) {
    _reporterNs.report("ItemManager", "./Items/ItemManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModalLauncher(extras) {
    _reporterNs.report("GameModalLauncher", "./ModalWIndows/GameModalLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPauser(extras) {
    _reporterNs.report("Pauser", "./Pauser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTestValues(extras) {
    _reporterNs.report("TestValues", "./TestGameRunner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUI(extras) {
    _reporterNs.report("GameUI", "./UI/GameUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyDeathEffectSpawner(extras) {
    _reporterNs.report("EnemyDeathEffectSpawner", "./Unit/Enemy/EnemyDeathEffectSpawner/EnemyDeathEffectSpawner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "./Unit/Enemy/EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyProjectileLauncher(extras) {
    _reporterNs.report("EnemyProjectileLauncher", "./Unit/Enemy/ProjectileLauncher.cs/EnemyProjectileLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMetaUpgrades(extras) {
    _reporterNs.report("MetaUpgrades", "./Unit/MetaUpgrades/MetaUpgrades", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Unit/Player/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerData(extras) {
    _reporterNs.report("PlayerData", "./Unit/Player/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHaloProjectileLauncher(extras) {
    _reporterNs.report("HaloProjectileLauncher", "./Projectile/ProjectileLauncher/HaloProjectileLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProjectileData(extras) {
    _reporterNs.report("ProjectileData", "./Projectile/ProjectileLauncher/ProjectileData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProjectileLauncher(extras) {
    _reporterNs.report("ProjectileLauncher", "./Projectile/ProjectileLauncher/ProjectileLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaveProjectileLauncher(extras) {
    _reporterNs.report("WaveProjectileLauncher", "./Projectile/ProjectileLauncher/WaveProjectileLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgrader(extras) {
    _reporterNs.report("Upgrader", "./Upgrades/Upgrader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMetaUpgradeType(extras) {
    _reporterNs.report("MetaUpgradeType", "./Upgrades/UpgradeType", _context.meta, extras);
  }

  _export("GameResult", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Canvas = _cc.Canvas;
      Component = _cc.Component;
      KeyCode = _cc.KeyCode;
      Vec2 = _cc.Vec2;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }, function (_unresolved_3) {
      requireAppRootAsync = _unresolved_3.requireAppRootAsync;
    }, function (_unresolved_4) {
      delay = _unresolved_4.delay;
    }, function (_unresolved_5) {
      GameAudioAdapter = _unresolved_5.GameAudioAdapter;
    }, function (_unresolved_6) {
      Background = _unresolved_6.Background;
    }, function (_unresolved_7) {
      MagnetCollisionSystem = _unresolved_7.MagnetCollisionSystem;
    }, function (_unresolved_8) {
      PlayerCollisionSystem = _unresolved_8.PlayerCollisionSystem;
    }, function (_unresolved_9) {
      PlayerProjectileCollisionSystem = _unresolved_9.PlayerProjectileCollisionSystem;
    }, function (_unresolved_10) {
      WeaponCollisionSystem = _unresolved_10.WeaponCollisionSystem;
    }, function (_unresolved_11) {
      KeyboardInput = _unresolved_11.KeyboardInput;
    }, function (_unresolved_12) {
      MultiInput = _unresolved_12.MultiInput;
    }, function (_unresolved_13) {
      VirtualJoystic = _unresolved_13.VirtualJoystic;
    }, function (_unresolved_14) {
      ItemAttractor = _unresolved_14.ItemAttractor;
    }, function (_unresolved_15) {
      ItemManager = _unresolved_15.ItemManager;
    }, function (_unresolved_16) {
      GameModalLauncher = _unresolved_16.GameModalLauncher;
    }, function (_unresolved_17) {
      Pauser = _unresolved_17.Pauser;
    }, function (_unresolved_18) {
      GameUI = _unresolved_18.GameUI;
    }, function (_unresolved_19) {
      EnemyDeathEffectSpawner = _unresolved_19.EnemyDeathEffectSpawner;
    }, function (_unresolved_20) {
      EnemyManager = _unresolved_20.EnemyManager;
    }, function (_unresolved_21) {
      EnemyProjectileLauncher = _unresolved_21.EnemyProjectileLauncher;
    }, function (_unresolved_22) {
      MetaUpgrades = _unresolved_22.MetaUpgrades;
    }, function (_unresolved_23) {
      Player = _unresolved_23.Player;
      PlayerData = _unresolved_23.PlayerData;
    }, function (_unresolved_24) {
      HaloProjectileLauncher = _unresolved_24.HaloProjectileLauncher;
    }, function (_unresolved_25) {
      ProjectileData = _unresolved_25.ProjectileData;
    }, function (_unresolved_26) {
      ProjectileLauncher = _unresolved_26.ProjectileLauncher;
    }, function (_unresolved_27) {
      WaveProjectileLauncher = _unresolved_27.WaveProjectileLauncher;
    }, function (_unresolved_28) {
      Upgrader = _unresolved_28.Upgrader;
    }, function (_unresolved_29) {
      MetaUpgradeType = _unresolved_29.MetaUpgradeType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5faa9kT4WdAFJLecGHhA+VX", "Game", undefined);

      __checkObsolete__(['Canvas', 'Component', 'KeyCode', 'Vec2', '_decorator', 'Node', 'approx']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Game", Game = (_dec = ccclass("Game"), _dec2 = property(_crd && VirtualJoystic === void 0 ? (_reportPossibleCrUseOfVirtualJoystic({
        error: Error()
      }), VirtualJoystic) : VirtualJoystic), _dec3 = property(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
        error: Error()
      }), Player) : Player), _dec4 = property(_crd && ProjectileLauncher === void 0 ? (_reportPossibleCrUseOfProjectileLauncher({
        error: Error()
      }), ProjectileLauncher) : ProjectileLauncher), _dec5 = property(_crd && ProjectileLauncher === void 0 ? (_reportPossibleCrUseOfProjectileLauncher({
        error: Error()
      }), ProjectileLauncher) : ProjectileLauncher), _dec6 = property(_crd && ProjectileLauncher === void 0 ? (_reportPossibleCrUseOfProjectileLauncher({
        error: Error()
      }), ProjectileLauncher) : ProjectileLauncher), _dec7 = property(_crd && ProjectileLauncher === void 0 ? (_reportPossibleCrUseOfProjectileLauncher({
        error: Error()
      }), ProjectileLauncher) : ProjectileLauncher), _dec8 = property(_crd && ProjectileLauncher === void 0 ? (_reportPossibleCrUseOfProjectileLauncher({
        error: Error()
      }), ProjectileLauncher) : ProjectileLauncher), _dec9 = property(_crd && EnemyManager === void 0 ? (_reportPossibleCrUseOfEnemyManager({
        error: Error()
      }), EnemyManager) : EnemyManager), _dec10 = property(_crd && EnemyDeathEffectSpawner === void 0 ? (_reportPossibleCrUseOfEnemyDeathEffectSpawner({
        error: Error()
      }), EnemyDeathEffectSpawner) : EnemyDeathEffectSpawner), _dec11 = property(_crd && ItemManager === void 0 ? (_reportPossibleCrUseOfItemManager({
        error: Error()
      }), ItemManager) : ItemManager), _dec12 = property(_crd && GameUI === void 0 ? (_reportPossibleCrUseOfGameUI({
        error: Error()
      }), GameUI) : GameUI), _dec13 = property(Canvas), _dec14 = property(_crd && Background === void 0 ? (_reportPossibleCrUseOfBackground({
        error: Error()
      }), Background) : Background), _dec15 = property(_crd && GameAudioAdapter === void 0 ? (_reportPossibleCrUseOfGameAudioAdapter({
        error: Error()
      }), GameAudioAdapter) : GameAudioAdapter), _dec16 = property(Node), _dec(_class = (_class2 = (_class3 = class Game extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "virtualJoystic", _descriptor, this);

          _initializerDefineProperty(this, "player", _descriptor2, this);

          _initializerDefineProperty(this, "haloProjectileLauncherComponent", _descriptor3, this);

          _initializerDefineProperty(this, "horizontalProjectileLauncherComponent", _descriptor4, this);

          _initializerDefineProperty(this, "diagonalProjectileLauncherComponent", _descriptor5, this);

          _initializerDefineProperty(this, "enemyAxeProjectileLauncherComponent", _descriptor6, this);

          _initializerDefineProperty(this, "enemyMagicOrbProjectileLauncherComponent", _descriptor7, this);

          _initializerDefineProperty(this, "enemyManager", _descriptor8, this);

          _initializerDefineProperty(this, "deathEffectSpawner", _descriptor9, this);

          _initializerDefineProperty(this, "itemManager", _descriptor10, this);

          _initializerDefineProperty(this, "gameUI", _descriptor11, this);

          _initializerDefineProperty(this, "gameCanvas", _descriptor12, this);

          _initializerDefineProperty(this, "background", _descriptor13, this);

          _initializerDefineProperty(this, "gameAudioAdapter", _descriptor14, this);

          _initializerDefineProperty(this, "blackScreen", _descriptor15, this);

          this.playerCollisionSystem = void 0;
          this.haloProjectileLauncher = void 0;
          this.horizontalProjectileLauncher = void 0;
          this.diagonalProjectileLauncher = void 0;
          this.enemyAxeProjectileLauncher = void 0;
          this.enemyMagicOrbProjectileLauncher = void 0;
          this.itemAttractor = void 0;
          this.gamePauser = new (_crd && Pauser === void 0 ? (_reportPossibleCrUseOfPauser({
            error: Error()
          }), Pauser) : Pauser)();
          this.gameResult = void 0;
          this.timeAlive = 0;
        }

        static get Instance() {
          return this.instance;
        }

        start() {
          this.gamePauser.pause();
          Game.instance = this;
          this.blackScreen.active = true;
        }

        play(userData, settings, translationData, testValues) {
          var _this = this;

          return _asyncToGenerator(function* () {
            yield _this.setup(userData, settings, translationData, testValues);

            _this.gamePauser.resume();

            _this.blackScreen.active = false;
            (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).Instance.ScreenFader.playClose();

            while (!_this.gameResult.hasExitManually && _this.player.Health.IsAlive) yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
              error: Error()
            }), delay) : delay)(100);

            _this.gamePauser.pause();

            Game.instance = null;
            _this.gameResult.score = _this.timeAlive;
            return _this.gameResult;
          })();
        }

        exitGame() {
          this.gameResult.hasExitManually = true;
        }

        update(deltaTime) {
          if (this.gamePauser.IsPaused) return;
          this.player.gameTick(deltaTime);
          this.playerCollisionSystem.gameTick(deltaTime);
          this.enemyManager.gameTick(deltaTime);
          this.haloProjectileLauncher.gameTick(deltaTime);
          this.horizontalProjectileLauncher.gameTick(deltaTime);
          this.diagonalProjectileLauncher.gameTick(deltaTime);
          this.enemyAxeProjectileLauncher.gameTick(deltaTime);
          this.enemyMagicOrbProjectileLauncher.gameTick(deltaTime);
          this.itemAttractor.gameTick(deltaTime);
          this.background.gameTick();
          this.timeAlive += deltaTime;
          this.gameUI.updateTimeAlive(this.timeAlive);
          (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.MainCamera.node.setWorldPosition(this.player.node.worldPosition);
          this.gameUI.node.setWorldPosition(this.player.node.worldPosition);
        }

        setup(userData, settings, translationData, testValues) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            yield (_crd && requireAppRootAsync === void 0 ? (_reportPossibleCrUseOfrequireAppRootAsync({
              error: Error()
            }), requireAppRootAsync) : requireAppRootAsync)();
            _this2.gameCanvas.cameraComponent = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).Instance.MainCamera;
            _this2.gameResult = new GameResult();
            var metaUpgrades = new (_crd && MetaUpgrades === void 0 ? (_reportPossibleCrUseOfMetaUpgrades({
              error: Error()
            }), MetaUpgrades) : MetaUpgrades)(userData.game.metaUpgrades, settings.metaUpgrades);

            _this2.virtualJoystic.init();

            var wasd = new (_crd && KeyboardInput === void 0 ? (_reportPossibleCrUseOfKeyboardInput({
              error: Error()
            }), KeyboardInput) : KeyboardInput)(KeyCode.KEY_W, KeyCode.KEY_S, KeyCode.KEY_A, KeyCode.KEY_D);
            var arrowKeys = new (_crd && KeyboardInput === void 0 ? (_reportPossibleCrUseOfKeyboardInput({
              error: Error()
            }), KeyboardInput) : KeyboardInput)(KeyCode.ARROW_UP, KeyCode.ARROW_DOWN, KeyCode.ARROW_LEFT, KeyCode.ARROW_RIGHT);
            var multiInput = new (_crd && MultiInput === void 0 ? (_reportPossibleCrUseOfMultiInput({
              error: Error()
            }), MultiInput) : MultiInput)([_this2.virtualJoystic, wasd, arrowKeys]);

            _this2.player.init(multiInput, _this2.createPlayerData(settings.player, metaUpgrades));

            _this2.enemyManager.init(_this2.player.node, settings.enemyManager);

            _this2.deathEffectSpawner.init(_this2.enemyManager);

            _this2.playerCollisionSystem = new (_crd && PlayerCollisionSystem === void 0 ? (_reportPossibleCrUseOfPlayerCollisionSystem({
              error: Error()
            }), PlayerCollisionSystem) : PlayerCollisionSystem)(_this2.player, settings.player.collisionDelay, _this2.itemManager);
            new (_crd && WeaponCollisionSystem === void 0 ? (_reportPossibleCrUseOfWeaponCollisionSystem({
              error: Error()
            }), WeaponCollisionSystem) : WeaponCollisionSystem)(_this2.player.Weapon);
            var projectileData = new (_crd && ProjectileData === void 0 ? (_reportPossibleCrUseOfProjectileData({
              error: Error()
            }), ProjectileData) : ProjectileData)();
            projectileData.damage = 1 + metaUpgrades.getUpgradeValue((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
              error: Error()
            }), MetaUpgradeType) : MetaUpgradeType).OverallDamage);
            projectileData.pierces = 1 + metaUpgrades.getUpgradeValue((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
              error: Error()
            }), MetaUpgradeType) : MetaUpgradeType).ProjectilePiercing);
            _this2.haloProjectileLauncher = new (_crd && HaloProjectileLauncher === void 0 ? (_reportPossibleCrUseOfHaloProjectileLauncher({
              error: Error()
            }), HaloProjectileLauncher) : HaloProjectileLauncher)(_this2.haloProjectileLauncherComponent, _this2.player.node, settings.player.haloLauncher, projectileData);
            _this2.horizontalProjectileLauncher = new (_crd && WaveProjectileLauncher === void 0 ? (_reportPossibleCrUseOfWaveProjectileLauncher({
              error: Error()
            }), WaveProjectileLauncher) : WaveProjectileLauncher)(_this2.horizontalProjectileLauncherComponent, _this2.player.node, [new Vec2(0, 1), new Vec2(-0.1, 0.8), new Vec2(0.1, 0.8)], settings.player.horizontalLauncher, projectileData);
            _this2.diagonalProjectileLauncher = new (_crd && WaveProjectileLauncher === void 0 ? (_reportPossibleCrUseOfWaveProjectileLauncher({
              error: Error()
            }), WaveProjectileLauncher) : WaveProjectileLauncher)(_this2.diagonalProjectileLauncherComponent, _this2.player.node, [new Vec2(-0.5, -0.5), new Vec2(0.5, -0.5)], settings.player.diagonalLauncher, projectileData);
            _this2.enemyAxeProjectileLauncher = new (_crd && EnemyProjectileLauncher === void 0 ? (_reportPossibleCrUseOfEnemyProjectileLauncher({
              error: Error()
            }), EnemyProjectileLauncher) : EnemyProjectileLauncher)(_this2.enemyAxeProjectileLauncherComponent, _this2.player.node, _this2.enemyManager, settings.enemyManager.axeLauncher);
            _this2.enemyMagicOrbProjectileLauncher = new (_crd && EnemyProjectileLauncher === void 0 ? (_reportPossibleCrUseOfEnemyProjectileLauncher({
              error: Error()
            }), EnemyProjectileLauncher) : EnemyProjectileLauncher)(_this2.enemyMagicOrbProjectileLauncherComponent, _this2.player.node, _this2.enemyManager, settings.enemyManager.magicOrbLauncher);
            new (_crd && PlayerProjectileCollisionSystem === void 0 ? (_reportPossibleCrUseOfPlayerProjectileCollisionSystem({
              error: Error()
            }), PlayerProjectileCollisionSystem) : PlayerProjectileCollisionSystem)([_this2.haloProjectileLauncher, _this2.horizontalProjectileLauncher, _this2.diagonalProjectileLauncher]);
            _this2.itemAttractor = new (_crd && ItemAttractor === void 0 ? (_reportPossibleCrUseOfItemAttractor({
              error: Error()
            }), ItemAttractor) : ItemAttractor)(_this2.player.node, 100);
            new (_crd && MagnetCollisionSystem === void 0 ? (_reportPossibleCrUseOfMagnetCollisionSystem({
              error: Error()
            }), MagnetCollisionSystem) : MagnetCollisionSystem)(_this2.player.Magnet, _this2.itemAttractor);
            var upgrader = new (_crd && Upgrader === void 0 ? (_reportPossibleCrUseOfUpgrader({
              error: Error()
            }), Upgrader) : Upgrader)(_this2.player, _this2.horizontalProjectileLauncher, _this2.haloProjectileLauncher, _this2.diagonalProjectileLauncher, settings.upgrades);
            var modalLauncher = new (_crd && GameModalLauncher === void 0 ? (_reportPossibleCrUseOfGameModalLauncher({
              error: Error()
            }), GameModalLauncher) : GameModalLauncher)((_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).Instance.ModalWindowManager, _this2.player, _this2.gamePauser, upgrader, translationData);

            _this2.itemManager.init(_this2.enemyManager, _this2.player, _this2.gameResult, modalLauncher, settings.items);

            _this2.gameUI.init(_this2.player, modalLauncher, _this2.itemManager, _this2.gameResult);

            _this2.background.init(_this2.player.node);

            if (testValues) {
              _this2.timeAlive += testValues.startTime;

              _this2.player.Level.addXp(testValues.startXP);
            }

            _this2.gameAudioAdapter.init(_this2.player, _this2.enemyManager, _this2.itemManager, _this2.horizontalProjectileLauncher, _this2.diagonalProjectileLauncher, _this2.haloProjectileLauncher);
          })();
        }

        createPlayerData(settings, metaUpgrades) {
          var playerData = Object.assign(new (_crd && PlayerData === void 0 ? (_reportPossibleCrUseOfPlayerData({
            error: Error()
          }), PlayerData) : PlayerData)(), settings);
          playerData.maxHp = metaUpgrades.getUpgradeValue((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).Health) + settings.defaultHP;
          playerData.requiredXP = settings.requiredXP;
          playerData.speed = metaUpgrades.getUpgradeValue((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).MovementSpeed) + settings.speed;
          playerData.regenerationDelay = settings.regenerationDelay;
          playerData.xpMultiplier = metaUpgrades.getUpgradeValue((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).XPGatherer) + 1;
          playerData.goldMultiplier = metaUpgrades.getUpgradeValue((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).GoldGatherer) + 1;
          playerData.damage = metaUpgrades.getUpgradeValue((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).OverallDamage) + settings.weapon.damage;
          playerData.strikeDelay = settings.weapon.strikeDelay;
          playerData.magnetDuration = settings.magnetDuration;
          return playerData;
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "virtualJoystic", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "haloProjectileLauncherComponent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "horizontalProjectileLauncherComponent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "diagonalProjectileLauncherComponent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "enemyAxeProjectileLauncherComponent", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "enemyMagicOrbProjectileLauncherComponent", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "enemyManager", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "deathEffectSpawner", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "itemManager", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "gameUI", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "gameCanvas", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "gameAudioAdapter", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "blackScreen", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _export("GameResult", GameResult = class GameResult {
        constructor() {
          this.hasExitManually = false;
          this.goldCoins = 0;
          this.score = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e9c0aa0a6b7b7672404478f12cd7c8923316a873.js.map