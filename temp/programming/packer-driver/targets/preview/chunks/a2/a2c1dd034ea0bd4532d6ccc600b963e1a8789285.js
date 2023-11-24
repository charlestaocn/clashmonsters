System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UpgradeType, Upgrader, _crd;

  function _reportPossibleCrUseOfUpgradeSettings(extras) {
    _reporterNs.report("UpgradeSettings", "../Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../Unit/Player/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHaloProjectileLauncher(extras) {
    _reporterNs.report("HaloProjectileLauncher", "../Projectile/ProjectileLauncher/HaloProjectileLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaveProjectileLauncher(extras) {
    _reporterNs.report("WaveProjectileLauncher", "../Projectile/ProjectileLauncher/WaveProjectileLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgradeType(extras) {
    _reporterNs.report("UpgradeType", "./UpgradeType", _context.meta, extras);
  }

  _export("Upgrader", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      UpgradeType = _unresolved_2.UpgradeType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51a093X7GNA3aDOGhZjLxb6", "Upgrader", undefined);

      _export("Upgrader", Upgrader = class Upgrader {
        constructor(player, horizontalProjectileLauncher, haloProjectileLauncher, diagonalProjectileLauncher, settings) {
          this.typeToAction = new Map();
          this.typeToLevel = new Map();
          this.typeToMaxLevel = new Map();
          this.player = player;
          this.horizontalProjectileLauncher = horizontalProjectileLauncher;
          this.haloProjectileLauncher = haloProjectileLauncher;
          this.diagonalProjectileLauncher = diagonalProjectileLauncher;
          this.setTypeMaps((_crd && UpgradeType === void 0 ? (_reportPossibleCrUseOfUpgradeType({
            error: Error()
          }), UpgradeType) : UpgradeType).WeaponLength, this.upgradeWeaponLength.bind(this), settings.maxWeaponLengthUpgrades);
          this.setTypeMaps((_crd && UpgradeType === void 0 ? (_reportPossibleCrUseOfUpgradeType({
            error: Error()
          }), UpgradeType) : UpgradeType).WeaponDamage, this.upgradeWeaponDamage.bind(this), settings.maxWeaponDamageUpgrades);
          this.setTypeMaps((_crd && UpgradeType === void 0 ? (_reportPossibleCrUseOfUpgradeType({
            error: Error()
          }), UpgradeType) : UpgradeType).HorizontalProjectile, this.upgradeHorizontalProjectileLauncher.bind(this), settings.maxHorizontalProjectileUpgrades);
          this.setTypeMaps((_crd && UpgradeType === void 0 ? (_reportPossibleCrUseOfUpgradeType({
            error: Error()
          }), UpgradeType) : UpgradeType).DiagonalProjectile, this.upgradeDiagonalProjectileLauncher.bind(this), settings.maxDiagonalProjectileUpgrades);
          this.setTypeMaps((_crd && UpgradeType === void 0 ? (_reportPossibleCrUseOfUpgradeType({
            error: Error()
          }), UpgradeType) : UpgradeType).HaloProjectlie, this.upgradeHaloProjectileLauncher.bind(this), settings.maxHaloProjectileUpgrades);
          this.setTypeMaps((_crd && UpgradeType === void 0 ? (_reportPossibleCrUseOfUpgradeType({
            error: Error()
          }), UpgradeType) : UpgradeType).Regeneration, this.upgradeRegeneration.bind(this), settings.maxRegenerationUpgrades);
        }

        upgradeSkill(type) {
          if (!this.typeToAction.has(type)) throw new Error("Upgrade does not have " + type);
          if (this.isMaxLevel(type)) throw new Error("Upgrade is already at max level " + type);
          this.typeToAction.get(type)();
          var level = this.typeToLevel.get(type);
          this.typeToLevel.set(type, level + 1);
        }

        getAvailableUpgrades() {
          var availableUpgrades = new Set();

          for (var key of this.typeToAction.keys()) {
            if (!this.isMaxLevel(key)) {
              availableUpgrades.add(key);
            }
          }

          return availableUpgrades;
        }

        setTypeMaps(upgradeType, action, maxLevel) {
          this.typeToAction.set(upgradeType, action);
          this.typeToLevel.set(upgradeType, 0);
          this.typeToMaxLevel.set(upgradeType, maxLevel);
        }

        upgradeWeaponLength() {
          this.player.Weapon.upgradeWeaponLength();
        }

        upgradeWeaponDamage() {
          this.player.Weapon.upgradeWeaponDamage();
        }

        upgradeHorizontalProjectileLauncher() {
          this.horizontalProjectileLauncher.upgrade();
        }

        upgradeDiagonalProjectileLauncher() {
          this.diagonalProjectileLauncher.upgrade();
        }

        upgradeHaloProjectileLauncher() {
          this.haloProjectileLauncher.upgrade();
        }

        upgradeRegeneration() {
          this.player.Regeneration.upgrade();
        }

        isMaxLevel(type) {
          return this.typeToMaxLevel.get(type) <= this.typeToLevel.get(type);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a2c1dd034ea0bd4532d6ccc600b963e1a8789285.js.map