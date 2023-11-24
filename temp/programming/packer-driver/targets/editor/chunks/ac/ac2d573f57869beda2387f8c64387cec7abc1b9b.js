System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Camera, Component, director, instantiate, JsonAsset, Prefab, _decorator, GameAssets, AudioPlayer, SaveSystem, ModalWindowManager, OpenCloseAnimator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3, _crd, ccclass, property, AppRoot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameSettings(extras) {
    _reporterNs.report("GameSettings", "../Game/Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameAssets(extras) {
    _reporterNs.report("GameAssets", "../Game/Data/Assets/GameAssets", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTranslationData(extras) {
    _reporterNs.report("TranslationData", "../Game/Data/TranslationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserData(extras) {
    _reporterNs.report("UserData", "../Game/Data/UserData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioPlayer(extras) {
    _reporterNs.report("AudioPlayer", "../Services/AudioPlayer/AudioPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSaveSystem(extras) {
    _reporterNs.report("SaveSystem", "./SaveSystem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModalWindowManager(extras) {
    _reporterNs.report("ModalWindowManager", "../Services/ModalWindowSystem/ModalWindowManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenCloseAnimator(extras) {
    _reporterNs.report("OpenCloseAnimator", "../Utils/OpenCloseAnimator", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Camera = _cc.Camera;
      Component = _cc.Component;
      director = _cc.director;
      instantiate = _cc.instantiate;
      JsonAsset = _cc.JsonAsset;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      GameAssets = _unresolved_2.GameAssets;
    }, function (_unresolved_3) {
      AudioPlayer = _unresolved_3.AudioPlayer;
    }, function (_unresolved_4) {
      SaveSystem = _unresolved_4.SaveSystem;
    }, function (_unresolved_5) {
      ModalWindowManager = _unresolved_5.ModalWindowManager;
    }, function (_unresolved_6) {
      OpenCloseAnimator = _unresolved_6.OpenCloseAnimator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4943dSvt9FBvLizJ1HhFOzg", "AppRoot", undefined);

      __checkObsolete__(['Camera', 'Component', 'director', 'instantiate', 'JsonAsset', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AppRoot", AppRoot = (_dec = ccclass("AppRoot"), _dec2 = property(_crd && AudioPlayer === void 0 ? (_reportPossibleCrUseOfAudioPlayer({
        error: Error()
      }), AudioPlayer) : AudioPlayer), _dec3 = property(JsonAsset), _dec4 = property(JsonAsset), _dec5 = property(Prefab), _dec6 = property(Camera), _dec7 = property(_crd && ModalWindowManager === void 0 ? (_reportPossibleCrUseOfModalWindowManager({
        error: Error()
      }), ModalWindowManager) : ModalWindowManager), _dec8 = property(_crd && OpenCloseAnimator === void 0 ? (_reportPossibleCrUseOfOpenCloseAnimator({
        error: Error()
      }), OpenCloseAnimator) : OpenCloseAnimator), _dec(_class = (_class2 = (_class3 = class AppRoot extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "audio", _descriptor, this);

          _initializerDefineProperty(this, "settingsAsset", _descriptor2, this);

          _initializerDefineProperty(this, "engTranslationAsset", _descriptor3, this);

          _initializerDefineProperty(this, "gameAssetsPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "mainCamera", _descriptor5, this);

          _initializerDefineProperty(this, "modalWindowManager", _descriptor6, this);

          _initializerDefineProperty(this, "screenFader", _descriptor7, this);

          this.saveSystem = void 0;
          this.liveUserData = void 0;
          this.gameAssets = void 0;
        }

        static get Instance() {
          return this.instance;
        }

        get AudioPlayer() {
          return this.audio;
        }

        get GameAssets() {
          return this.gameAssets;
        }

        get LiveUserData() {
          return this.liveUserData;
        }

        get Settings() {
          return this.settingsAsset.json;
        }

        get TranslationData() {
          return this.engTranslationAsset.json;
        }

        get ModalWindowManager() {
          return this.modalWindowManager;
        }

        get MainCamera() {
          return this.mainCamera;
        }

        get ScreenFader() {
          return this.screenFader;
        }

        saveUserData() {
          this.saveSystem.save(this.liveUserData);
        }

        start() {
          if (AppRoot.Instance == null) {
            AppRoot.instance = this;
            director.addPersistRootNode(this.node);
            this.init();
          } else {
            this.node.destroy();
          }
        }

        update(deltaTime) {}

        async init() {
          this.saveSystem = new (_crd && SaveSystem === void 0 ? (_reportPossibleCrUseOfSaveSystem({
            error: Error()
          }), SaveSystem) : SaveSystem)();
          this.liveUserData = this.saveSystem.load();
          const gameAssetsNode = instantiate(this.gameAssetsPrefab);
          gameAssetsNode.setParent(this.node);
          this.gameAssets = gameAssetsNode.getComponent(_crd && GameAssets === void 0 ? (_reportPossibleCrUseOfGameAssets({
            error: Error()
          }), GameAssets) : GameAssets);
          this.gameAssets.init();
          this.audio.init(this.LiveUserData.soundVolume, this.LiveUserData.musicVolume);
          this.screenFader.init();
          this.screenFader.node.active = false;
        }

      }, _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audio", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "settingsAsset", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "engTranslationAsset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gameAssetsPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mainCamera", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "modalWindowManager", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "screenFader", [_dec8], {
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
//# sourceMappingURL=ac2d573f57869beda2387f8c64387cec7abc1b9b.js.map