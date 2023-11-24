System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, DelayedEnemySpawner, _crd;

  _export("DelayedEnemySpawner", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98291mVfbtA2rzmTKndfMRf", "DelayedEnemySpawner", undefined);

      _export("DelayedEnemySpawner", DelayedEnemySpawner = class DelayedEnemySpawner {
        constructor(startDelay, stopDelay) {
          this.currentTime = 0;
          this.startDelay = startDelay;
          this.stopDelay = stopDelay;

          if (stopDelay === -1) {
            this.stopDelay = Number.MAX_SAFE_INTEGER;
          }
        }

        gameTick(deltaTime) {
          this.currentTime += deltaTime;

          if (this.startDelay <= this.currentTime && this.currentTime <= this.stopDelay) {
            this.delayedGameTick(deltaTime);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b9e27a1cb56652f1937cd447a07d43b804bd2dc8.js.map