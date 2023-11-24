System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Game, GameModalWindowTypes, GameModalLauncher, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

        showLevelUpModal() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.gamePauser.pause();

            var skillToUpgrade = yield _this.modalWindowManager.showModal((_crd && GameModalWindowTypes === void 0 ? (_reportPossibleCrUseOfGameModalWindowTypes({
              error: Error()
            }), GameModalWindowTypes) : GameModalWindowTypes).LevelUp, {
              availableUpgrades: Array.from(_this.upgrader.getAvailableUpgrades()),
              translationData: _this.translationData
            });

            _this.upgrader.upgradeSkill(skillToUpgrade);

            _this.gamePauser.resume();
          })();
        }

        showChestModal() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            _this2.gamePauser.pause();

            var skillToUpgrade = yield _this2.modalWindowManager.showModal((_crd && GameModalWindowTypes === void 0 ? (_reportPossibleCrUseOfGameModalWindowTypes({
              error: Error()
            }), GameModalWindowTypes) : GameModalWindowTypes).Chest, {
              availableUpgrades: Array.from(_this2.upgrader.getAvailableUpgrades()),
              translationData: _this2.translationData
            });

            _this2.upgrader.upgradeSkill(skillToUpgrade);

            _this2.gamePauser.resume();
          })();
        }

        showPauseModal() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            _this3.gamePauser.pause();

            var shouldExit = yield _this3.modalWindowManager.showModal((_crd && GameModalWindowTypes === void 0 ? (_reportPossibleCrUseOfGameModalWindowTypes({
              error: Error()
            }), GameModalWindowTypes) : GameModalWindowTypes).Pause, _this3.modalWindowManager);

            if (shouldExit) {
              (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
                error: Error()
              }), Game) : Game).Instance.exitGame();
            } else {
              _this3.gamePauser.resume();
            }
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f2c934fc0eb3b0036c49ce0692ce60d993a295c8.js.map