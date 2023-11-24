System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, getDirection, ItemAttractor, _crd;

  function _reportPossibleCrUseOfgetDirection(extras) {
    _reporterNs.report("getDirection", "../../Services/Utils/VecUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "./Item", _context.meta, extras);
  }

  _export("ItemAttractor", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      getDirection = _unresolved_2.getDirection;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d10341ifJGV7qk2Jzo2LfZ", "ItemAttractor", undefined);

      __checkObsolete__(['Node', 'Vec3']);

      _export("ItemAttractor", ItemAttractor = class ItemAttractor {
        constructor(playerNode, speedIncreasePerSecond) {
          this.items = [];
          this.speedValues = [];
          this.playerNode = playerNode;
          this.speedIncreasePerSecond = speedIncreasePerSecond;
        }

        gameTick(deltaTime) {
          for (var i = 0; i < this.items.length; i++) {
            var direction = (_crd && getDirection === void 0 ? (_reportPossibleCrUseOfgetDirection({
              error: Error()
            }), getDirection) : getDirection)(this.playerNode.worldPosition, this.items[i].node.worldPosition);
            var position = this.items[i].node.worldPosition.clone();
            position.x += direction.x * this.speedValues[i] * deltaTime;
            position.y += direction.y * this.speedValues[i] * deltaTime;
            this.items[i].node.setWorldPosition(position);
            this.speedValues[i] += this.speedIncreasePerSecond * deltaTime;
          }
        }

        addItem(item) {
          if (this.items.includes(item)) return;
          item.PickupEvent.on(this.removeItem, this);
          this.items.push(item);
          this.speedValues.push(0);
        }

        removeItem(item) {
          item.PickupEvent.off(this.removeItem);
          var index = this.items.indexOf(item);
          this.items.splice(index, 1);
          this.speedValues.splice(index, 1);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=42c5d3fe0e667fedab86fbde4c57d78aa70f3424.js.map