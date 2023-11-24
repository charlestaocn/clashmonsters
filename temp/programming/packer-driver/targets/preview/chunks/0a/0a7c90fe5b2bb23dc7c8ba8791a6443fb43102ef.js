System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, AppRoot, Game, delay, GameRunner, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../AppRoot/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../Game/Data/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGame(extras) {
    _reporterNs.report("Game", "../Game/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameResult(extras) {
    _reporterNs.report("GameResult", "../Game/Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../Services/Utils/AsyncUtils", _context.meta, extras);
  }

  _export("GameRunner", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }, function (_unresolved_3) {
      Game = _unresolved_3.Game;
    }, function (_unresolved_4) {
      delay = _unresolved_4.delay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3869g4LTpKIqL0d9EagibV", "GameRunner", undefined);

      __checkObsolete__(['director']);

      _export("GameRunner", GameRunner = class GameRunner {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        constructor() {
          this.isRunning = false;
        }

        static get Instance() {
          return this.instance;
        }

        get IsRunning() {
          return this.isRunning;
        }

        playGame() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.isRunning = true;
            director.loadScene("Game");
            var userData = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).Instance.LiveUserData;

            while ((_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).Instance == null) yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
              error: Error()
            }), delay) : delay)(10);

            var result = yield (_crd && Game === void 0 ? (_reportPossibleCrUseOfGame({
              error: Error()
            }), Game) : Game).Instance.play(userData, (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).Instance.Settings, (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).Instance.TranslationData);
            userData.game.goldCoins += result.goldCoins;

            if (userData.game.highscore < result.score) {
              userData.game.highscore = result.score;
            }

            (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
              error: Error()
            }), AppRoot) : AppRoot).Instance.saveUserData();
            director.loadScene("Menu");
            _this.isRunning = false;
          })();
        }

      });

      GameRunner.instance = new GameRunner();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0a7c90fe5b2bb23dc7c8ba8791a6443fb43102ef.js.map