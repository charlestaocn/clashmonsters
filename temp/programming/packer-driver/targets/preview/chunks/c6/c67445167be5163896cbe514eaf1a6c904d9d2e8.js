System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, MetaUpgradeType, MetaUpgrades, _crd;

  function _reportPossibleCrUseOfMetaUpgradesSettings(extras) {
    _reporterNs.report("MetaUpgradesSettings", "../../Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMetaUpgradesData(extras) {
    _reporterNs.report("MetaUpgradesData", "../../Data/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMetaUpgradeType(extras) {
    _reporterNs.report("MetaUpgradeType", "../../Upgrades/UpgradeType", _context.meta, extras);
  }

  _export("MetaUpgrades", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      MetaUpgradeType = _unresolved_2.MetaUpgradeType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5086346EzlKOqpYdPMWszRK", "MetaUpgrades", undefined);

      _export("MetaUpgrades", MetaUpgrades = class MetaUpgrades {
        constructor(data, settings) {
          this.upgradeTypeToValue = new Map();
          this.upgradeTypeToValue.set((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).Health, this.getBonusValue(data.healthLevel, settings.health.bonuses));
          this.upgradeTypeToValue.set((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).OverallDamage, this.getBonusValue(data.overallDamageLevel, settings.overallDamage.bonuses));
          this.upgradeTypeToValue.set((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).ProjectilePiercing, this.getBonusValue(data.projectilePiercingLevel, settings.projectilePiercing.bonuses));
          this.upgradeTypeToValue.set((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).MovementSpeed, this.getBonusValue(data.movementSpeedLevel, settings.movementSpeed.bonuses));
          this.upgradeTypeToValue.set((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).XPGatherer, this.getBonusValue(data.xpGathererLevel, settings.xpGatherer.bonuses));
          this.upgradeTypeToValue.set((_crd && MetaUpgradeType === void 0 ? (_reportPossibleCrUseOfMetaUpgradeType({
            error: Error()
          }), MetaUpgradeType) : MetaUpgradeType).GoldGatherer, this.getBonusValue(data.goldGathererLevel, settings.goldGatherer.bonuses));
        }

        getBonusValue(level, bonuses) {
          if (level <= 0) return 0;
          if (bonuses.length < level) throw new Error("Meta upgrade does not have settings for level " + level);
          return bonuses[level - 1];
        }

        getUpgradeValue(type) {
          if (!this.upgradeTypeToValue.has(type)) {
            throw new Error("Does not have meta upgrade set up " + type);
          }

          return this.upgradeTypeToValue.get(type);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c67445167be5163896cbe514eaf1a6c904d9d2e8.js.map