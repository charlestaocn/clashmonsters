System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AudioSource, Component, _decorator, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, AudioPlayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "958e24+jRZMdr5ue2HNRuRM", "AudioPlayer", undefined);

      __checkObsolete__(['AudioClip', 'AudioSource', 'Component', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AudioPlayer", AudioPlayer = (_dec = ccclass("AudioPlayer"), _dec2 = property(AudioSource), _dec3 = property(AudioSource), _dec(_class = (_class2 = class AudioPlayer extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "soundSource", _descriptor, this);

          _initializerDefineProperty(this, "musicSource", _descriptor2, this);
        }

        init(soundVolume, musicVolume) {
          this.setSoundVolume(soundVolume);
          this.setMusicVolume(musicVolume);
        }

        get SoundVolume() {
          return this.soundSource.volume;
        }

        get MusicVolume() {
          return this.musicSource.volume;
        }

        setSoundVolume(volume) {
          this.soundSource.volume = volume;
        }

        setMusicVolume(volume) {
          this.musicSource.volume = volume;
        }

        playSound(clip) {
          this.soundSource.playOneShot(clip);
        }

        playMusic(clip) {
          this.musicSource.stop();
          this.musicSource.clip = clip;
          this.musicSource.play();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "soundSource", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "musicSource", [_dec3], {
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
//# sourceMappingURL=3f59d11d953ace826b5ff9caa6159c9d324244ad.js.map