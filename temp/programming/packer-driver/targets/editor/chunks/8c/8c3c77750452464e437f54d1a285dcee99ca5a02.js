System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec2, Signal, GameTimer, roundToOneDecimal, HaloProjectileLauncher, _crd;

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../../Services/EventSystem/Signal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTimer(extras) {
    _reporterNs.report("GameTimer", "../../../Services/GameTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfroundToOneDecimal(extras) {
    _reporterNs.report("roundToOneDecimal", "../../../Services/Utils/MathUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHaloLauncherSettings(extras) {
    _reporterNs.report("HaloLauncherSettings", "../../Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProjectileLauncherSignaler(extras) {
    _reporterNs.report("IProjectileLauncherSignaler", "../IProjectileLauncherSignaler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProjectileCollision(extras) {
    _reporterNs.report("ProjectileCollision", "../ProjectileCollision", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProjectileData(extras) {
    _reporterNs.report("ProjectileData", "./ProjectileData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProjectileLauncher(extras) {
    _reporterNs.report("ProjectileLauncher", "./ProjectileLauncher", _context.meta, extras);
  }

  _export("HaloProjectileLauncher", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      Signal = _unresolved_2.Signal;
    }, function (_unresolved_3) {
      GameTimer = _unresolved_3.GameTimer;
    }, function (_unresolved_4) {
      roundToOneDecimal = _unresolved_4.roundToOneDecimal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "422b4bsPhVDfZf8f0Sid8O+", "HaloProjectileLauncher", undefined);

      __checkObsolete__(['Node', 'Vec2']);

      _export("HaloProjectileLauncher", HaloProjectileLauncher = class HaloProjectileLauncher {
        constructor(launcher, playerNode, settings, projectileData) {
          this.currentUpgrade = 0;
          this.defaultCooldown = 0;
          this.cooldownDivisorPerUpgrade = 0;
          this.directions = [];
          this.fireTimer = new (_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
            error: Error()
          }), GameTimer) : GameTimer)(0);
          this.projectilesLaunchedEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.launcher = launcher;
          this.playerNode = playerNode;
          this.defaultCooldown = settings.launcher.cooldown;
          this.cooldownDivisorPerUpgrade = settings.cooldownDivisorPerUpgrade;
          const angle = 2 * Math.PI / settings.projectilesToSpawn;

          for (let i = 0; i < settings.projectilesToSpawn; i++) {
            const x = (_crd && roundToOneDecimal === void 0 ? (_reportPossibleCrUseOfroundToOneDecimal({
              error: Error()
            }), roundToOneDecimal) : roundToOneDecimal)(Math.sin(angle * i));
            const y = (_crd && roundToOneDecimal === void 0 ? (_reportPossibleCrUseOfroundToOneDecimal({
              error: Error()
            }), roundToOneDecimal) : roundToOneDecimal)(Math.cos(angle * i));
            this.directions.push(new Vec2(x, y).normalize());
          }

          launcher.init(settings.launcher.projectileLifetime, settings.launcher.projectileSpeed, projectileData.damage, projectileData.pierces);
        }

        get ProjectileCollisionEvent() {
          return this.launcher.ProjectileCollisionEvent;
        }

        get ProjectileLaunchedEvent() {
          return this.launcher.ProjectileLaunchedEvent;
        }

        get ProjectilesLaunchedEvent() {
          return this.projectilesLaunchedEvent;
        }

        gameTick(deltaTime) {
          if (this.currentUpgrade == 0) return;
          this.launcher.gameTick(deltaTime);
          this.fireTimer.gameTick(deltaTime);

          if (this.fireTimer.tryFinishPeriod()) {
            this.launcher.fireProjectiles(this.playerNode.worldPosition, this.directions);
            this.projectilesLaunchedEvent.trigger();
          }
        }

        upgrade() {
          this.currentUpgrade++;
          this.fireTimer = new (_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
            error: Error()
          }), GameTimer) : GameTimer)(this.defaultCooldown / (this.cooldownDivisorPerUpgrade * this.currentUpgrade));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8c3c77750452464e437f54d1a285dcee99ca5a02.js.map