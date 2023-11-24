System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameTimer, _crd;

  _export("GameTimer", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93024LYFAZP4J3Xa3AOz/Rx", "GameTimer", undefined);

      _export("GameTimer", GameTimer = class GameTimer {
        constructor(targetDelay) {
          this.targetDelay = void 0;
          this.currentDelay = 0;
          this.targetDelay = targetDelay;
        }

        gameTick(deltaTime) {
          this.currentDelay += deltaTime;
        }

        tryFinishPeriod() {
          if (this.targetDelay <= this.currentDelay) {
            this.currentDelay = 0;
            return true;
          } else {
            return false;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a80a84a2194b93b992c7177a478e23477d2093e5.js.map