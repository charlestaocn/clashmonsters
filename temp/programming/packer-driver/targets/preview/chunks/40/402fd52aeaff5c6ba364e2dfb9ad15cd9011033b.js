System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Signal, UnitHealth, _crd;

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../Services/EventSystem/Signal", _context.meta, extras);
  }

  _export("UnitHealth", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Signal = _unresolved_2.Signal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "149728dgAlNOYpvVTrhs6AR", "UnitHealth", undefined);

      _export("UnitHealth", UnitHealth = class UnitHealth {
        constructor(maxHealth) {
          this.healthPoints = void 0;
          this.maxHealthPoints = void 0;
          this.healthPointsChangeEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.maxHealthPoints = maxHealth;
          this.healthPoints = maxHealth;
        }

        get IsAlive() {
          return 0 < this.healthPoints;
        }

        get HealthPoints() {
          return this.healthPoints;
        }

        get MaxHealthPoints() {
          return this.maxHealthPoints;
        }

        get HealthPointsChangeEvent() {
          return this.healthPointsChangeEvent;
        }

        heal(points) {
          this.healthPoints = Math.min(this.maxHealthPoints, this.healthPoints + points);
          this.healthPointsChangeEvent.trigger(points);
        }

        damage(points) {
          this.healthPoints -= points;
          this.healthPointsChangeEvent.trigger(-points);
        }

        setMaxHealth(maxHealth) {
          this.maxHealthPoints = maxHealth;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=402fd52aeaff5c6ba364e2dfb9ad15cd9011033b.js.map