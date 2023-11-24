System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Game, GameModalWindowTypes, GameModalLauncher, _crd;

  function _reportPossibleCrUseOfModalWindowManager(extras) {
    _reporterNs.report("ModalWindowManager", "../../Services/ModalWindowSystem/ModalWindowManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTranslationData(extras) {
    _reporterNs.report("TranslationData", "../Data/TranslationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPauser(extras) {
    _reporterNs.report("Pauser", "../Pauser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelUpModalWindowParams(extras) {
    _reporterNs.report("LevelUpModalWindowParams", "../UI/LevelUpWindow/LevelUpModalWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../Unit/Player/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgrader(extras) {
    _reporterNs.report("Upgrader", "../Upgrades/Upgrader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgradeType(extras) {
    _reporterNs.report("UpgradeType", "../Upgrades/UpgradeType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModalWindowTypes(extras) {
    _reporterNs.report("GameModalWindowTypes", "./GameModalWindowTypes", _context.meta, extras);
  }

  _export("GameModalLauncher", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Game = _unresolved_2.Game;
    }, function (_unresolved_3) {
      GameModalWindowTypes = _unresolved_3.GameModalWindowTypes;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19da7miMLJNc4P7s+8XveTX", "GameModalLauncher", undefined);

      _export("GameModalLauncher", GameModalLauncher = class GameModalLauncher {
        constructor(modalWindowManager, player, gamePauser, upgrader, translationData) {
          this.modalWindowManager = modalWindowManager;
          this.player = player;
          this.gamePauser = gamePauser;
          this.upgrader = upgrader;
          this.translationData = translationData;
          this.player.Level.LevelUpEvent.on(this.showLevelUpModal, this);
        }

        async showLevelUpModal() {
          this.gamePauser.pause();
          const skillToUpgrade = await this.modalWindowManager.showModal((_crd && GameModalWindowTypes === void 0 ? (_reportPossibleCrUseOfGameModalWindowTypes({
            error: Error()
          }), GameModalWindowTypes) : GameModalWindowTypes).LevelUp, {
            availableUpgrades: Array.from(this.upgrader.getAvailableUpgrades()),
            translationData: this.translationData
          });
          this.upgrader.upgradeSkill(skillToUpgrade);
          this.gamePauser.resume();
        }

        async showChestModal() {
          this.gamePauser.pause();
          const skillToUpgrade = await this.modalWindowManager.showModal((_crd && GameModalWindowTypes === void 0 ? (_reportPossibleCrUseOfGameModalWindowTypes({
            error: Error()
          }), GameModalWindowTypes) : GameModalWindowTypes).Chest, {
            availableUpgrades: Array.from(this.upgrader.getAvailableUpgrades()),
            translationData: this.translationData
          });
          this.upgrader.upgradeSkill(skillToUpgrade);
          this.gamePauser.resume();
        }

        async showPauseModal() {
          this.gamePauser.pause();
          const shouldExit = await this.modalWindowManager.showModal((_crd && GameModalWindowTypes === void 0 ? (_reportPossibleCrUseOfGameModalWindowTypes({
            error: Error()
          }), GameModalWindowTypes) : GameModalWindowTypes).Pause, this.modalWindowManager);

          if (shouldExit) {
            (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).Instance.exitGame();
          } else {
            this.gamePauser.resume();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e4266da0c9b68765c1b050fdac2858e126b841e3.js.map