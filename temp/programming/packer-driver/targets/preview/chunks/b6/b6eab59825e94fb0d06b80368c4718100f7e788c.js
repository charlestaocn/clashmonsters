System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Collider2D, Contact2DType, _decorator, GroupType, Enemy, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, BossEnemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGroupType(extras) {
    _reporterNs.report("GroupType", "../../GroupType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "./Enemy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GroupType = _unresolved_2.GroupType;
    }, function (_unresolved_3) {
      Enemy = _unresolved_3.Enemy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8daaeyGqNVNzp9oN99xFcSw", "BossEnemy", undefined);

      __checkObsolete__(['Animation', 'Collider2D', 'Contact2DType', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BossEnemy", BossEnemy = (_dec = ccclass("BossEnemy"), _dec2 = property(Collider2D), _dec3 = property(Animation), _dec(_class = (_class2 = class BossEnemy extends (_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
        error: Error()
      }), Enemy) : Enemy) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bossCollider", _descriptor, this);

          _initializerDefineProperty(this, "animation", _descriptor2, this);

          this.isAnimatingAttack = false;
        }

        start() {
          this.bossCollider.on(Contact2DType.BEGIN_CONTACT, this.collisionBegin, this);
          this.bossCollider.on(Contact2DType.END_CONTACT, this.collisionEnd, this);
        }

        collisionBegin(_selfCollider, otherCollider) {
          if (otherCollider.group === (_crd && GroupType === void 0 ? (_reportPossibleCrUseOfGroupType({
            error: Error()
          }), GroupType) : GroupType).PLAYER) {
            this.animateAttack();
          }
        }

        collisionEnd(_selfCollider, otherCollider) {
          if (otherCollider.group === (_crd && GroupType === void 0 ? (_reportPossibleCrUseOfGroupType({
            error: Error()
          }), GroupType) : GroupType).PLAYER) {
            this.animateMove();
          }
        }

        animateAttack() {
          if (this.isAnimatingAttack) return;
          this.isAnimatingAttack = true;
          this.animation.play("Attack");
        }

        animateMove() {
          if (!this.isAnimatingAttack) return;
          this.isAnimatingAttack = false;
          this.animation.play("Run");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bossCollider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec3], {
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
//# sourceMappingURL=b6eab59825e94fb0d06b80368c4718100f7e788c.js.map