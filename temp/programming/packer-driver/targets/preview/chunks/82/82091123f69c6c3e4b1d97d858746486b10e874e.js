System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, PlayerHealthUI, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, PlayerUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUnitHealth(extras) {
    _reporterNs.report("UnitHealth", "../../UnitHealth", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHealthUI(extras) {
    _reporterNs.report("PlayerHealthUI", "./PlayerHealthUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      PlayerHealthUI = _unresolved_2.PlayerHealthUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6247fDeRcFOdImqOIwhfOOj", "PlayerUI", undefined);

      __checkObsolete__(['Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerUI", PlayerUI = (_dec = ccclass("PlayerUI"), _dec2 = property(_crd && PlayerHealthUI === void 0 ? (_reportPossibleCrUseOfPlayerHealthUI({
        error: Error()
      }), PlayerHealthUI) : PlayerHealthUI), _dec(_class = (_class2 = class PlayerUI extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "healthUI", _descriptor, this);
        }

        init(playerHealth) {
          this.healthUI.init(playerHealth);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "healthUI", [_dec2], {
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
//# sourceMappingURL=82091123f69c6c3e4b1d97d858746486b10e874e.js.map