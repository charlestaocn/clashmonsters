System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Node, BoxCollider2D, Component, Vec2, Vec3, _decorator, Sprite, Color, delay, UnitHealth, UnitLevel, Magnet, PlayerRegeneration, PlayerUI, Weapon, PlayerData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../../Services/Utils/AsyncUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIInput(extras) {
    _reporterNs.report("IInput", "../../Input/IInput", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnitHealth(extras) {
    _reporterNs.report("UnitHealth", "../UnitHealth", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnitLevel(extras) {
    _reporterNs.report("UnitLevel", "../UnitLevel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMagnet(extras) {
    _reporterNs.report("Magnet", "./Magnet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerRegeneration(extras) {
    _reporterNs.report("PlayerRegeneration", "./PlayerRegeneration", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerUI(extras) {
    _reporterNs.report("PlayerUI", "./PlayerUI/PlayerUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeapon(extras) {
    _reporterNs.report("Weapon", "./Weapon/Weapon", _context.meta, extras);
  }

  _export("PlayerData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Node = _cc.Node;
      BoxCollider2D = _cc.BoxCollider2D;
      Component = _cc.Component;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      delay = _unresolved_2.delay;
    }, function (_unresolved_3) {
      UnitHealth = _unresolved_3.UnitHealth;
    }, function (_unresolved_4) {
      UnitLevel = _unresolved_4.UnitLevel;
    }, function (_unresolved_5) {
      Magnet = _unresolved_5.Magnet;
    }, function (_unresolved_6) {
      PlayerRegeneration = _unresolved_6.PlayerRegeneration;
    }, function (_unresolved_7) {
      PlayerUI = _unresolved_7.PlayerUI;
    }, function (_unresolved_8) {
      Weapon = _unresolved_8.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b570au4G81O8IXoTXg1MQAd", "Player", undefined);

      __checkObsolete__(['Animation', 'Node', 'BoxCollider2D', 'Collider2D', 'Component', 'Vec2', 'Vec3', '_decorator', 'Details', 'Sprite', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass("Player"), _dec2 = property(BoxCollider2D), _dec3 = property(_crd && PlayerUI === void 0 ? (_reportPossibleCrUseOfPlayerUI({
        error: Error()
      }), PlayerUI) : PlayerUI), _dec4 = property(_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon), _dec5 = property(_crd && Magnet === void 0 ? (_reportPossibleCrUseOfMagnet({
        error: Error()
      }), Magnet) : Magnet), _dec6 = property(Node), _dec7 = property(Animation), _dec8 = property(Sprite), _dec(_class = (_class2 = class Player extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "collider", _descriptor, this);

          _initializerDefineProperty(this, "playerUI", _descriptor2, this);

          _initializerDefineProperty(this, "weapon", _descriptor3, this);

          _initializerDefineProperty(this, "magnet", _descriptor4, this);

          _initializerDefineProperty(this, "playerGraphics", _descriptor5, this);

          _initializerDefineProperty(this, "animation", _descriptor6, this);

          _initializerDefineProperty(this, "sprite", _descriptor7, this);

          this.input = void 0;
          this.health = void 0;
          this.level = void 0;
          this.regeneration = void 0;
          this.speed = void 0;
          this.isMoveAnimationPlaying = false;
        }

        init(input, data) {
          this.input = input;
          this.health = new (_crd && UnitHealth === void 0 ? (_reportPossibleCrUseOfUnitHealth({
            error: Error()
          }), UnitHealth) : UnitHealth)(data.maxHp);
          this.level = new (_crd && UnitLevel === void 0 ? (_reportPossibleCrUseOfUnitLevel({
            error: Error()
          }), UnitLevel) : UnitLevel)(data.requiredXP, data.xpMultiplier);
          this.regeneration = new (_crd && PlayerRegeneration === void 0 ? (_reportPossibleCrUseOfPlayerRegeneration({
            error: Error()
          }), PlayerRegeneration) : PlayerRegeneration)(this.health, data.regenerationDelay);
          this.speed = data.speed;
          this.weapon.init(data.strikeDelay, data.damage);
          this.magnet.init(data.magnetDuration);
          this.health.HealthPointsChangeEvent.on(this.animateHpChange, this);
          this.playerUI.init(this.health);
        }

        get Health() {
          return this.health;
        }

        get Level() {
          return this.level;
        }

        get Weapon() {
          return this.weapon;
        }

        get Magnet() {
          return this.magnet;
        }

        get Regeneration() {
          return this.regeneration;
        }

        get Collider() {
          return this.collider;
        }

        gameTick(deltaTime) {
          this.move(deltaTime);
          this.weapon.gameTick(deltaTime);
          this.magnet.gameTick(deltaTime);
          this.regeneration.gameTick(deltaTime);
        }

        move(deltaTime) {
          if (!this.health.IsAlive) return;
          const movement = this.input.getAxis();

          if (!movement.equals(Vec2.ZERO)) {
            movement.x *= deltaTime * this.speed;
            movement.y *= deltaTime * this.speed;
            const newPosition = this.node.worldPosition;
            newPosition.x += movement.x;
            newPosition.y += movement.y;
            this.node.setWorldPosition(newPosition);

            if (!this.isMoveAnimationPlaying) {
              this.isMoveAnimationPlaying = true;
              this.animation.play("Move");
            }

            if (movement.x < 0) {
              this.playerGraphics.setScale(new Vec3(1, 1, 1));
            } else if (0 < movement.x) {
              this.playerGraphics.setScale(new Vec3(-1, 1, 1));
            }
          } else {
            if (this.isMoveAnimationPlaying) {
              this.isMoveAnimationPlaying = false;
              this.animation.play("Idle");
            }
          }
        }

        async animateHpChange(hpChange) {
          if (hpChange < 0) {
            this.sprite.color = Color.RED;
          } else {
            this.sprite.color = Color.GREEN;
          }

          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(100);
          this.sprite.color = Color.WHITE;

          if (!this.health.IsAlive) {
            this.animation.play("Die");
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerUI", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "weapon", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "magnet", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playerGraphics", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _export("PlayerData", PlayerData = class PlayerData {
        constructor() {
          this.requiredXP = [];
          this.speed = 0;
          this.maxHp = 0;
          this.regenerationDelay = 0;
          this.xpMultiplier = 0;
          this.goldMultiplier = 0;
          // Weapon
          this.strikeDelay = 0;
          this.damage = 0;
          // Magnet
          this.magnetDuration = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=616307c1c0c90c5ba9ac77d153ddb56f8be6e10e.js.map