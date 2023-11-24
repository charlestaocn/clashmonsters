System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Signal, UnitLevel, _crd;

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../Services/EventSystem/Signal", _context.meta, extras);
  }

  _export("UnitLevel", void 0);

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

      _cclegacy._RF.push({}, "61e760eFahCzJkNuceEjdqz", "UnitLevel", undefined);

      _export("UnitLevel", UnitLevel = class UnitLevel {
        constructor(requiredXPs, xpMultiplier) {
          this.xp = 0;
          this.currentLevel = 0;
          this.levelUpEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.xpAddedEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.requiredXPs = requiredXPs;
          this.xpMultiplier = xpMultiplier;
        }

        addXp(points) {
          this.xp += points * this.xpMultiplier;
          this.xpAddedEvent.trigger(this.xp);
          this.tryLevelUp();
        }

        get XP() {
          return this.xp;
        }

        get RequiredXP() {
          return this.requiredXPs[this.currentLevel];
        }

        get LevelUpEvent() {
          return this.levelUpEvent;
        }

        get XpAddedEvent() {
          return this.xpAddedEvent;
        }

        tryLevelUp() {
          if (this.requiredXPs.length <= this.currentLevel) return;
          if (this.xp < this.requiredXPs[this.currentLevel]) return;
          this.xp -= this.requiredXPs[this.currentLevel];
          this.currentLevel++;
          this.levelUpEvent.trigger(this.currentLevel);
          this.tryLevelUp();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2359c4cf62d0d3a094a7dac40ed9b43b3fabf8ab.js.map