System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, randomRange, GameTimer, randomPositiveOrNegative, DelayedEnemySpawner, WaveEnemySpawner, _crd;

  function _reportPossibleCrUseOfGameTimer(extras) {
    _reporterNs.report("GameTimer", "../../../../Services/GameTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrandomPositiveOrNegative(extras) {
    _reporterNs.report("randomPositiveOrNegative", "../../../../Services/Utils/MathUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaveEnemySpawnerSettings(extras) {
    _reporterNs.report("WaveEnemySpawnerSettings", "../../../Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelayedEnemySpawner(extras) {
    _reporterNs.report("DelayedEnemySpawner", "./DelayedEnemySpawner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemySpawner(extras) {
    _reporterNs.report("EnemySpawner", "./EnemySpawner", _context.meta, extras);
  }

  _export("WaveEnemySpawner", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      randomRange = _cc.randomRange;
    }, function (_unresolved_2) {
      GameTimer = _unresolved_2.GameTimer;
    }, function (_unresolved_3) {
      randomPositiveOrNegative = _unresolved_3.randomPositiveOrNegative;
    }, function (_unresolved_4) {
      DelayedEnemySpawner = _unresolved_4.DelayedEnemySpawner;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4d273GCTRG0rZXbB64f2gk", "WaveEnemySpawner", undefined);

      __checkObsolete__(['randomRange']);

      _export("WaveEnemySpawner", WaveEnemySpawner = class WaveEnemySpawner extends (_crd && DelayedEnemySpawner === void 0 ? (_reportPossibleCrUseOfDelayedEnemySpawner({
        error: Error()
      }), DelayedEnemySpawner) : DelayedEnemySpawner) {
        constructor(enemySpawner, settings) {
          super(settings.common.startDelay, settings.common.stopDelay);
          this.enemiesPerWave = void 0;
          this.enemyId = void 0;
          this.spawnTimer = void 0;
          this.enemySpawner = enemySpawner;
          this.spawnTimer = new (_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
            error: Error()
          }), GameTimer) : GameTimer)(settings.common.cooldown);
          this.enemiesPerWave = settings.enemiesToSpawn;
          this.enemyId = settings.common.enemyId;
        }

        delayedGameTick(deltaTime) {
          this.spawnTimer.gameTick(deltaTime);

          if (this.spawnTimer.tryFinishPeriod()) {
            const defaultPosX = (500 + randomRange(0, 100)) * (_crd && randomPositiveOrNegative === void 0 ? (_reportPossibleCrUseOfrandomPositiveOrNegative({
              error: Error()
            }), randomPositiveOrNegative) : randomPositiveOrNegative)();
            const defaultPosY = randomRange(0, 500) * (_crd && randomPositiveOrNegative === void 0 ? (_reportPossibleCrUseOfrandomPositiveOrNegative({
              error: Error()
            }), randomPositiveOrNegative) : randomPositiveOrNegative)();
            const enemies = [];
            const side = Math.ceil(Math.sqrt(this.enemiesPerWave));

            for (let i = 0; i < this.enemiesPerWave; i++) {
              const randomOffsetX = randomRange(-20, 20);
              const randomOffsetY = randomRange(-20, 20);
              const posX = defaultPosX + randomOffsetX + 50 * (i % side);
              const posY = defaultPosY + randomOffsetY + 50 * Math.floor(i / side);
              const enemy = this.enemySpawner.spawnNewEnemy(posX, posY, this.enemyId);
              enemies.push(enemy);
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=963805f39c751757687bde41793cd7e153804fc4.js.map