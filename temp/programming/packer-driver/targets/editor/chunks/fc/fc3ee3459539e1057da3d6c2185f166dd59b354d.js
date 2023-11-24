System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, input, Input, Vec2, CCFloat, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _isUsingJoystic, _defaultPosition, id, _crd, ccclass, property, VirtualJoystic;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

  function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfIInput(extras) {
    _reporterNs.report("IInput", "./IInput", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      input = _cc.input;
      Input = _cc.Input;
      Vec2 = _cc.Vec2;
      CCFloat = _cc.CCFloat;
    }],
    execute: function () {
      id = 0;
      _crd = true;

      _cclegacy._RF.push({}, "a51b2i8TvBDJJf8RPlkzgh6", "VirtualJoystic", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'input', 'Input', 'EventMouse', 'Vec2', 'EventTouch', 'CCFloat']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("VirtualJoystic", VirtualJoystic = (_dec = ccclass("VirtualJoystic"), _dec2 = property(CCFloat), _dec3 = property(Node), _dec(_class = (_class2 = (_isUsingJoystic = /*#__PURE__*/_classPrivateFieldLooseKey("isUsingJoystic"), _defaultPosition = /*#__PURE__*/_classPrivateFieldLooseKey("defaultPosition"), class VirtualJoystic extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "maxDistance", _descriptor, this);

          _initializerDefineProperty(this, "knob", _descriptor2, this);

          Object.defineProperty(this, _isUsingJoystic, {
            writable: true,
            value: false
          });
          Object.defineProperty(this, _defaultPosition, {
            writable: true,
            value: new Vec2()
          });
        }

        init() {
          input.on(Input.EventType.MOUSE_DOWN, this.activateMouseJoystic, this);
          input.on(Input.EventType.MOUSE_UP, this.deactivateJoystic, this);
          input.on(Input.EventType.MOUSE_MOVE, this.moveKnobMouse, this);
          input.on(Input.EventType.TOUCH_START, this.activateTouchJoystic, this);
          input.on(Input.EventType.TOUCH_END, this.deactivateJoystic, this);
          input.on(Input.EventType.TOUCH_MOVE, this.moveKnobTouch, this);
          this.deactivateJoystic();
        }

        getAxis() {
          if (_classPrivateFieldLooseBase(this, _isUsingJoystic)[_isUsingJoystic]) {
            return new Vec2(this.knob.position.x / this.maxDistance, this.knob.position.y / this.maxDistance);
          } else {
            return new Vec2();
          }
        }

        activateTouchJoystic(e) {
          this.activateJoystic(e.getUILocation());
        }

        activateMouseJoystic(e) {
          console.log(e.getUILocation());
          this.activateJoystic(e.getUILocation());
        }

        activateJoystic(location) {
          _classPrivateFieldLooseBase(this, _isUsingJoystic)[_isUsingJoystic] = true;
          this.node.active = true;
          _classPrivateFieldLooseBase(this, _defaultPosition)[_defaultPosition] = location;
          this.node.setPosition(new Vec3(_classPrivateFieldLooseBase(this, _defaultPosition)[_defaultPosition].x, _classPrivateFieldLooseBase(this, _defaultPosition)[_defaultPosition].y, 0));
          this.knob.position = new Vec3();
        }

        deactivateJoystic() {
          _classPrivateFieldLooseBase(this, _isUsingJoystic)[_isUsingJoystic] = false;
          this.node.active = false;
        }

        moveKnobTouch(e) {
          this.moveKnob(e.getUILocation());
        }

        moveKnobMouse(e) {
          this.moveKnob(e.getUILocation());
        }

        moveKnob(location) {
          if (!_classPrivateFieldLooseBase(this, _isUsingJoystic)[_isUsingJoystic]) return;
          const posDelta = location.subtract(_classPrivateFieldLooseBase(this, _defaultPosition)[_defaultPosition]);
          let x = posDelta.x;
          let y = posDelta.y;
          const length = Math.sqrt(posDelta.x ** 2 + posDelta.y ** 2);

          if (this.maxDistance < length) {
            const multiplier = this.maxDistance / length;
            x *= multiplier;
            y *= multiplier;
          }

          this.knob.position = new Vec3(x, y, 0);
        }

      }), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maxDistance", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "knob", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc3ee3459539e1057da3d6c2185f166dd59b354d.js.map