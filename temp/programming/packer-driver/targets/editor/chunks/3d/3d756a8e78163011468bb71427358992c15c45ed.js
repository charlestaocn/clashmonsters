System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Pauser, _crd;

  _export("Pauser", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d20ebZ4qvlH5r0SQ/o308m6", "Pauser", undefined);

      _export("Pauser", Pauser = class Pauser {
        constructor() {
          this.isPaused = false;
        }

        get IsPaused() {
          return this.isPaused;
        }

        pause() {
          this.isPaused = true;
        }

        resume() {
          this.isPaused = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3d756a8e78163011468bb71427358992c15c45ed.js.map