System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, ObjectPool, delay, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, EnemyDeathEffectSpawner;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfObjectPool(extras) {
    _reporterNs.report("ObjectPool", "../../../../Services/ObjectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdelay(extras) {
    _reporterNs.report("delay", "../../../../Services/Utils/AsyncUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyManager(extras) {
    _reporterNs.report("EnemyManager", "../EnemyManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyDeathEffect(extras) {
    _reporterNs.report("EnemyDeathEffect", "./EnemyDeathEffect", _context.meta, extras);
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
    }, function (_unresolved_2) {
      ObjectPool = _unresolved_2.ObjectPool;
    }, function (_unresolved_3) {
      delay = _unresolved_3.delay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d2079Oe4hGb4KAQJkl2Luy", "EnemyDeathEffectSpawner", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyDeathEffectSpawner", EnemyDeathEffectSpawner = (_dec = ccclass("EnemyDeathEffectSpawner"), _dec2 = property(Prefab), _dec(_class = (_class2 = class EnemyDeathEffectSpawner extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "deathEffectPrefab", _descriptor, this);

          this.effectPool = void 0;
        }

        init(enemyManager) {
          enemyManager.EnemyAddedEvent.on(this.onEnemyAdded, this);
          enemyManager.EnemyRemovedEvent.on(this.onEnemyRemoved, this);
          this.effectPool = new (_crd && ObjectPool === void 0 ? (_reportPossibleCrUseOfObjectPool({
            error: Error()
          }), ObjectPool) : ObjectPool)(this.deathEffectPrefab, this.node, 5, "EnemyDeathEffect");
        }

        onEnemyAdded(enemy) {
          enemy.DeathEvent.on(this.animateDeathEffect, this);
        }

        onEnemyRemoved(enemy) {
          enemy.DeathEvent.off(this.animateDeathEffect);
        }

        async animateDeathEffect(enemy) {
          const deathEffect = this.effectPool.borrow();
          deathEffect.setup(enemy.node.worldPosition);
          await (_crd && delay === void 0 ? (_reportPossibleCrUseOfdelay({
            error: Error()
          }), delay) : delay)(360);
          this.effectPool.return(deathEffect);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "deathEffectPrefab", [_dec2], {
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
//# sourceMappingURL=f725153782c2ff4e858635f363cd651b43deefac.js.map