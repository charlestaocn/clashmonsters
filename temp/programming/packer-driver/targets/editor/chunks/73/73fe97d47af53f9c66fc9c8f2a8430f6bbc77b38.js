System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, NodeEventType, Sprite, _decorator, Animation, AppRoot, Signal, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, LevelUpSkill;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../../../AppRoot/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../../Services/EventSystem/Signal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTranslationData(extras) {
    _reporterNs.report("TranslationData", "../../Data/TranslationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUpgradeType(extras) {
    _reporterNs.report("UpgradeType", "../../Upgrades/UpgradeType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Label = _cc.Label;
      NodeEventType = _cc.NodeEventType;
      Sprite = _cc.Sprite;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }, function (_unresolved_3) {
      Signal = _unresolved_3.Signal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65e26iJvE9IfYYlYC+87Y6x", "LevelUpSkill", undefined);

      __checkObsolete__(['approx', 'Component', 'Label', 'NodeEventType', 'Sprite', '_decorator', 'Animation', 'AnimationComponent', 'AnimationClip']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LevelUpSkill", LevelUpSkill = (_dec = ccclass("LevelUpSkill"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Sprite), _dec(_class = (_class2 = class LevelUpSkill extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "skillTitle", _descriptor, this);

          _initializerDefineProperty(this, "skillDescription", _descriptor2, this);

          _initializerDefineProperty(this, "skillIcon", _descriptor3, this);

          this.chooseSkillEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.skillType = void 0;
        }

        init(skillType, translationData) {
          this.skillType = skillType;
          this.skillTitle.string = `${translationData[`${skillType}_TITLE`]}`;
          this.skillIcon.spriteFrame = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.GameAssets.UpgradeIcons.getIcon(skillType);
          this.node.on(NodeEventType.TOUCH_START, this.chooseSkill, this);
        }

        get ChooseSkillEvent() {
          return this.chooseSkillEvent;
        }

        chooseSkill() {
          const anni = this.getComponent(Animation);

          if (anni) {
            anni.play("choosen");
          }

          this.chooseSkillEvent.trigger(this.skillType);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skillTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "skillDescription", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skillIcon", [_dec4], {
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
//# sourceMappingURL=73fe97d47af53f9c66fc9c8f2a8430f6bbc77b38.js.map