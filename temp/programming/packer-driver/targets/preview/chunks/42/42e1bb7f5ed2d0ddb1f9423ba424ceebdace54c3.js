System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, Node, Prefab, Vec3, _decorator, ModalWindow, shuffle, delay, LevelUpSkill, LevelUpModalWindowParams, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, LevelUpModalWindow;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfModalWindow(extras) {
    _reporterNs.report("ModalWindow", "../../../Services/ModalWindowSystem/ModalWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshuffle(extras) {
    _reporterNs.report("shuffle", "../../../Services/Utils/ArrayUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../../Services/Utils/AsyncUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTranslationData(extras) {
    _reporterNs.report("TranslationData", "../../Data/TranslationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgradeType(extras) {
    _reporterNs.report("UpgradeType", "../../Upgrades/UpgradeType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelUpSkill(extras) {
    _reporterNs.report("LevelUpSkill", "./LevelUpSkill", _context.meta, extras);
  }

  _export("LevelUpModalWindowParams", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ModalWindow = _unresolved_2.ModalWindow;
    }, function (_unresolved_3) {
      shuffle = _unresolved_3.shuffle;
    }, function (_unresolved_4) {
      delay = _unresolved_4.delay;
    }, function (_unresolved_5) {
      LevelUpSkill = _unresolved_5.LevelUpSkill;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7ac68qK+pC7LXQWJdgAYVs", "LevelUpModalWindow", undefined);

      __checkObsolete__(['instantiate', 'Node', 'Prefab', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LevelUpModalWindow", LevelUpModalWindow = (_dec = ccclass("LevelUpModalWindow"), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class LevelUpModalWindow extends (_crd && ModalWindow === void 0 ? (_reportPossibleCrUseOfModalWindow({
        error: Error()
      }), ModalWindow) : ModalWindow) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "skillPrefab", _descriptor, this);

          _initializerDefineProperty(this, "skillParent", _descriptor2, this);

          this.maxUpgradesToPick = 3;
        }

        setup(params) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var shuffledAvailableUpgrades = (_crd && shuffle === void 0 ? (_reportPossibleCrUseOfshuffle({
              error: Error()
            }), shuffle) : shuffle)(params.availableUpgrades);

            if (_this.maxUpgradesToPick < shuffledAvailableUpgrades.length) {
              shuffledAvailableUpgrades.length = _this.maxUpgradesToPick;
            }

            var xPositions = [-210, 0, 210];
            yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
              error: Error()
            }), delay) : delay)(300);

            for (var i = 0; i < shuffledAvailableUpgrades.length; i++) {
              yield (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
                error: Error()
              }), delay) : delay)(500);
              var skill = instantiate(_this.skillPrefab).getComponent(_crd && LevelUpSkill === void 0 ? (_reportPossibleCrUseOfLevelUpSkill({
                error: Error()
              }), LevelUpSkill) : LevelUpSkill);
              skill.node.setParent(_this.skillParent);
              skill.node.setPosition(new Vec3(xPositions[i])); // skill.node.addComponent(Animation as any);

              console.log(skill.node);
              skill.init(shuffledAvailableUpgrades[i], params.translationData);
              skill.ChooseSkillEvent.on(_this.chooseSkill, _this);
            }
          })();
        }

        chooseSkill(upgradeType) {
          this.dismiss(upgradeType);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skillPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skillParent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _export("LevelUpModalWindowParams", LevelUpModalWindowParams = class LevelUpModalWindowParams {
        constructor() {
          this.availableUpgrades = void 0;
          this.translationData = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=42e1bb7f5ed2d0ddb1f9423ba424ceebdace54c3.js.map