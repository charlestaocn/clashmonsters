System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Label, ProgressBar, _decorator, UIButton, ItemType, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, GameUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUIButton(extras) {
    _reporterNs.report("UIButton", "../../Services/UI/Button/UIButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameResult(extras) {
    _reporterNs.report("GameResult", "../Game", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemManager(extras) {
    _reporterNs.report("ItemManager", "../Items/ItemManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemType(extras) {
    _reporterNs.report("ItemType", "../Items/ItemType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameModalLauncher(extras) {
    _reporterNs.report("GameModalLauncher", "../ModalWIndows/GameModalLauncher", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../Unit/Player/Player", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUnitLevel(extras) {
    _reporterNs.report("UnitLevel", "../Unit/UnitLevel", _context.meta, extras);
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
      ProgressBar = _cc.ProgressBar;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      UIButton = _unresolved_2.UIButton;
    }, function (_unresolved_3) {
      ItemType = _unresolved_3.ItemType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2e3934mbwxGZ64mwdThAm0I", "GameUI", undefined);

      __checkObsolete__(['Component', 'Label', 'ProgressBar', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameUI", GameUI = (_dec = ccclass("GameUI"), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(_crd && UIButton === void 0 ? (_reportPossibleCrUseOfUIButton({
        error: Error()
      }), UIButton) : UIButton), _dec(_class = (_class2 = class GameUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "xpBar", _descriptor, this);

          _initializerDefineProperty(this, "timeAliveText", _descriptor2, this);

          _initializerDefineProperty(this, "goldLabel", _descriptor3, this);

          _initializerDefineProperty(this, "pauseBtn", _descriptor4, this);

          this.playerLevel = void 0;
          this.modalLauncher = void 0;
          this.gameResult = void 0;
        }

        init(player, modalLauncher, itemManager, gameResult) {
          this.playerLevel = player.Level;
          this.modalLauncher = modalLauncher;
          this.gameResult = gameResult;
          this.playerLevel.XpAddedEvent.on(this.updateProgressBar, this);
          this.playerLevel.LevelUpEvent.on(this.updateProgressBar, this);
          itemManager.PickupEvent.on(this.tryUpdateGoldLabel, this);
          this.xpBar.progress = 0;
          this.pauseBtn.InteractedEvent.on(this.showPauseWindow, this);
        }

        updateProgressBar() {
          this.xpBar.progress = this.playerLevel.XP / this.playerLevel.RequiredXP;
        }

        tryUpdateGoldLabel(itemType) {
          if (itemType !== (_crd && ItemType === void 0 ? (_reportPossibleCrUseOfItemType({
            error: Error()
          }), ItemType) : ItemType).Gold) return;
          this.goldLabel.string = this.gameResult.goldCoins.toString();
        }

        showPauseWindow() {
          console.log("Show pause window");
          this.modalLauncher.showPauseModal();
        }

        updateTimeAlive(timeAlive) {
          this.timeAliveText.string = `${Math.floor(timeAlive)}`;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "xpBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timeAliveText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "goldLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pauseBtn", [_dec5], {
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
//# sourceMappingURL=df3b2e4257276ad1e9e5c754b804b8967c466ce5.js.map