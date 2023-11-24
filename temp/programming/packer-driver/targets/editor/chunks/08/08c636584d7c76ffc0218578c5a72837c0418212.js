System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, ProgressBar, _decorator, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PlayerHealthUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUnitHealth(extras) {
    _reporterNs.report("UnitHealth", "../../UnitHealth", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      ProgressBar = _cc.ProgressBar;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "def45qvzIhOxpf/TVsL6wFb", "PlayerHealthUI", undefined);

      __checkObsolete__(['Component', 'ProgressBar', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerHealthUI", PlayerHealthUI = (_dec = ccclass("PlayerHealthUI"), _dec2 = property(ProgressBar), _dec(_class = (_class2 = class PlayerHealthUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "healthBar", _descriptor, this);

          this.health = void 0;
        }

        init(health) {
          this.healthBar.progress = 1;
          this.health = health;
          this.health.HealthPointsChangeEvent.on(this.updateHealthBar, this);
        }

        updateHealthBar() {
          this.healthBar.progress = this.health.HealthPoints / this.health.MaxHealthPoints;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "healthBar", [_dec2], {
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
//# sourceMappingURL=08c636584d7c76ffc0218578c5a72837c0418212.js.map