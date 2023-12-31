System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Slider, _decorator, AppRoot, ModalWindow, UIButton, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, AudioSettingsModalWindow;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAppRoot(extras) {
    _reporterNs.report("AppRoot", "../../../AppRoot/AppRoot", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalWindow(extras) {
    _reporterNs.report("ModalWindow", "../../../Services/ModalWindowSystem/ModalWindow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIButton(extras) {
    _reporterNs.report("UIButton", "../../../Services/UI/Button/UIButton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEmpty(extras) {
    _reporterNs.report("Empty", "../Upgrades/UpgradesModalWindow", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Slider = _cc.Slider;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AppRoot = _unresolved_2.AppRoot;
    }, function (_unresolved_3) {
      ModalWindow = _unresolved_3.ModalWindow;
    }, function (_unresolved_4) {
      UIButton = _unresolved_4.UIButton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c0521PyCxK/6XtpzF/acnv", "AudioSettingsModalWindow", undefined);

      __checkObsolete__(['Slider', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioSettingsModalWindow", AudioSettingsModalWindow = (_dec = ccclass("AudioSettingsModalWindow"), _dec2 = property(Slider), _dec3 = property(Slider), _dec4 = property(_crd && UIButton === void 0 ? (_reportPossibleCrUseOfUIButton({
        error: Error()
      }), UIButton) : UIButton), _dec(_class = (_class2 = class AudioSettingsModalWindow extends (_crd && ModalWindow === void 0 ? (_reportPossibleCrUseOfModalWindow({
        error: Error()
      }), ModalWindow) : ModalWindow) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "soundVolumeSlider", _descriptor, this);

          _initializerDefineProperty(this, "musicVolumeSlider", _descriptor2, this);

          _initializerDefineProperty(this, "okButton", _descriptor3, this);
        }

        setup() {
          this.soundVolumeSlider.progress = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.AudioPlayer.SoundVolume;
          this.musicVolumeSlider.progress = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.AudioPlayer.MusicVolume;
          this.soundVolumeSlider.node.on("slide", this.updateSoundVolume, this);
          this.musicVolumeSlider.node.on("slide", this.updateMusicVolume, this);
          this.okButton.InteractedEvent.on(this.dismiss, this);
        }

        updateSoundVolume() {
          (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.AudioPlayer.setSoundVolume(this.soundVolumeSlider.progress);
        }

        updateMusicVolume() {
          (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.AudioPlayer.setMusicVolume(this.musicVolumeSlider.progress);
        }

        dismiss(result) {
          super.dismiss(result);
          const userData = (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.LiveUserData;
          userData.musicVolume = this.musicVolumeSlider.progress;
          userData.soundVolume = this.soundVolumeSlider.progress;
          (_crd && AppRoot === void 0 ? (_reportPossibleCrUseOfAppRoot({
            error: Error()
          }), AppRoot) : AppRoot).Instance.saveUserData();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "soundVolumeSlider", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "musicVolumeSlider", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "okButton", [_dec4], {
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
//# sourceMappingURL=848b4db07bcea792a9056859571cebeb5c096fe4.js.map