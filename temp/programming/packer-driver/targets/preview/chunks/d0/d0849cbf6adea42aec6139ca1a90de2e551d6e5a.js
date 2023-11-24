System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, _decorator, Enemy, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AnimatedEnemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Enemy = _unresolved_2.Enemy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2fbd7DLmiNFybvIJxxrW6Iu", "AnimatedEnemy", undefined);

      __checkObsolete__(['Animation', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimatedEnemy", AnimatedEnemy = (_dec = ccclass("AnimatedEnemy"), _dec2 = property(Animation), _dec(_class = (_class2 = class AnimatedEnemy extends (_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
        error: Error()
      }), Enemy) : Enemy) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "animation", _descriptor, this);

          this.isAnimatingIdle = false;
        }

        gameTick(move, deltaTime) {
          super.gameTick(move, deltaTime);
          console.log("Move x:  " + move.x + " Move y:  " + move.y);

          if (move.x === 0 && move.y === 0) {
            this.animateIdle();
          } else {
            this.animateRun();
          }
        }

        animateIdle() {
          if (this.isAnimatingIdle) return;
          this.isAnimatingIdle = true;
          this.animation.play("Idle");
        }

        animateRun() {
          if (!this.isAnimatingIdle) return;
          this.isAnimatingIdle = false;
          this.animation.play("Run");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec2], {
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
//# sourceMappingURL=d0849cbf6adea42aec6139ca1a90de2e551d6e5a.js.map