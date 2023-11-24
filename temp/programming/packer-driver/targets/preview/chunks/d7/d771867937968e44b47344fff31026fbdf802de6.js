System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameSettings, PlayerSettings, WeaponSettings, WaveLauncherSettings, HaloLauncherSettings, EnemyLauncherSettings, ProjectileLauncherSettings, UpgradeSettings, MetaUpgradesSettings, MetaUpgradeSettings, EnemyManagerSettings, PeriodicFollowMoverSettings, GeneralEnemySpawnerSettings, WaveEnemySpawnerSettings, CircularEnemySpawnerSettings, IndividualEnemySpawnerSettings, EnemySettings, ItemSettings, _crd;

  _export({
    GameSettings: void 0,
    PlayerSettings: void 0,
    WeaponSettings: void 0,
    WaveLauncherSettings: void 0,
    HaloLauncherSettings: void 0,
    EnemyLauncherSettings: void 0,
    ProjectileLauncherSettings: void 0,
    UpgradeSettings: void 0,
    MetaUpgradesSettings: void 0,
    MetaUpgradeSettings: void 0,
    EnemyManagerSettings: void 0,
    PeriodicFollowMoverSettings: void 0,
    GeneralEnemySpawnerSettings: void 0,
    WaveEnemySpawnerSettings: void 0,
    CircularEnemySpawnerSettings: void 0,
    IndividualEnemySpawnerSettings: void 0,
    EnemySettings: void 0,
    ItemSettings: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5f9b9/asvpMk6Mohpkji98J", "GameSettings", undefined);

      _export("GameSettings", GameSettings = class GameSettings {
        constructor() {
          this.player = new PlayerSettings();
          this.upgrades = new UpgradeSettings();
          this.metaUpgrades = new MetaUpgradesSettings();
          this.enemyManager = new EnemyManagerSettings();
          this.items = new ItemSettings();
        }

      });

      _export("PlayerSettings", PlayerSettings = class PlayerSettings {
        constructor() {
          this.defaultHP = 0;
          this.requiredXP = [];
          this.speed = 0;
          this.regenerationDelay = 0;
          this.collisionDelay = 0;
          this.magnetDuration = 0;
          this.weapon = new WeaponSettings();
          this.haloLauncher = new HaloLauncherSettings();
          this.horizontalLauncher = new WaveLauncherSettings();
          this.diagonalLauncher = new WaveLauncherSettings();
        }

      });

      _export("WeaponSettings", WeaponSettings = class WeaponSettings {
        constructor() {
          this.strikeDelay = 0;
          this.damage = 0;
        }

      });

      _export("WaveLauncherSettings", WaveLauncherSettings = class WaveLauncherSettings {
        constructor() {
          this.wavesToShootPerUpgrade = 0;
          this.launcher = new ProjectileLauncherSettings();
        }

      });

      _export("HaloLauncherSettings", HaloLauncherSettings = class HaloLauncherSettings {
        constructor() {
          this.projectilesToSpawn = 0;
          this.cooldownDivisorPerUpgrade = 0;
          this.launcher = new ProjectileLauncherSettings();
        }

      });

      _export("EnemyLauncherSettings", EnemyLauncherSettings = class EnemyLauncherSettings {
        constructor() {
          this.enemyIds = [];
          this.projectileLifetime = 0;
          this.projectileSpeed = 0;
          this.projectileDamage = 0;
          this.cooldown = 0;
        }

      });

      _export("ProjectileLauncherSettings", ProjectileLauncherSettings = class ProjectileLauncherSettings {
        constructor() {
          this.projectileLifetime = 0;
          this.projectileSpeed = 0;
          this.wavesToShoot = 0;
          this.wavesDelayMs = 0;
          this.cooldown = 0;
        }

      });

      _export("UpgradeSettings", UpgradeSettings = class UpgradeSettings {
        constructor() {
          this.maxWeaponLengthUpgrades = 0;
          this.maxWeaponDamageUpgrades = 0;
          this.maxHorizontalProjectileUpgrades = 0;
          this.maxDiagonalProjectileUpgrades = 0;
          this.maxHaloProjectileUpgrades = 0;
          this.maxRegenerationUpgrades = 0;
        }

      });

      _export("MetaUpgradesSettings", MetaUpgradesSettings = class MetaUpgradesSettings {
        constructor() {
          this.health = new MetaUpgradeSettings();
          this.overallDamage = new MetaUpgradeSettings();
          this.projectilePiercing = new MetaUpgradeSettings();
          this.movementSpeed = new MetaUpgradeSettings();
          this.xpGatherer = new MetaUpgradeSettings();
          this.goldGatherer = new MetaUpgradeSettings();
        }

      });

      _export("MetaUpgradeSettings", MetaUpgradeSettings = class MetaUpgradeSettings {
        constructor() {
          this.costs = [];
          this.bonuses = [];
        }

      });

      _export("EnemyManagerSettings", EnemyManagerSettings = class EnemyManagerSettings {
        constructor() {
          this.axeLauncher = new EnemyLauncherSettings();
          this.magicOrbLauncher = new EnemyLauncherSettings();
          this.enemies = [new EnemySettings()];
          this.periodicFollowMovers = [new PeriodicFollowMoverSettings()];
          this.individualEnemySpawners = [new IndividualEnemySpawnerSettings()];
          this.circularEnemySpawners = [new CircularEnemySpawnerSettings()];
          this.waveEnemySpawners = [new WaveEnemySpawnerSettings()];
        }

      });

      _export("PeriodicFollowMoverSettings", PeriodicFollowMoverSettings = class PeriodicFollowMoverSettings {
        constructor() {
          this.enemyIdToAffect = "";
          this.followTime = 0;
          this.waitTime = 0;
        }

      });

      _export("GeneralEnemySpawnerSettings", GeneralEnemySpawnerSettings = class GeneralEnemySpawnerSettings {
        constructor() {
          this.enemyId = "";
          this.startDelay = 0;
          this.stopDelay = 0;
          this.cooldown = 0;
        }

      });

      _export("WaveEnemySpawnerSettings", WaveEnemySpawnerSettings = class WaveEnemySpawnerSettings {
        constructor() {
          this.common = new GeneralEnemySpawnerSettings();
          this.enemiesToSpawn = 0;
        }

      });

      _export("CircularEnemySpawnerSettings", CircularEnemySpawnerSettings = class CircularEnemySpawnerSettings {
        constructor() {
          this.common = new GeneralEnemySpawnerSettings();
          this.enemiesToSpawn = 0;
        }

      });

      _export("IndividualEnemySpawnerSettings", IndividualEnemySpawnerSettings = class IndividualEnemySpawnerSettings {
        constructor() {
          this.common = new GeneralEnemySpawnerSettings();
        }

      });

      _export("EnemySettings", EnemySettings = class EnemySettings {
        constructor() {
          this.id = "";
          this.moveType = "";
          this.graphicsType = "";
          this.health = 0;
          this.damage = 0;
          this.speed = 0;
          this.lifetime = 0;
          this.xpReward = 0;
          this.goldReward = 0;
          this.healthPotionRewardChance = 0;
          this.magnetRewardChance = 0;
          this.chestRewardChance = 0;
        }

      });

      _export("ItemSettings", ItemSettings = class ItemSettings {
        constructor() {
          this.healthPerPotion = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d771867937968e44b47344fff31026fbdf802de6.js.map