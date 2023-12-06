export enum UpgradeType {
    WeaponLength = "WEAPON_LENGTH",
    WeaponDamage = "WEAPON_DAMAGE",
    HorizontalProjectile = "HORIZONTAL_PROJECTILE",
    DiagonalProjectile = "DIAGONAL_PROJECTILE",
    HaloProjectlie = "HALO_PROJECTILE",
    Regeneration = "REGENERATION"
}


export class UpgradeDesc {
   static  WeaponLength = "  Grow Weapon Length";
   static  WeaponDamage = " Add WEAPON DAMAGE";
    static   HorizontalProjectile = "Throwing Daggers Skill";
    static DiagonalProjectile = "Arcane Shot Skill";
    static HaloProjectlie = "Shot Fiery Ball";
    static   Regeneration = "Restores Health";

public static getDescByType(upgradeType :UpgradeType){
        let desc ;
        switch(upgradeType){
            case UpgradeType.WeaponLength:
                desc= UpgradeDesc.WeaponLength;
                break;
            case UpgradeType.WeaponDamage:
                desc= UpgradeDesc.WeaponDamage;
                break;
            case UpgradeType.HorizontalProjectile:
                    desc= UpgradeDesc.HorizontalProjectile;
                    break;
            case UpgradeType.DiagonalProjectile:
                    desc= UpgradeDesc.DiagonalProjectile;
                    break;
            case UpgradeType.HaloProjectlie:
                    desc= UpgradeDesc.HaloProjectlie;
                    break;
            case UpgradeType.Regeneration:
                    desc= UpgradeDesc.Regeneration;
                    break;
        }
        return desc;
}

}


export enum MetaUpgradeType {
    Health = "META_HEALTH",
    OverallDamage = "META_OVERALL_DAMAGE",
    ProjectilePiercing = "META_PROJECTILE_PIERCING",
    MovementSpeed = "META_MOVEMENT_SPEED",
    XPGatherer = "META_XP_GATHERER",
    GoldGatherer = "META_GOLD_GATHERER"
}


