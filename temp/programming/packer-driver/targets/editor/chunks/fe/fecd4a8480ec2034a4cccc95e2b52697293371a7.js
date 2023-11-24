System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EnemyMovementType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3031+lGB1Ic7TnhvWjtcQz", "EnemyMovementType", undefined);

      _export("EnemyMovementType", EnemyMovementType = /*#__PURE__*/function (EnemyMovementType) {
        EnemyMovementType["Follow"] = "Follow";
        EnemyMovementType["PeriodicFollow"] = "PeriodicFollow";
        EnemyMovementType["Launch"] = "Launch";
        return EnemyMovementType;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fecd4a8480ec2034a4cccc95e2b52697293371a7.js.map