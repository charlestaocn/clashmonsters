System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Contact2DType, Item, MagnetCollisionSystem, _crd;

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "../Items/Item", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemAttractor(extras) {
    _reporterNs.report("ItemAttractor", "../Items/ItemAttractor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMagnet(extras) {
    _reporterNs.report("Magnet", "../Unit/Player/Magnet", _context.meta, extras);
  }

  _export("MagnetCollisionSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      Item = _unresolved_2.Item;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "632b8DtwZNMhLVxf3Zju6dn", "MagnetCollisionSystem", undefined);

      __checkObsolete__(['Collider2D', 'Contact2DType']);

      _export("MagnetCollisionSystem", MagnetCollisionSystem = class MagnetCollisionSystem {
        constructor(magnet, itemAttractor) {
          this.itemAttractor = itemAttractor;
          magnet.Collider.on(Contact2DType.BEGIN_CONTACT, this.onMagnetContactBegin, this);
        }

        onMagnetContactBegin(_selfCollider, otherCollider) {
          this.itemAttractor.addItem(otherCollider.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
            error: Error()
          }), Item) : Item));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=312bd5279de038f430a20fe1b9c348be13d6033c.js.map