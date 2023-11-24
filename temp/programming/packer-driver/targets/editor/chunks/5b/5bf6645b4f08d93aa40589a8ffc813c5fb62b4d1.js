System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function roundToOneDecimal(num) {
    return Math.round(num * 10) / 10;
  }

  function randomPositiveOrNegative() {
    return Math.random() < 0.5 ? 1 : -1;
  }

  function getDegreeAngleFromDirection(x, y) {
    const radianAngle = Math.atan2(y, x);
    const angle = radianAngle / Math.PI * 180;
    return angle < 0 ? angle + 360 : angle;
  }

  _export({
    roundToOneDecimal: roundToOneDecimal,
    randomPositiveOrNegative: randomPositiveOrNegative,
    getDegreeAngleFromDirection: getDegreeAngleFromDirection
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "93ac2ZIsghGYpEaaIaECE4q", "MathUtils", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5bf6645b4f08d93aa40589a8ffc813c5fb62b4d1.js.map