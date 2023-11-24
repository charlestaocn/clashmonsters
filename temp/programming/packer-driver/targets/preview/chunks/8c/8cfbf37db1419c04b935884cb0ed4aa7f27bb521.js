System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioClip, AppRoot, ItemType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, GameAudioAdapter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../../AppRoot/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioPlayer(extras) {
    _reporterNs.report("AudioPlayer", "../../Services/AudioPlayer/AudioPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemManager(extras) {
    _reporterNs.report("ItemManager", "../Items/ItemManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../Items/ItemType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../Unit/Enemy/Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "../Unit/Enemy/EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../Unit/Player/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHaloProjectileLauncher(extras) {
    _reporterNs.report("HaloProjectileLauncher", "../Projectile/ProjectileLauncher/HaloProjectileLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaveProjectileLauncher(extras) {
    _reporterNs.report("WaveProjectileLauncher", "../Projectile/ProjectileLauncher/WaveProjectileLauncher", _context.meta, extras);
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
      AudioClip = _cc.AudioClip;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }, function (_unresolved_3) {
      ItemType = _unresolved_3.ItemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb842QdTMFOUJEdwMiA7AJN", "GameAudioAdapter", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameAudioAdapter", GameAudioAdapter = (_dec = ccclass("GameAudioAdapter"), _dec2 = property(AudioClip), _dec3 = property(AudioClip), _dec4 = property(AudioClip), _dec5 = property(AudioClip), _dec6 = property(AudioClip), _dec7 = property(AudioClip), _dec8 = property(AudioClip), _dec9 = property(AudioClip), _dec10 = property(AudioClip), _dec11 = property(AudioClip), _dec12 = property(AudioClip), _dec13 = property(AudioClip), _dec14 = property(AudioClip), _dec15 = property(AudioClip), _dec(_class = (_class2 = class GameAudioAdapter extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "music", _descriptor, this);

          _initializerDefineProperty(this, "enemyHit", _descriptor2, this);

          _initializerDefineProperty(this, "playerHit", _descriptor3, this);

          _initializerDefineProperty(this, "playerDeath", _descriptor4, this);

          _initializerDefineProperty(this, "weaponSwing", _descriptor5, this);

          _initializerDefineProperty(this, "xpPickup", _descriptor6, this);

          _initializerDefineProperty(this, "goldPickup", _descriptor7, this);

          _initializerDefineProperty(this, "healthPotionPickup", _descriptor8, this);

          _initializerDefineProperty(this, "magnetPickup", _descriptor9, this);

          _initializerDefineProperty(this, "chestPickup", _descriptor10, this);

          _initializerDefineProperty(this, "levelUp", _descriptor11, this);

          _initializerDefineProperty(this, "horizontalProjectileLaunch", _descriptor12, this);

          _initializerDefineProperty(this, "diagonalProjectileLaunch", _descriptor13, this);

          _initializerDefineProperty(this, "haloProjectileLaunch", _descriptor14, this);

          this.audioPlayer = void 0;
          this.player = void 0;
        }

        init(player, enemyManager, itemManager, horizontalLauncher, diagonalLauncher, haloLauncher) {
          (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.AudioPlayer.playMusic(this.music);
          this.audioPlayer = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.AudioPlayer;
          this.player = player;
          player.Weapon.WeaponStrikeEvent.on(() => this.audioPlayer.playSound(this.weaponSwing), this);
          player.Level.LevelUpEvent.on(() => this.audioPlayer.playSound(this.levelUp), this);
          player.Health.HealthPointsChangeEvent.on(this.tryPlayPlayerHitSound, this);
          enemyManager.EnemyAddedEvent.on(this.addEnemyListeners, this);
          enemyManager.EnemyRemovedEvent.on(this.removeEnemyListeners, this);
          itemManager.PickupEvent.on(this.playPickupItemSound, this);
          horizontalLauncher.ProjectileLaunchedEvent.on(() => this.audioPlayer.playSound(this.horizontalProjectileLaunch), this);
          diagonalLauncher.ProjectileLaunchedEvent.on(() => this.audioPlayer.playSound(this.diagonalProjectileLaunch), this);
          haloLauncher.ProjectilesLaunchedEvent.on(() => this.audioPlayer.playSound(this.haloProjectileLaunch), this);
        }

        addEnemyListeners(enemy) {
          enemy.Health.HealthPointsChangeEvent.on(this.playEnemyHitSound, this);
        }

        removeEnemyListeners(enemy) {
          enemy.Health.HealthPointsChangeEvent.off(this.playEnemyHitSound);
        }

        tryPlayPlayerHitSound(healthChange) {
          if (healthChange < 0) {
            this.audioPlayer.playSound(this.playerHit);
          }

          if (!this.player.Health.IsAlive) {
            this.audioPlayer.playSound(this.playerDeath);
          }
        }

        playEnemyHitSound() {
          this.audioPlayer.playSound(this.enemyHit);
        }

        playPickupItemSound(itemType) {
          var clipToPlay;

          switch (itemType) {
            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).XP:
              clipToPlay = this.xpPickup;
              break;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).Gold:
              clipToPlay = this.goldPickup;
              break;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).HealthPotion:
              clipToPlay = this.healthPotionPickup;
              break;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).Magnet:
              clipToPlay = this.magnetPickup;
              break;

            case (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
              error: Error()
            }), ItemType) : ItemType).Chest:
              clipToPlay = this.chestPickup;
              break;

            default:
              break;
          }

          this.audioPlayer.playSound(clipToPlay);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "music", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyHit", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "playerHit", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playerDeath", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "weaponSwing", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "xpPickup", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "goldPickup", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "healthPotionPickup", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "magnetPickup", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "chestPickup", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "levelUp", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "horizontalProjectileLaunch", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "diagonalProjectileLaunch", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "haloProjectileLaunch", [_dec15], {
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
//# sourceMappingURL=8cfbf37db1419c04b935884cb0ed4aa7f27bb521.js.map