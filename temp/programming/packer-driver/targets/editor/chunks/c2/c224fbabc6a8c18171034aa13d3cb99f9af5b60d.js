System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ProjectileCollision, _crd;

  function _reportPossibleCrUseOfProjectile(extras) {
    _reporterNs.report("Projectile", "./Projectile", _context.meta, extras);
  }

  _export("ProjectileCollision", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f4dbC4wTpBzY1TuHtrYVrG", "ProjectileCollision", undefined);

      __checkObsolete__(['Collider2D']);

      _export("ProjectileCollision", ProjectileCollision = class ProjectileCollision {
        constructor() {
          this.otherCollider = void 0;
          this.projectile = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c224fbabc6a8c18171034aa13d3cb99f9af5b60d.js.map