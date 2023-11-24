System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec2, MultiInput, _crd;

  function _reportPossibleCrUseOfIInput(extras) {
    _reporterNs.report("IInput", "./IInput", _context.meta, extras);
  }

  _export("MultiInput", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "679d7wF37RD6IEVmvI1Iicz", "MultiInput", undefined);

      __checkObsolete__(['Vec2']);

      _export("MultiInput", MultiInput = class MultiInput {
        constructor(inputs) {
          this.inputs = void 0;
          this.inputs = inputs;
        }

        getAxis() {
          for (var i = 0; i < this.inputs.length; i++) {
            if (!this.inputs[i].getAxis().equals(Vec2.ZERO)) {
              return this.inputs[i].getAxis();
            }
          }

          return new Vec2();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0309cd600fd6442912ea428f9a0234d784c4d4ed.js.map