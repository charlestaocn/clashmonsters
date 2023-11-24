System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, randomRange, GameTimer, randomPositiveOrNegative, DelayedEnemySpawner, IndividualEnemySpawner, _crd;

  function _reportPossibleCrUseOfGameTimer(extras) {
    _reporterNs.report("GameTimer", "../../../../Services/GameTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfrandomPositiveOrNegative(extras) {
    _reporterNs.report("randomPositiveOrNegative", "../../../../Services/Utils/MathUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIndividualEnemySpawnerSettings(extras) {
    _reporterNs.report("IndividualEnemySpawnerSettings", "../../../Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelayedEnemySpawner(extras) {
    _reporterNs.report("DelayedEnemySpawner", "./DelayedEnemySpawner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemySpawner(extras) {
    _reporterNs.report("EnemySpawner", "./EnemySpawner", _context.meta, extras);
  }

  _export("IndividualEnemySpawner", void 0);

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

      _cclegacy._RF.push({}, "2deefMtikJGF4RmVcSbCmQ5", "IndividualEnemySpawner", undefined);

      __checkObsolete__(['randomRange']);

      _export("IndividualEnemySpawner", IndividualEnemySpawner = class IndividualEnemySpawner extends (_crd && DelayedEnemySpawner === void 0 ? (_reportPossibleCrUseOfDelayedEnemySpawner({
        error: Error()
      }), DelayedEnemySpawner) : DelayedEnemySpawner) {
        constructor(enemySpawner, settings) {
          super(settings.common.startDelay, settings.common.stopDelay);
          this.spawnTimer = void 0;
          this.enemyId = void 0;
          this.enemySpawner = enemySpawner;
          this.spawnTimer = new (_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
            error: Error()
          }), GameTimer) : GameTimer)(settings.common.cooldown);
          this.enemyId = settings.common.enemyId;
        }

        delayedGameTick(deltaTime) {
          this.spawnTimer.gameTick(deltaTime);

          if (this.spawnTimer.tryFinishPeriod()) {
            const posX = randomRange(300, 600) * (_crd && randomPositiveOrNegative === void 0 ? (_reportPossibleCrUseOfrandomPositiveOrNegative({
              error: Error()
            }), randomPositiveOrNegative) : randomPositiveOrNegative)();
            const posY = randomRange(300, 600) * (_crd && randomPositiveOrNegative === void 0 ? (_reportPossibleCrUseOfrandomPositiveOrNegative({
              error: Error()
            }), randomPositiveOrNegative) : randomPositiveOrNegative)();
            this.enemySpawner.spawnNewEnemy(posX, posY, this.enemyId);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c77cb3e6f663c483f611eabcb248f1c69700dba.js.map