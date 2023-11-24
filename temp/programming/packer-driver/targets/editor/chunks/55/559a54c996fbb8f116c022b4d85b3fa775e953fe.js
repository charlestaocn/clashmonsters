System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PeriodicFollowTargetEnemyMover, PeriodicFollowMovers, _crd;

  function _reportPossibleCrUseOfPeriodicFollowMoverSettings(extras) {
    _reporterNs.report("PeriodicFollowMoverSettings", "../../../../Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../../Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEnemyMover(extras) {
    _reporterNs.report("IEnemyMover", "../EnemyMover", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPeriodicFollowTargetEnemyMover(extras) {
    _reporterNs.report("PeriodicFollowTargetEnemyMover", "./PeriodicFollowTargetEnemyMover", _context.meta, extras);
  }

  _export("PeriodicFollowMovers", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      PeriodicFollowTargetEnemyMover = _unresolved_2.PeriodicFollowTargetEnemyMover;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dadbfL8KfBDSIPowYY1NYHp", "PeriodicFollowMovers", undefined);

      __checkObsolete__(['Node']);

      _export("PeriodicFollowMovers", PeriodicFollowMovers = class PeriodicFollowMovers {
        constructor(targetNode, settings) {
          this.enemyIdToMover = new Map();

          for (const moverSettings of settings) {
            this.enemyIdToMover.set(moverSettings.enemyIdToAffect, new (_crd && PeriodicFollowTargetEnemyMover === void 0 ? (_reportPossibleCrUseOfPeriodicFollowTargetEnemyMover({
              error: Error()
            }), PeriodicFollowTargetEnemyMover) : PeriodicFollowTargetEnemyMover)(targetNode, moverSettings.followTime, moverSettings.waitTime));
          }
        }

        addEnemy(enemy) {
          this.requireEnemyMover(enemy);
          this.enemyIdToMover.get(enemy.Id).addEnemy(enemy);
        }

        removeEnemy(enemy) {
          this.requireEnemyMover(enemy);
          this.enemyIdToMover.get(enemy.Id).removeEnemy(enemy);
        }

        gameTick(deltaTime) {
          for (const enemyMover of this.enemyIdToMover.values()) {
            enemyMover.gameTick(deltaTime);
          }
        }

        requireEnemyMover(enemy) {
          if (!this.enemyIdToMover.has(enemy.Id)) {
            throw new Error("There is no periodic follow mover for enemy with id " + enemy.Id);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=559a54c996fbb8f116c022b4d85b3fa775e953fe.js.map