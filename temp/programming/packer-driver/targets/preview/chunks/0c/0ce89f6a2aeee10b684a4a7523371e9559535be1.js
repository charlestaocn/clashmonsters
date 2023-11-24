System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Animation, Component, _decorator, UIButton, delay, _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _crd, property, ModalWindow;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIButton(extras) {
    _reporterNs.report("UIButton", "../UI/Button/UIButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../Utils/AsyncUtils", _context.meta, extras);
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
      UIButton = _unresolved_2.UIButton;
    }, function (_unresolved_3) {
      delay = _unresolved_3.delay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69f01H/95hOA6GxZJCsyPsP", "ModalWindow", undefined);

      __checkObsolete__(['Animation', 'Component', '_decorator']);

      ({
        property
      } = _decorator);

      _export("ModalWindow", ModalWindow = (_dec = property(Animation), _dec2 = property(_crd && UIButton === void 0 ? (_reportPossibleCrUseOfUIButton({
        error: Error()
      }), UIButton) : UIButton), _dec3 = property(_crd && UIButton === void 0 ? (_reportPossibleCrUseOfUIButton({
        error: Error()
      }), UIButton) : UIButton), (_class = class ModalWindow extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "animation", _descriptor, this);

          _initializerDefineProperty(this, "closeButton", _descriptor2, this);

          _initializerDefineProperty(this, "backgroundCloseButton", _descriptor3, this);

          this.result = void 0;
          this.isDismissed = false;
          this.openAnimationName = "open";
          this.closeAnimationName = "close";
        }

        runAsync(params) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var _this$closeButton, _this$backgroundClose, _this$animation, _this$animation2;

            (_this$closeButton = _this.closeButton) == null ? void 0 : _this$closeButton.InteractedEvent.on(() => _this.dismiss(), _this);
            (_this$backgroundClose = _this.backgroundCloseButton) == null ? void 0 : _this$backgroundClose.InteractedEvent.on(() => _this.dismiss(), _this);

            _this.setup(params);

            (_this$animation = _this.animation) == null ? void 0 : _this$animation.play(_this.openAnimationName);

            while (!_this.isDismissed) yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
              error: Error()
            }), delay) : delay)(100);

            (_this$animation2 = _this.animation) == null ? void 0 : _this$animation2.play(_this.closeAnimationName);
            yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
              error: Error()
            }), delay) : delay)(_this.getCloseAnimationTime() * 1000);
            return _this.result;
          })();
        }

        dismiss(result) {
          this.result = result;
          this.isDismissed = true;
        }

        getCloseAnimationTime() {
          var _this$animation3;

          var state = (_this$animation3 = this.animation) == null ? void 0 : _this$animation3.getState(this.closeAnimationName);

          if (state != null) {
            return state.duration;
          }

          return 0;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "animation", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "closeButton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "backgroundCloseButton", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class)));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ce89f6a2aeee10b684a4a7523371e9559535be1.js.map