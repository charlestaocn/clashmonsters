System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Input, input, Vec2, KeyboardInput, _crd;

  function _reportPossibleCrUseOfIInput(extras) {
    _reporterNs.report("IInput", "./IInput", _context.meta, extras);
  }

  _export("KeyboardInput", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Input = _cc.Input;
      input = _cc.input;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14d49iLCLxKDpfnsGt4saGA", "KeyboardInput", undefined);

      __checkObsolete__(['EventKeyboard', 'Input', 'input', 'KeyCode', 'Vec2']);

      _export("KeyboardInput", KeyboardInput = class KeyboardInput {
        constructor(up, down, left, right) {
          this.xAxis = 0;
          this.yAxis = 0;
          this.up = void 0;
          this.down = void 0;
          this.left = void 0;
          this.right = void 0;
          this.up = up;
          this.down = down;
          this.left = left;
          this.right = right;
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        getAxis() {
          return new Vec2(this.xAxis, this.yAxis).normalize();
        }

        onKeyDown(event) {
          switch (event.keyCode) {
            case this.up:
              this.yAxis = 1;
              break;

            case this.down:
              this.yAxis = -1;
              break;

            case this.left:
              this.xAxis = -1;
              break;

            case this.right:
              this.xAxis = 1;
              break;
          }
        }

        onKeyUp(event) {
          switch (event.keyCode) {
            case this.up:
              this.yAxis = this.yAxis === 1 ? 0 : this.yAxis;
              break;

            case this.down:
              this.yAxis = this.yAxis === -1 ? 0 : this.yAxis;
              break;

            case this.left:
              this.xAxis = this.xAxis === -1 ? 0 : this.xAxis;
              break;

            case this.right:
              this.xAxis = this.xAxis === 1 ? 0 : this.xAxis;
              break;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f777761a6a48c7a7a83f4426686b8e1c79f6b028.js.map