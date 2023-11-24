System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EnemyMover, _crd;

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../Enemy", _context.meta, extras);
  }

  _export("EnemyMover", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "179f7v6RPxPQZQySuxPOZGm", "EnemyMover", undefined);

      __checkObsolete__(['Node']);

      _export("EnemyMover", EnemyMover = class EnemyMover {
        constructor(targetNode) {
          this.targetNode = void 0;
          this.enemies = [];
          this.targetNode = targetNode;
        }

        addEnemy(enemy) {
          this.enemies.push(enemy);
        }

        removeEnemy(enemy) {
          var index = this.enemies.indexOf(enemy);

          if (index != -1) {
            this.enemies.splice(index, 1);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d01bf1c500ca7916153e3a7ef44b0bdfce86855e.js.map