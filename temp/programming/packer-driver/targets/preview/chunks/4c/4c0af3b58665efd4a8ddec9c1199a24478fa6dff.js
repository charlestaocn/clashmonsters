System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, random, randomRange, _decorator, Signal, ItemSpawner, ItemType, PickupEffectManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, ItemManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../Services/EventSystem/Signal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemSettings(extras) {
    _reporterNs.report("ItemSettings", "../Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameResult(extras) {
    _reporterNs.report("GameResult", "../Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModalLauncher(extras) {
    _reporterNs.report("GameModalLauncher", "../ModalWIndows/GameModalLauncher", _context.meta, extras);
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

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "./Item", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemSpawner(extras) {
    _reporterNs.report("ItemSpawner", "./ItemSpawner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "./ItemType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPickupEffectManager(extras) {
    _reporterNs.report("PickupEffectManager", "./PickupEffect/PickupEffectManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      random = _cc.random;
      randomRange = _cc.randomRange;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Signal = _unresolved_2.Signal;
    }, function (_unresolved_3) {
      ItemSpawner = _unresolved_3.ItemSpawner;
    }, function (_unresolved_4) {
      ItemType = _unresolved_4.ItemType;
    }, function (_unresolved_5) {
      PickupEffectManager = _unresolved_5.PickupEffectManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f3f88Cth5KB41SHDJviJ/K", "ItemManager", undefined);

      __checkObsolete__(['Component', 'random', 'randomRange', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemManager", ItemManager = (_dec = ccclass("ItemManager"), _dec2 = property(_crd && ItemSpawner === void 0 ? (_reportPossibleCrUseOfItemSpawner({
        error: Error()
      }), ItemSpawner) : ItemSpawner), _dec3 = property(_crd && ItemSpawner === void 0 ? (_reportPossibleCrUseOfItemSpawner({
        error: Error()
      }), ItemSpawner) : ItemSpawner), _dec4 = property(_crd && ItemSpawner === void 0 ? (_reportPossibleCrUseOfItemSpawner({
        error: Error()
      }), ItemSpawner) : ItemSpawner), _dec5 = property(_crd && ItemSpawner === void 0 ? (_reportPossibleCrUseOfItemSpawner({
        error: Error()
      }), ItemSpawner) : ItemSpawner), _dec6 = property(_crd && ItemSpawner === void 0 ? (_reportPossibleCrUseOfItemSpawner({
        error: Error()
      }), ItemSpawner) : ItemSpawner), _dec7 = property(_crd && PickupEffectManager === void 0 ? (_reportPossibleCrUseOfPickupEffectManager({
        error: Error()
      }), PickupEffectManager) : PickupEffectManager), _dec(_class = (_class2 = class ItemManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "xpSpawner", _descriptor, this);

          _initializerDefineProperty(this, "goldSpawner", _descriptor2, this);

          _initializerDefineProperty(this, "healthPotionSpawner", _descriptor3, this);

          _initializerDefineProperty(this, "magnetSpawner", _descriptor4, this);

          _initializerDefineProperty(this, "chestSpawner", _descriptor5, this);

          _initializerDefineProperty(this, "pickupEffectManager", _descriptor6, this);

          this.player = void 0;
          this.gameResult = void 0;
          this.modalLauncher = void 0;
          this.healthPerPotion = void 0;
          this.pickupEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.itemTypeToAction = new Map();
        }

        init(enemyManager, player, gameResult, modalLauncher, settings) {
          this.player = player;
          this.gameResult = gameResult;
          this.modalLauncher = modalLauncher;
          this.healthPerPotion = settings.healthPerPotion;
          enemyManager.EnemyAddedEvent.on(this.addEnemyListeners, this);
          enemyManager.EnemyRemovedEvent.on(this.removeEnemyListeners, this);
          this.xpSpawner.init();
          this.goldSpawner.init();
          this.healthPotionSpawner.init();
          this.magnetSpawner.init();
          this.chestSpawner.init();
          this.pickupEffectManager.init();
          this.itemTypeToAction.set((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).XP, this.addXP.bind(this));
          this.itemTypeToAction.set((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Gold, this.addGold.bind(this));
          this.itemTypeToAction.set((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).HealthPotion, this.useHealthPotion.bind(this));
          this.itemTypeToAction.set((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Magnet, this.activateMagnet.bind(this));
          this.itemTypeToAction.set((_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Chest, this.openChest.bind(this));
        }

        get PickupEvent() {
          return this.pickupEvent;
        }

        pickupItem(item) {
          if (!this.itemTypeToAction.has(item.ItemType)) throw new Error("Does not have behaviour set for " + item.ItemType);
          this.pickupEffectManager.showEffect(item.node.worldPosition);
          this.itemTypeToAction.get(item.ItemType)();
          this.pickupEvent.trigger(item.ItemType);
          item.pickup();
        }

        addXP() {
          this.player.Level.addXp(1);
        }

        addGold() {
          this.gameResult.goldCoins++;
        }

        useHealthPotion() {
          this.player.Health.heal(this.healthPerPotion);
        }

        activateMagnet() {
          this.player.Magnet.activate();
        }

        openChest() {
          this.modalLauncher.showChestModal();
        }

        addEnemyListeners(enemy) {
          enemy.DeathEvent.on(this.trySpawnItems, this);
        }

        removeEnemyListeners(enemy) {
          enemy.DeathEvent.off(this.trySpawnItems);
        }

        trySpawnItems(enemy) {
          this.trySpawnXP(enemy);
          this.trySpawnGold(enemy);
          ItemManager.trySpawnOnce(enemy.HealthPotionRewardChance, this.healthPotionSpawner, this.getRandomPosition(enemy));
          ItemManager.trySpawnOnce(enemy.MagnetRewardChance, this.magnetSpawner, this.getRandomPosition(enemy));
          ItemManager.trySpawnOnce(enemy.ChestRewardChance, this.chestSpawner, this.getRandomPosition(enemy));
        }

        trySpawnXP(enemy) {
          for (var index = 0; index < enemy.XPReward; index++) {
            this.xpSpawner.spawn(this.getRandomPosition(enemy));
          }
        }

        trySpawnGold(enemy) {
          if (enemy.GoldReward <= 0) return;

          if (enemy.GoldReward < 1) {
            if (random() < enemy.GoldReward) {
              this.goldSpawner.spawn(enemy.node.worldPosition);
            }
          } else {
            for (var i = 0; i < enemy.GoldReward; i++) {
              this.goldSpawner.spawn(this.getRandomPosition(enemy));
            }
          }
        }

        static trySpawnOnce(chance, itemSpawner, worldPosition) {
          if (random() < chance) {
            itemSpawner.spawn(worldPosition);
          }
        }

        getRandomPosition(enemy) {
          var position = enemy.node.worldPosition;
          position.x += randomRange(-15, 15);
          position.y += randomRange(-15, 15);
          return position;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "xpSpawner", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "goldSpawner", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "healthPotionSpawner", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "magnetSpawner", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "chestSpawner", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pickupEffectManager", [_dec7], {
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
//# sourceMappingURL=4c0af3b58665efd4a8ddec9c1199a24478fa6dff.js.map