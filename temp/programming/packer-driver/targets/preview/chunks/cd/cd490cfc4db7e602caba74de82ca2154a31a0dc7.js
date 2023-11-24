System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, EnemyMover, WaveEnemyMover, _crd;

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyMover(extras) {
    _reporterNs.report("EnemyMover", "./EnemyMover", _context.meta, extras);
  }

  _export("WaveEnemyMover", void 0);

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

      _cclegacy._RF.push({}, "5215fbzhV5Njq+tgJFcp7Ly", "WaveEnemyMover", undefined);

      __checkObsolete__(['Vec3']);

      _export("WaveEnemyMover", WaveEnemyMover = class WaveEnemyMover extends (_crd && EnemyMover === void 0 ? (_reportPossibleCrUseOfEnemyMover({
        error: Error()
      }), EnemyMover) : EnemyMover) {
        constructor() {
          super(...arguments);
          this.enemyToDirection = new Map();
          this.lastTargetPosition = new Vec3();
          this.lastDirection = new Vec3();
        }

        addEnemy(enemy) {
          var direction = new Vec3(); // if the enemy is added soon enough, move as a single group towards one direction

          if (Vec3.equals(this.lastTargetPosition, this.targetNode.worldPosition)) {
            direction = this.lastDirection;
          } else {
            direction = Vec3.subtract(direction, this.targetNode.worldPosition, enemy.node.worldPosition);
            this.lastDirection = direction;
            this.lastTargetPosition = this.targetNode.worldPosition.clone();
          }

          this.enemyToDirection.set(enemy, direction.normalize());
          super.addEnemy(enemy);
        }

        removeEnemy(enemy) {
          this.enemyToDirection.delete(enemy);
          super.removeEnemy(enemy);
        }

        gameTick(deltaTime) {
          for (var enemyAndDirection of this.enemyToDirection) {
            enemyAndDirection[0].gameTick(enemyAndDirection[1], deltaTime);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cd490cfc4db7e602caba74de82ca2154a31a0dc7.js.map