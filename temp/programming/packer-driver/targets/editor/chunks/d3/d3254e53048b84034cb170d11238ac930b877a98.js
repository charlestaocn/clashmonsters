System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, GroupType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99f17nqqu1OVZ5ltNXkX8mX", "GroupType", undefined);

      // Flags, shift must match index in ProjectSettings > Physics
      _export("GroupType", GroupType = /*#__PURE__*/function (GroupType) {
        GroupType[GroupType["DEFAULT"] = 1] = "DEFAULT";
        GroupType[GroupType["PLAYER"] = 2] = "PLAYER";
        GroupType[GroupType["ENEMY"] = 4] = "ENEMY";
        GroupType[GroupType["WEAPON"] = 8] = "WEAPON";
        GroupType[GroupType["ITEM"] = 16] = "ITEM";
        GroupType[GroupType["PLAYER_PROJECTILE"] = 32] = "PLAYER_PROJECTILE";
        GroupType[GroupType["ENEMY_PROJECTILE"] = 64] = "ENEMY_PROJECTILE";
        GroupType[GroupType["MAGNET_RANGE"] = 128] = "MAGNET_RANGE";
        return GroupType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d3254e53048b84034cb170d11238ac930b877a98.js.map