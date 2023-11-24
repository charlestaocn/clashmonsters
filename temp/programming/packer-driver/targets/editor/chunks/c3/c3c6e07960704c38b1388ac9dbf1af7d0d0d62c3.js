System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, EnemyMover, FollowTargetEnemyMover, _crd;

  function _reportPossibleCrUseOfEnemyMover(extras) {
    _reporterNs.report("EnemyMover", "./EnemyMover", _context.meta, extras);
  }

  _export("FollowTargetEnemyMover", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EnemyMover = _unresolved_2.EnemyMover;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20a3fVrQC1GOZYpyQ9w9VIG", "FollowTargetEnemyMover", undefined);

      __checkObsolete__(['Vec3']);

      _export("FollowTargetEnemyMover", FollowTargetEnemyMover = class FollowTargetEnemyMover extends (_crd && EnemyMover === void 0 ? (_reportPossibleCrUseOfEnemyMover({
        error: Error()
      }), EnemyMover) : EnemyMover) {
        gameTick(deltaTime) {
          this.enemies.forEach(enemy => {
            let direction = new Vec3();
            direction = Vec3.subtract(direction, this.targetNode.worldPosition, enemy.node.worldPosition);
            enemy.gameTick(direction.normalize(), deltaTime);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c3c6e07960704c38b1388ac9dbf1af7d0d0d62c3.js.map