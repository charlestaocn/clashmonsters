System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Enum, Signal, ItemType, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Item;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../Services/EventSystem/Signal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "./ItemType", _context.meta, extras);
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
      Enum = _cc.Enum;
    }, function (_unresolved_2) {
      Signal = _unresolved_2.Signal;
    }, function (_unresolved_3) {
      ItemType = _unresolved_3.ItemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "724bauqfhVH0YWsXug16uHL", "Item", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'ccenum', 'Enum']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Item", Item = (_dec = ccclass("Item"), _dec2 = property({
        type: Enum(_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
          error: Error()
        }), ItemType) : ItemType)
      }), _dec(_class = (_class2 = class Item extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemType", _descriptor, this);

          this.pickUpEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
        }

        get ItemType() {
          return this.itemType;
        }

        setup(position) {
          this.node.setWorldPosition(position);
          this.node.active = true;
        }

        get PickupEvent() {
          return this.pickUpEvent;
        }

        pickup() {
          this.pickUpEvent.trigger(this);
          this.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemType", [_dec2], {
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
//# sourceMappingURL=10cbe095fe2921e5786f9afdebc601683221dd8a.js.map