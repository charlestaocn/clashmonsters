System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BoxCollider2D, Component, Contact2DType, _decorator, Signal, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, UpgradableCollider;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../../../Services/EventSystem/Signal", _context.meta, extras);
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
      Contact2DType = _cc.Contact2DType;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Signal = _unresolved_2.Signal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bba49sAP+VAQoXzfR8BfXXT", "UpgradableCollider", undefined);

      __checkObsolete__(['BoxCollider2D', 'Collider2D', 'Component', 'Contact2DType', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UpgradableCollider", UpgradableCollider = (_dec = ccclass("UpgradableCollider"), _dec2 = property(BoxCollider2D), _dec(_class = (_class2 = class UpgradableCollider extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "colliders", _descriptor, this);

          this.contactBeginEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.currentUpgradeLevel = 0;
        }

        init() {
          this.setUpgradeLevel();

          for (var collider of this.colliders) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onColliderContactBegin, this);
          }
        }

        get ContactBeginEvent() {
          return this.contactBeginEvent;
        }

        upgrade() {
          if (this.currentUpgradeLevel == this.colliders.length - 1) throw new Error("Already at max upgrade! " + this.currentUpgradeLevel);
          this.currentUpgradeLevel++;
          this.setUpgradeLevel();
        }

        setUpgradeLevel() {
          for (var collider of this.colliders) {
            collider.node.active = false;
          }

          this.colliders[this.currentUpgradeLevel].node.active = true;
        }

        onColliderContactBegin(thisCollider, otherCollider) {
          this.contactBeginEvent.trigger(otherCollider);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "colliders", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=771942566da4c08f4354318e0c1e67d8ef07e01f.js.map