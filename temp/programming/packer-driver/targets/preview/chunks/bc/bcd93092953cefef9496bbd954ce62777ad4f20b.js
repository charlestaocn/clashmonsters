System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, EnemyDeathEffect;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "213a9aw7AxJUZPp4rSYoD+B", "EnemyDeathEffect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Animation', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyDeathEffect", EnemyDeathEffect = (_dec = ccclass("EnemyDeathEffect"), _dec2 = property(Animation), _dec(_class = (_class2 = class EnemyDeathEffect extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "animation", _descriptor, this);
        }

        setup(worldPosition) {
          this.node.setWorldPosition(worldPosition);
          this.node.active = true;
          this.animation.play("DeathEffect");
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
//# sourceMappingURL=bcd93092953cefef9496bbd954ce62777ad4f20b.js.map