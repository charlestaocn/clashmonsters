System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, UpgradeType, MetaUpgradeType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a481cMctrpIcbjX8VF4ikUK", "UpgradeType", undefined);

      _export("UpgradeType", UpgradeType = /*#__PURE__*/function (UpgradeType) {
        UpgradeType["WeaponLength"] = "WEAPON_LENGTH";
        UpgradeType["WeaponDamage"] = "WEAPON_DAMAGE";
        UpgradeType["HorizontalProjectile"] = "HORIZONTAL_PROJECTILE";
        UpgradeType["DiagonalProjectile"] = "DIAGONAL_PROJECTILE";
        UpgradeType["HaloProjectlie"] = "HALO_PROJECTILE";
        UpgradeType["Regeneration"] = "REGENERATION";
        return UpgradeType;
      }({}));

      _export("MetaUpgradeType", MetaUpgradeType = /*#__PURE__*/function (MetaUpgradeType) {
        MetaUpgradeType["Health"] = "META_HEALTH";
        MetaUpgradeType["OverallDamage"] = "META_OVERALL_DAMAGE";
        MetaUpgradeType["ProjectilePiercing"] = "META_PROJECTILE_PIERCING";
        MetaUpgradeType["MovementSpeed"] = "META_MOVEMENT_SPEED";
        MetaUpgradeType["XPGatherer"] = "META_XP_GATHERER";
        MetaUpgradeType["GoldGatherer"] = "META_GOLD_GATHERER";
        return MetaUpgradeType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=31ebc51dafeb9d128426424d932f00f34244e872.js.map