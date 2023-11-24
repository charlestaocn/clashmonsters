System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Enemy, PlayerProjectileCollisionSystem, _crd;

  function _reportPossibleCrUseOfIProjectileLauncherSignaler(extras) {
    _reporterNs.report("IProjectileLauncherSignaler", "../Projectile/IProjectileLauncherSignaler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProjectileCollision(extras) {
    _reporterNs.report("ProjectileCollision", "../Projectile/ProjectileCollision", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../Unit/Enemy/Enemy", _context.meta, extras);
  }

  _export("PlayerProjectileCollisionSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Enemy = _unresolved_2.Enemy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d0163bbjRPN7GX6JqqgsVy", "PlayerProjectileCollisionSystem", undefined);

      _export("PlayerProjectileCollisionSystem", PlayerProjectileCollisionSystem = class PlayerProjectileCollisionSystem {
        constructor(collisionSignalers) {
          for (const collisionSignaler of collisionSignalers) {
            collisionSignaler.ProjectileCollisionEvent.on(this.onProjectileCollision, this);
          }
        }

        onProjectileCollision(projectileCollision) {
          projectileCollision.otherCollider.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
            error: Error()
          }), Enemy) : Enemy).dealDamage(projectileCollision.projectile.Damage);
          projectileCollision.projectile.pierce();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=11c7fd0e1a1513189ee9f0d4b298f31282ec6f5f.js.map