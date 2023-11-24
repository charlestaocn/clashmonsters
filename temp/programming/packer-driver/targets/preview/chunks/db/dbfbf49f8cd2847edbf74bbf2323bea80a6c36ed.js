System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, UserData, GameData, MetaUpgradesData, _crd;

  _export({
    UserData: void 0,
    GameData: void 0,
    MetaUpgradesData: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7431f98SAxEdJQ0ZU7aChoI", "UserData", undefined);

      _export("UserData", UserData = class UserData {
        constructor() {
          this.soundVolume = 1;
          this.musicVolume = 1;
          this.game = new GameData();
        }

      });

      _export("GameData", GameData = class GameData {
        constructor() {
          this.goldCoins = 0;
          this.metaUpgrades = new MetaUpgradesData();
          this.highscore = 0;
        }

      });

      _export("MetaUpgradesData", MetaUpgradesData = class MetaUpgradesData {
        constructor() {
          this.healthLevel = 0;
          this.overallDamageLevel = 0;
          this.projectilePiercingLevel = 0;
          this.movementSpeedLevel = 0;
          this.xpGathererLevel = 0;
          this.goldGathererLevel = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dbfbf49f8cd2847edbf74bbf2323bea80a6c36ed.js.map