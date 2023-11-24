System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, GameTimer, delay, WaveProjectileLauncher, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTimer(extras) {
    _reporterNs.report("GameTimer", "../../../Services/GameTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../../Services/Utils/AsyncUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaveLauncherSettings(extras) {
    _reporterNs.report("WaveLauncherSettings", "../../Data/GameSettings", _context.meta, extras);
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

  _export("WaveProjectileLauncher", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      GameTimer = _unresolved_2.GameTimer;
    }, function (_unresolved_3) {
      delay = _unresolved_3.delay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1ed6e/x2i5HJ49ELoAoSHGc", "WaveProjectileLauncher", undefined);

      __checkObsolete__(['Node', 'Vec2']);

      _export("WaveProjectileLauncher", WaveProjectileLauncher = class WaveProjectileLauncher {
        constructor(launcher, playerNode, directions, settings, projectileData) {
          this.currentUpgrade = 0;
          this.wavesToShootPerUpgrade = 0;
          this.fireTimer = void 0;
          this.wavesToShoot = void 0;
          this.wavesDelayMs = void 0;
          this.launcher = launcher;
          this.playerNode = playerNode;
          this.directions = directions;
          this.wavesToShootPerUpgrade = settings.wavesToShootPerUpgrade;
          this.fireTimer = new (_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
            error: Error()
          }), GameTimer) : GameTimer)(settings.launcher.cooldown);
          this.wavesToShoot = settings.launcher.wavesToShoot;
          this.wavesDelayMs = settings.launcher.wavesDelayMs;
          launcher.init(settings.launcher.projectileLifetime, settings.launcher.projectileSpeed, projectileData.damage, projectileData.pierces);
        }

        get ProjectileCollisionEvent() {
          return this.launcher.ProjectileCollisionEvent;
        }

        get ProjectileLaunchedEvent() {
          return this.launcher.ProjectileLaunchedEvent;
        }

        gameTick(deltaTime) {
          if (this.currentUpgrade == 0) return;
          this.launcher.gameTick(deltaTime);
          this.fireTimer.gameTick(deltaTime);

          if (this.fireTimer.tryFinishPeriod()) {
            this.fireProjectiles();
          }
        }

        upgrade() {
          this.currentUpgrade++;
          this.wavesToShoot += this.wavesToShootPerUpgrade;
        }

        fireProjectiles() {
          var _this = this;

          return _asyncToGenerator(function* () {
            for (var i = 0; i < _this.wavesToShoot; i++) {
              _this.launcher.fireProjectiles(_this.playerNode.worldPosition, _this.directions);

              yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
                error: Error()
              }), delay) : delay)(_this.wavesDelayMs);
            }
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75a18c0b138ee22d3ed1e859ef19ba45a8ae94fd.js.map