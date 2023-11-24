System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Collider2D, Component, Contact2DType, Vec3, _decorator, Signal, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Projectile;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../Services/EventSystem/Signal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProjectileCollision(extras) {
    _reporterNs.report("ProjectileCollision", "./ProjectileCollision", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Signal = _unresolved_2.Signal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a24eYAhmtMDZo5Wb8iLC5Q", "Projectile", undefined);

      __checkObsolete__(['Collider2D', 'Component', 'Contact2DType', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Projectile", Projectile = (_dec = ccclass("Projectile"), _dec2 = property(Collider2D), _dec(_class = (_class2 = class Projectile extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "collider", _descriptor, this);

          this.contactBeginEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.piercesDepletedEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.isContactListenerSet = false;
          this.piercesLeft = 0;
          this.damage = 0;
        }

        setup(damage, pierces, angle) {
          this.piercesLeft = pierces;
          this.damage = damage;

          if (!this.isContactListenerSet) {
            this.isContactListenerSet = true;
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onColliderContactBegin, this);
          }

          this.node.setRotationFromEuler(new Vec3(0, 0, angle));
        }

        pierce() {
          this.piercesLeft--;

          if (this.piercesLeft <= 0) {
            this.piercesDepletedEvent.trigger(this);
          }
        }

        get Damage() {
          return this.damage;
        }

        get ContactBeginEvent() {
          return this.contactBeginEvent;
        }

        get PiercesDepletedEvent() {
          return this.piercesDepletedEvent;
        }

        onColliderContactBegin(thisCollider, otherCollider) {
          this.contactBeginEvent.trigger({
            otherCollider,
            projectile: this
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "collider", [_dec2], {
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
//# sourceMappingURL=dd514f809a84254e7ffe362866b1bfb449f76678.js.map