System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, _decorator, Signal, GameTimer, UpgradableCollider, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Weapon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../../../Services/EventSystem/Signal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTimer(extras) {
    _reporterNs.report("GameTimer", "../../../../Services/GameTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgradableCollider(extras) {
    _reporterNs.report("UpgradableCollider", "./UpgradableCollider", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Signal = _unresolved_2.Signal;
    }, function (_unresolved_3) {
      GameTimer = _unresolved_3.GameTimer;
    }, function (_unresolved_4) {
      UpgradableCollider = _unresolved_4.UpgradableCollider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2391bi3+fpCqLBGVf9XsH0C", "Weapon", undefined);

      __checkObsolete__(['Animation', 'AnimationState', 'Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Weapon", Weapon = (_dec = ccclass("Weapon"), _dec2 = property(Animation), _dec3 = property(_crd && UpgradableCollider === void 0 ? (_reportPossibleCrUseOfUpgradableCollider({
        error: Error()
      }), UpgradableCollider) : UpgradableCollider), _dec(_class = (_class2 = class Weapon extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "weaponAnimation", _descriptor, this);

          _initializerDefineProperty(this, "upgradableCollider", _descriptor2, this);

          this.weaponStrikeEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.strikeTimer = void 0;
          this.strikeState = void 0;
          this.damage = void 0;
        }

        init(strikeDelay, damage) {
          this.strikeTimer = new (_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
            error: Error()
          }), GameTimer) : GameTimer)(strikeDelay);
          this.damage = damage;
          this.node.active = false;
          this.weaponAnimation.on(Animation.EventType.FINISHED, this.endStrike, this);
          this.strikeState = this.weaponAnimation.getState(this.weaponAnimation.clips[0].name);
          this.strikeState.speed = 1;
          this.upgradableCollider.init();
        }

        gameTick(deltaTime) {
          this.strikeTimer.gameTick(deltaTime);

          if (this.strikeTimer.tryFinishPeriod()) {
            this.strike();
          }
        }

        get WeaponStrikeEvent() {
          return this.weaponStrikeEvent;
        }

        get Collider() {
          return this.upgradableCollider;
        }

        get Damage() {
          return this.damage;
        }

        upgradeWeaponDamage() {
          this.damage++;
        }

        upgradeWeaponLength() {
          this.upgradableCollider.upgrade();
        }

        strike() {
          this.node.active = true;
          this.weaponAnimation.play(this.strikeState.name);
          this.weaponStrikeEvent.trigger(this);
        }

        endStrike() {
          this.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "weaponAnimation", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "upgradableCollider", [_dec3], {
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
//# sourceMappingURL=85301a3cc5253e32adb030dbfccb7d814b6f9876.js.map