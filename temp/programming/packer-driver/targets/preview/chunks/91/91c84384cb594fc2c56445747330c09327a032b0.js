System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, Vec2, GameTimer, EnemyProjectileLauncher, _crd;

  function _reportPossibleCrUseOfGameTimer(extras) {
    _reporterNs.report("GameTimer", "../../../../Services/GameTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyLauncherSettings(extras) {
    _reporterNs.report("EnemyLauncherSettings", "../../../Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProjectileLauncher(extras) {
    _reporterNs.report("ProjectileLauncher", "../../../Projectile/ProjectileLauncher/ProjectileLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "../EnemyManager", _context.meta, extras);
  }

  _export("EnemyProjectileLauncher", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      GameTimer = _unresolved_2.GameTimer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "057f61C/hlFr77+jWZfiiAf", "EnemyProjectileLauncher", undefined);

      __checkObsolete__(['Vec3', 'Node', 'Vec2']);

      _export("EnemyProjectileLauncher", EnemyProjectileLauncher = class EnemyProjectileLauncher {
        constructor(projectileLauncher, playerNode, enemyManager, settings) {
          this.enemyToTimer = new Map();
          this.cooldown = void 0;
          this.enemyIds = void 0;
          this.projectileLauncher = projectileLauncher;
          this.playerNode = playerNode;
          enemyManager.EnemyAddedEvent.on(this.tryAddEnemy, this);
          enemyManager.EnemyRemovedEvent.on(this.tryRemoveEnemy, this);
          this.cooldown = settings.cooldown;
          this.enemyIds = settings.enemyIds;
          projectileLauncher.init(settings.projectileLifetime, settings.projectileSpeed, settings.projectileDamage, 1);
        }

        tryAddEnemy(enemy) {
          if (this.enemyIds.includes(enemy.Id)) {
            this.enemyToTimer.set(enemy, new (_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
              error: Error()
            }), GameTimer) : GameTimer)(this.cooldown));
          }
        }

        tryRemoveEnemy(enemy) {
          if (!this.enemyToTimer.has(enemy)) return;
          this.enemyToTimer.delete(enemy);
        }

        gameTick(deltaTime) {
          this.projectileLauncher.gameTick(deltaTime);

          for (var enemyAndTimerPair of this.enemyToTimer) {
            var enemyWorldPosition = enemyAndTimerPair[0].node.worldPosition;
            var shootTimer = enemyAndTimerPair[1];
            shootTimer.gameTick(deltaTime);

            if (shootTimer.tryFinishPeriod()) {
              var direction = new Vec3();
              direction = Vec3.subtract(direction, this.playerNode.worldPosition, enemyWorldPosition);
              this.projectileLauncher.fireProjectiles(enemyWorldPosition, [new Vec2(direction.x, direction.y)]);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91c84384cb594fc2c56445747330c09327a032b0.js.map