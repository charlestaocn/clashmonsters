System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Vec3, Signal, ObjectPool, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, EnemySpawner;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../../../Services/EventSystem/Signal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPool(extras) {
    _reporterNs.report("ObjectPool", "../../../../Services/ObjectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemySettings(extras) {
    _reporterNs.report("EnemySettings", "../../../Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyGraphicsType(extras) {
    _reporterNs.report("EnemyGraphicsType", "../EnemyGraphicsType", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Signal = _unresolved_2.Signal;
    }, function (_unresolved_3) {
      ObjectPool = _unresolved_3.ObjectPool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2260cGJEAdNlpJwzk5tNSzU", "EnemySpawner", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Vec3', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemySpawner", EnemySpawner = (_dec = ccclass("EnemySpawner"), _dec2 = property(Prefab), _dec(_class = (_class2 = class EnemySpawner extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "enemies", _descriptor, this);

          this.enemyAddedEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.enemyRemovedEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.enemyGraphicsTypeToPool = new Map();
          this.targetNode = void 0;
          this.idToSettings = new Map();
        }

        init(targetNode, enemiesSettings) {
          this.targetNode = targetNode;

          for (var enemy of this.enemies) {
            var enemyPool = new (_crd && ObjectPool === void 0 ? (_reportPossibleCrUseOfObjectPool({
              error: Error()
            }), ObjectPool) : ObjectPool)(enemy, this.node, 50, "Enemy");
            this.enemyGraphicsTypeToPool.set(enemy.name, enemyPool);
          }

          for (var enemySettings of enemiesSettings) {
            this.idToSettings.set(enemySettings.id, enemySettings);
          }
        }

        get EnemyAddedEvent() {
          return this.enemyAddedEvent;
        }

        get EnemyRemovedEvent() {
          return this.enemyRemovedEvent;
        }

        spawnNewEnemy(positionX, positionY, id) {
          if (!this.idToSettings.has(id)) {
            throw new Error("Does not have setting for enemy " + id);
          }

          var enemySettings = this.idToSettings.get(id);
          var enemy = this.enemyGraphicsTypeToPool.get(enemySettings.graphicsType).borrow();
          var spawnPosition = new Vec3();
          spawnPosition.x = this.targetNode.worldPosition.x + positionX;
          spawnPosition.y = this.targetNode.worldPosition.y + positionY;
          enemy.setup(spawnPosition, enemySettings);
          enemy.DeathEvent.on(this.returnEnemy, this);
          enemy.LifetimeEndedEvent.on(this.returnEnemy, this);
          this.enemyAddedEvent.trigger(enemy);
          return enemy;
        }

        returnEnemy(enemy) {
          enemy.DeathEvent.off(this.returnEnemy);
          enemy.LifetimeEndedEvent.off(this.returnEnemy);
          console.log(enemy.name);
          this.enemyGraphicsTypeToPool.get(enemy.node.name).return(enemy);
          this.enemyRemovedEvent.trigger(enemy);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemies", [_dec2], {
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
//# sourceMappingURL=8748e2f549d42ecd19ef059c59aa7f293537b306.js.map