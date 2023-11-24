System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ItemType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd234IB9GxAMY4tkw+pCyJ3", "ItemType", undefined);

      _export("ItemType", ItemType = /*#__PURE__*/function (ItemType) {
        ItemType[ItemType["XP"] = 0] = "XP";
        ItemType[ItemType["Gold"] = 1] = "Gold";
        ItemType[ItemType["HealthPotion"] = 2] = "HealthPotion";
        ItemType[ItemType["Magnet"] = 3] = "Magnet";
        ItemType[ItemType["Chest"] = 4] = "Chest";
        return ItemType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e72ec3702f4bae8eaeb9e1a081510aad4f280a71.js.map