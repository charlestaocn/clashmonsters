System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, GameTimer, PlayerRegeneration, _crd;

  function _reportPossibleCrUseOfGameTimer(extras) {
    _reporterNs.report("GameTimer", "../../../Services/GameTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnitHealth(extras) {
    _reporterNs.report("UnitHealth", "../UnitHealth", _context.meta, extras);
  }

  _export("PlayerRegeneration", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      GameTimer = _unresolved_2.GameTimer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d7c2fF4UjlMgLP1a2p5e7cf", "PlayerRegeneration", undefined);

      _export("PlayerRegeneration", PlayerRegeneration = class PlayerRegeneration {
        constructor(health, regenerationDelay) {
          this.currentRegenerationAmount = 0;
          this.regenerationDelay = void 0;
          this.regenerationTimer = new (_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
            error: Error()
          }), GameTimer) : GameTimer)(0);
          this.health = void 0;
          this.health = health;
          this.regenerationDelay = regenerationDelay;
        }

        upgrade() {
          this.currentRegenerationAmount++;
          this.regenerationTimer = new (_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
            error: Error()
          }), GameTimer) : GameTimer)(this.regenerationDelay / this.currentRegenerationAmount);
        }

        gameTick(deltaTime) {
          if (this.currentRegenerationAmount <= 0) return;
          this.regenerationTimer.gameTick(deltaTime);

          if (this.regenerationTimer.tryFinishPeriod()) {
            this.health.heal(1);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f4ecf3ab26bc9f46b1ce2591f48ed8ec4098ee4e.js.map