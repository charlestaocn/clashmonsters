System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, Component, Material, randomRange, Sprite, _decorator, Signal, delay, UnitHealth, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Enemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../../Services/EventSystem/Signal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../../Services/Utils/AsyncUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemySettings(extras) {
    _reporterNs.report("EnemySettings", "../../Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnitHealth(extras) {
    _reporterNs.report("UnitHealth", "../UnitHealth", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyMovementType(extras) {
    _reporterNs.report("EnemyMovementType", "./EnemyMovementType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      BoxCollider2D = _cc.BoxCollider2D;
      Component = _cc.Component;
      Material = _cc.Material;
      randomRange = _cc.randomRange;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Signal = _unresolved_2.Signal;
    }, function (_unresolved_3) {
      delay = _unresolved_3.delay;
    }, function (_unresolved_4) {
      UnitHealth = _unresolved_4.UnitHealth;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7f8b6NKHsNNW5nLY3fwejhw", "Enemy", undefined);

      __checkObsolete__(['BoxCollider2D', 'Component', 'Material', 'randomRange', 'Sprite', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemy", Enemy = (_dec = ccclass("Enemy"), _dec2 = property(BoxCollider2D), _dec3 = property(Sprite), _dec4 = property(Material), _dec5 = property(Material), _dec(_class = (_class2 = class Enemy extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "collider", _descriptor, this);

          _initializerDefineProperty(this, "sprite", _descriptor2, this);

          _initializerDefineProperty(this, "defaultMaterial", _descriptor3, this);

          _initializerDefineProperty(this, "whiteMaterial", _descriptor4, this);

          this.deathEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.lifetimeEndedEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.id = void 0;
          this.movementType = void 0;
          this.health = void 0;
          this.damage = void 0;
          this.speedX = void 0;
          this.speedY = void 0;
          this.lifetimeLeft = void 0;
          this.xpReward = void 0;
          this.goldReward = void 0;
          this.healthPotionRewardChance = void 0;
          this.magnetRewardChance = void 0;
          this.chestRewardChance = void 0;
          this.endOfLifetimeTriggered = false;
        }

        setup(position, settings) {
          this.id = settings.id;
          this.movementType = settings.moveType;
          this.health = new (_crd && UnitHealth === void 0 ? (_reportPossibleCrUseOfUnitHealth({
            error: Error()
          }), UnitHealth) : UnitHealth)(settings.health);
          this.damage = settings.damage;
          this.speedX = randomRange(settings.speed / 2, settings.speed);
          this.speedY = randomRange(settings.speed / 2, settings.speed);
          this.lifetimeLeft = settings.lifetime;
          this.xpReward = settings.xpReward;
          this.goldReward = settings.goldReward;
          this.healthPotionRewardChance = settings.healthPotionRewardChance;
          this.magnetRewardChance = settings.magnetRewardChance;
          this.chestRewardChance = settings.chestRewardChance;
          this.node.setWorldPosition(position);
          this.node.active = true;
          this.health.HealthPointsChangeEvent.on(this.animateHurt, this);
          this.endOfLifetimeTriggered = false;
        }

        get Id() {
          return this.id;
        }

        get MovementType() {
          return this.movementType;
        }

        get Collider() {
          return this.collider;
        }

        get Damage() {
          return this.damage;
        }

        get Health() {
          return this.health;
        }

        get DeathEvent() {
          return this.deathEvent;
        }

        get XPReward() {
          return this.xpReward;
        }

        get GoldReward() {
          return this.goldReward;
        }

        get HealthPotionRewardChance() {
          return this.healthPotionRewardChance;
        }

        get MagnetRewardChance() {
          return this.magnetRewardChance;
        }

        get ChestRewardChance() {
          return this.chestRewardChance;
        }

        get LifetimeEndedEvent() {
          return this.lifetimeEndedEvent;
        }

        dealDamage(points) {
          this.health.damage(points);

          if (!this.health.IsAlive) {
            this.deathEvent.trigger(this);
          }
        }

        gameTick(move, deltaTime) {
          const newPosition = this.node.worldPosition;
          newPosition.x += move.x * this.speedX * deltaTime;
          newPosition.y += move.y * this.speedY * deltaTime;

          if (move.x < 0) {
            this.sprite.node.setScale(-1, 1, 1);
          } else if (0 < move.x) {
            this.sprite.node.setScale(1, 1, 1);
          }

          this.node.setWorldPosition(newPosition);

          if (0 < this.lifetimeLeft) {
            this.lifetimeLeft -= deltaTime;

            if (this.lifetimeLeft <= 0) {
              this.lifetimeEndedEvent.trigger(this);
            } else if (this.lifetimeLeft <= 2) {
              this.animateEndOfLifetime();
            }
          }
        }

        async animateEndOfLifetime() {
          if (this.endOfLifetimeTriggered) return;
          this.endOfLifetimeTriggered = true;

          while ((_this$node = this.node) != null && _this$node.active) {
            var _this$node;

            this.sprite.node.active = false;
            await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
              error: Error()
            }), delay) : delay)(200);
            if (this.sprite == null) break; // exit scene

            this.sprite.node.active = true;
            await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
              error: Error()
            }), delay) : delay)(200);
          }
        }

        async animateHurt() {
          this.sprite.material = this.whiteMaterial;
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(100);
          this.sprite.material = this.defaultMaterial;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "defaultMaterial", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "whiteMaterial", [_dec5], {
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
//# sourceMappingURL=77444ae2a22526536a1b4a260f4a441da26bf223.js.map