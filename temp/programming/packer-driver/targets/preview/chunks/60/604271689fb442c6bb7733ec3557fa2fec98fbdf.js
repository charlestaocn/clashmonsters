System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, EnemyMover, PeriodicFollowTargetEnemyMover, _crd, EnemyFollowState;

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../../Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyMover(extras) {
    _reporterNs.report("EnemyMover", "../EnemyMover", _context.meta, extras);
  }

  _export("PeriodicFollowTargetEnemyMover", void 0);

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

      _cclegacy._RF.push({}, "02c4bPsP3dIXaU5MlZO1dY7", "PeriodicFollowTargetEnemyMover", undefined);

      __checkObsolete__(['Node', 'Vec3']);

      _export("PeriodicFollowTargetEnemyMover", PeriodicFollowTargetEnemyMover = class PeriodicFollowTargetEnemyMover extends (_crd && EnemyMover === void 0 ? (_reportPossibleCrUseOfEnemyMover({
        error: Error()
      }), EnemyMover) : EnemyMover) {
        constructor(targetNode, followTime, waitTime) {
          super(targetNode);
          this.enemyToFollowState = new Map();
          this.enemyToStateTimeLeft = new Map();
          this.followTime = followTime;
          this.waitTime = waitTime;
        }

        addEnemy(enemy) {
          this.setEnemyFollowState(enemy, EnemyFollowState.Follow, this.followTime);
          super.addEnemy(enemy);
        }

        removeEnemy(enemy) {
          super.removeEnemy(enemy);
        }

        gameTick(deltaTime) {
          for (var enemy of this.enemies) {
            var stateTimeLeft = this.enemyToStateTimeLeft.get(enemy) - deltaTime;

            if (stateTimeLeft <= 0) {
              this.switchEnemyFollowState(enemy);
            } else {
              this.enemyToStateTimeLeft.set(enemy, stateTimeLeft);
            }

            if (this.enemyToFollowState.get(enemy) === EnemyFollowState.Follow) {
              var direction = new Vec3();
              direction = Vec3.subtract(direction, this.targetNode.worldPosition, enemy.node.worldPosition);
              enemy.gameTick(direction.normalize(), deltaTime);
            } else if (this.enemyToFollowState.get(enemy) === EnemyFollowState.Wait) {
              enemy.gameTick(new Vec3(), deltaTime);
            }
          }
        }

        switchEnemyFollowState(enemy) {
          var followState = this.enemyToFollowState.get(enemy);

          if (followState === EnemyFollowState.Follow) {
            this.setEnemyFollowState(enemy, EnemyFollowState.Wait, this.waitTime);
          } else if (followState === EnemyFollowState.Wait) {
            this.setEnemyFollowState(enemy, EnemyFollowState.Follow, this.followTime);
          }
        }

        setEnemyFollowState(enemy, followState, stateTimeLeft) {
          this.enemyToFollowState.set(enemy, followState);
          this.enemyToStateTimeLeft.set(enemy, stateTimeLeft);
        }

      });

      _export("EnemyFollowState", EnemyFollowState = /*#__PURE__*/function (EnemyFollowState) {
        EnemyFollowState[EnemyFollowState["Follow"] = 0] = "Follow";
        EnemyFollowState[EnemyFollowState["Wait"] = 1] = "Wait";
        return EnemyFollowState;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=604271689fb442c6bb7733ec3557fa2fec98fbdf.js.map