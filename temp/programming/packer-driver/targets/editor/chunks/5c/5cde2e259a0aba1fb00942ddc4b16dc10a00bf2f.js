System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameTimer, roundToOneDecimal, DelayedEnemySpawner, CircularEnemySpawner, _crd;

  function _reportPossibleCrUseOfGameTimer(extras) {
    _reporterNs.report("GameTimer", "../../../../Services/GameTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfroundToOneDecimal(extras) {
    _reporterNs.report("roundToOneDecimal", "../../../../Services/Utils/MathUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCircularEnemySpawnerSettings(extras) {
    _reporterNs.report("CircularEnemySpawnerSettings", "../../../Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelayedEnemySpawner(extras) {
    _reporterNs.report("DelayedEnemySpawner", "./DelayedEnemySpawner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemySpawner(extras) {
    _reporterNs.report("EnemySpawner", "./EnemySpawner", _context.meta, extras);
  }

  _export("CircularEnemySpawner", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameTimer = _unresolved_2.GameTimer;
    }, function (_unresolved_3) {
      roundToOneDecimal = _unresolved_3.roundToOneDecimal;
    }, function (_unresolved_4) {
      DelayedEnemySpawner = _unresolved_4.DelayedEnemySpawner;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e8e2Nq/N1Jlar/vogCSI2M", "CircularEnemySpawner", undefined);

      _export("CircularEnemySpawner", CircularEnemySpawner = class CircularEnemySpawner extends (_crd && DelayedEnemySpawner === void 0 ? (_reportPossibleCrUseOfDelayedEnemySpawner({
        error: Error()
      }), DelayedEnemySpawner) : DelayedEnemySpawner) {
        constructor(enemySpawner, settings) {
          super(settings.common.startDelay, settings.common.stopDelay);
          this.spawnTimer = void 0;
          this.enemyId = void 0;
          this.enemiesToSpawn = void 0;
          this.enemySpawner = enemySpawner;
          this.spawnTimer = new (_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
            error: Error()
          }), GameTimer) : GameTimer)(settings.common.cooldown);
          this.enemyId = settings.common.enemyId;
          this.enemiesToSpawn = settings.enemiesToSpawn;
        }

        delayedGameTick(deltaTime) {
          this.spawnTimer.gameTick(deltaTime);

          if (this.spawnTimer.tryFinishPeriod()) {
            const angle = 2 * Math.PI / this.enemiesToSpawn;

            for (let i = 0; i < this.enemiesToSpawn; i++) {
              const posX = (_crd && roundToOneDecimal === void 0 ? (_reportPossibleCrUseOfroundToOneDecimal({
                error: Error()
              }), roundToOneDecimal) : roundToOneDecimal)(Math.sin(angle * i)) * 600;
              const posY = (_crd && roundToOneDecimal === void 0 ? (_reportPossibleCrUseOfroundToOneDecimal({
                error: Error()
              }), roundToOneDecimal) : roundToOneDecimal)(Math.cos(angle * i)) * 600;
              this.enemySpawner.spawnNewEnemy(posX, posY, this.enemyId);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5cde2e259a0aba1fb00942ddc4b16dc10a00bf2f.js.map