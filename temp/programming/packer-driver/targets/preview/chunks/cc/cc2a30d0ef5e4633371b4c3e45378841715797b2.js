System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, _crd;

  function getDirection(targetPosition, sourcePosition) {
    var direction = new Vec3();
    return Vec3.subtract(direction, targetPosition, sourcePosition).normalize();
  }

  _export("getDirection", getDirection);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06778nDdI9GQ4KvvTMhbu4w", "VecUtils", undefined);

      __checkObsolete__(['Vec3']);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc2a30d0ef5e4633371b4c3e45378841715797b2.js.map