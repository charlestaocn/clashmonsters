System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Enemy, WeaponCollisionSystem, _crd;

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../Unit/Enemy/Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeapon(extras) {
    _reporterNs.report("Weapon", "../Unit/Player/Weapon/Weapon", _context.meta, extras);
  }

  _export("WeaponCollisionSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      Enemy = _unresolved_2.Enemy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eea898qQktBabK3e/UmHpdQ", "WeaponCollisionSystem", undefined);

      __checkObsolete__(['Collider2D']);

      _export("WeaponCollisionSystem", WeaponCollisionSystem = class WeaponCollisionSystem {
        constructor(weapon) {
          this.weapon = void 0;
          this.weapon = weapon;
          weapon.Collider.ContactBeginEvent.on(this.onWeaponContactBegin, this);
        }

        onWeaponContactBegin(otherCollider) {
          otherCollider.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
            error: Error()
          }), Enemy) : Enemy).dealDamage(this.weapon.Damage);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=57704794c345eb574c0e562f5d60c728d7e79336.js.map