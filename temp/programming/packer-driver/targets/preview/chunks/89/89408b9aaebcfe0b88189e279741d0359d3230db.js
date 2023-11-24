System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, UserData, SaveSystem, _crd;

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../Game/Data/UserData", _context.meta, extras);
  }

  _export("SaveSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      UserData = _unresolved_2.UserData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed50c1LIfpKzJ/ukquvPiE0", "SaveSystem", undefined);

      __checkObsolete__(['sys']);

      _export("SaveSystem", SaveSystem = class SaveSystem {
        constructor() {
          this.userDataIdentifier = "user-dse";
        }

        save(userData) {
          sys.localStorage.setItem(this.userDataIdentifier, JSON.stringify(userData));
        }

        load() {
          var data = sys.localStorage.getItem(this.userDataIdentifier);
          if (!data) return new (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
            error: Error()
          }), UserData) : UserData)();

          try {
            // TODO: the data can be corrupted if we introduce a new field in UserData
            return JSON.parse(data);
          } catch (error) {
            return new (_crd && UserData === void 0 ? (_reportPossibleCrUseOfUserData({
              error: Error()
            }), UserData) : UserData)();
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89408b9aaebcfe0b88189e279741d0359d3230db.js.map