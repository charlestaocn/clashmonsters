System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, CircleCollider2D, GameTimer, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Magnet;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameTimer(extras) {
    _reporterNs.report("GameTimer", "../../../Services/GameTimer", _context.meta, extras);
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
      CircleCollider2D = _cc.CircleCollider2D;
    }, function (_unresolved_2) {
      GameTimer = _unresolved_2.GameTimer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "05a1dLKkINNEa04GJK8DVCC", "Magnet", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'CircleCollider2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Magnet", Magnet = (_dec = ccclass("Magnet"), _dec2 = property(CircleCollider2D), _dec(_class = (_class2 = class Magnet extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "collider", _descriptor, this);

          this.timer = void 0;
          this.duration = void 0;
        }

        get Collider() {
          return this.collider;
        }

        init(duration) {
          this.duration = duration;
          this.node.active = false;
        }

        activate() {
          this.timer = new (_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
            error: Error()
          }), GameTimer) : GameTimer)(this.duration);
          this.node.active = true;
        }

        gameTick(deltaTime) {
          if (!this.node.active) return;
          this.timer.gameTick(deltaTime);

          if (this.timer.tryFinishPeriod()) {
            this.node.active = false;
          }
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
//# sourceMappingURL=9ef15de00bf51c74ab5baa7bd22e701c348deb86.js.map