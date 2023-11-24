System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, _decorator, delay, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, OpenCloseAnimator;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../Services/Utils/AsyncUtils", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Animation = _cc.Animation;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      delay = _unresolved_2.delay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f9bdcLpmMdIgqWNOgetdMv1", "OpenCloseAnimator", undefined);

      __checkObsolete__(['Animation', 'Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("OpenCloseAnimator", OpenCloseAnimator = (_dec = ccclass("OpenCloseAnimator"), _dec2 = property(Animation), _dec(_class = (_class2 = class OpenCloseAnimator extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "animation", _descriptor, this);

          this.openStateName = "Open";
          this.closeStateName = "Close";
          this.openDuration = 0;
          this.closeDuration = 0;
        }

        init() {
          this.openDuration = this.animation.getState(this.openStateName).duration;
          this.closeDuration = this.animation.getState(this.closeStateName).duration;
        }

        playOpen() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.node.active = true;

            _this.animation.play(_this.openStateName);

            yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
              error: Error()
            }), delay) : delay)(_this.openDuration * 1000);
          })();
        }

        playClose() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            _this2.node.active = true;

            _this2.animation.play(_this2.closeStateName);

            yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
              error: Error()
            }), delay) : delay)(_this2.closeDuration * 1000);
            _this2.node.active = false;
          })();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec2], {
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
//# sourceMappingURL=c41b717503d56c3409a3f871a31317c8b7043a32.js.map