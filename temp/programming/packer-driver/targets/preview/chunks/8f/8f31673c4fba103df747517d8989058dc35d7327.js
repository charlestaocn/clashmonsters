System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, instantiate, Prefab, _decorator, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ModalWindowManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfModalWindow(extras) {
    _reporterNs.report("ModalWindow", "./ModalWindow", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c623fhj2b5Cyau8MBXLOmVF", "ModalWindowManager", undefined);

      __checkObsolete__(['Component', 'instantiate', 'Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ModalWindowManager", ModalWindowManager = (_dec = ccclass("ModalWindowManager"), _dec2 = property(Prefab), _dec(_class = (_class2 = class ModalWindowManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "availableWindows", _descriptor, this);
        }

        showModal(name, params) {
          var _this = this;

          return _asyncToGenerator(function* () {
            console.log("SHOW MODAL", name, params);

            var windowPrefab = _this.availableWindows.find(w => w.name === name);

            var windowNode = instantiate(windowPrefab);
            windowNode.setParent(_this.node);
            var modalWindow = windowNode.getComponent(name);
            var result = yield modalWindow.runAsync(params);
            windowNode.destroy();
            return result;
          })();
        }

        closeModel(modalWindowName) {
          var windowNode = this.node.getChildByName(modalWindowName);

          if (windowNode) {
            windowNode.destroy();
            return true;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "availableWindows", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f31673c4fba103df747517d8989058dc35d7327.js.map