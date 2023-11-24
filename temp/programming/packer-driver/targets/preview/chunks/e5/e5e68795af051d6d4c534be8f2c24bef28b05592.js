System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, _decorator, EnemyMovementType, FollowTargetEnemyMover, PeriodicFollowMovers, WaveEnemyMover, CircularEnemySpawner, EnemySpawner, IndividualEnemySpawner, WaveEnemySpawner, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, EnemyManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyManagerSettings(extras) {
    _reporterNs.report("EnemyManagerSettings", "../../Data/GameSettings", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "./Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyMovementType(extras) {
    _reporterNs.report("EnemyMovementType", "./EnemyMovementType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIEnemyMover(extras) {
    _reporterNs.report("IEnemyMover", "./EnemyMover/EnemyMover", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFollowTargetEnemyMover(extras) {
    _reporterNs.report("FollowTargetEnemyMover", "./EnemyMover/FollowTargetEnemyMover", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPeriodicFollowMovers(extras) {
    _reporterNs.report("PeriodicFollowMovers", "./EnemyMover/PeriodicFollow/PeriodicFollowMovers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaveEnemyMover(extras) {
    _reporterNs.report("WaveEnemyMover", "./EnemyMover/WaveEnemyMover", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCircularEnemySpawner(extras) {
    _reporterNs.report("CircularEnemySpawner", "./EnemySpawner/CircularEnemySpawner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDelayedEnemySpawner(extras) {
    _reporterNs.report("DelayedEnemySpawner", "./EnemySpawner/DelayedEnemySpawner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemySpawner(extras) {
    _reporterNs.report("EnemySpawner", "./EnemySpawner/EnemySpawner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIndividualEnemySpawner(extras) {
    _reporterNs.report("IndividualEnemySpawner", "./EnemySpawner/IndividualEnemySpawner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaveEnemySpawner(extras) {
    _reporterNs.report("WaveEnemySpawner", "./EnemySpawner/WaveEnemySpawner", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      EnemyMovementType = _unresolved_2.EnemyMovementType;
    }, function (_unresolved_3) {
      FollowTargetEnemyMover = _unresolved_3.FollowTargetEnemyMover;
    }, function (_unresolved_4) {
      PeriodicFollowMovers = _unresolved_4.PeriodicFollowMovers;
    }, function (_unresolved_5) {
      WaveEnemyMover = _unresolved_5.WaveEnemyMover;
    }, function (_unresolved_6) {
      CircularEnemySpawner = _unresolved_6.CircularEnemySpawner;
    }, function (_unresolved_7) {
      EnemySpawner = _unresolved_7.EnemySpawner;
    }, function (_unresolved_8) {
      IndividualEnemySpawner = _unresolved_8.IndividualEnemySpawner;
    }, function (_unresolved_9) {
      WaveEnemySpawner = _unresolved_9.WaveEnemySpawner;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "839f4SZvHNBFaiDSpMi6pOJ", "EnemyManager", undefined);

      __checkObsolete__(['Component', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyManager", EnemyManager = (_dec = ccclass("EnemyManager"), _dec2 = property(_crd && EnemySpawner === void 0 ? (_reportPossibleCrUseOfEnemySpawner({
        error: Error()
      }), EnemySpawner) : EnemySpawner), _dec(_class = (_class2 = class EnemyManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "enemySpawner", _descriptor, this);

          this.movementTypeToMover = new Map();
          this.spawners = [];
        }

        init(targetNode, settings) {
          this.enemySpawner.init(targetNode, settings.enemies);
          this.enemySpawner.EnemyAddedEvent.on(this.onEnemyAdded, this);
          this.enemySpawner.EnemyRemovedEvent.on(this.onEnemyRemoved, this);

          for (var individualSpawnerSettings of settings.individualEnemySpawners) {
            var individualSpawner = new (_crd && IndividualEnemySpawner === void 0 ? (_reportPossibleCrUseOfIndividualEnemySpawner({
              error: Error()
            }), IndividualEnemySpawner) : IndividualEnemySpawner)(this.enemySpawner, individualSpawnerSettings);
            this.spawners.push(individualSpawner);
          }

          for (var circularSpawnerSettings of settings.circularEnemySpawners) {
            var circularSpawner = new (_crd && CircularEnemySpawner === void 0 ? (_reportPossibleCrUseOfCircularEnemySpawner({
              error: Error()
            }), CircularEnemySpawner) : CircularEnemySpawner)(this.enemySpawner, circularSpawnerSettings);
            this.spawners.push(circularSpawner);
          }

          for (var waveSpawnerSettings of settings.waveEnemySpawners) {
            var waveSpawner = new (_crd && WaveEnemySpawner === void 0 ? (_reportPossibleCrUseOfWaveEnemySpawner({
              error: Error()
            }), WaveEnemySpawner) : WaveEnemySpawner)(this.enemySpawner, waveSpawnerSettings);
            this.spawners.push(waveSpawner);
          }

          this.movementTypeToMover.set((_crd && EnemyMovementType === void 0 ? (_reportPossibleCrUseOfEnemyMovementType({
            error: Error()
          }), EnemyMovementType) : EnemyMovementType).Follow, new (_crd && FollowTargetEnemyMover === void 0 ? (_reportPossibleCrUseOfFollowTargetEnemyMover({
            error: Error()
          }), FollowTargetEnemyMover) : FollowTargetEnemyMover)(targetNode));
          this.movementTypeToMover.set((_crd && EnemyMovementType === void 0 ? (_reportPossibleCrUseOfEnemyMovementType({
            error: Error()
          }), EnemyMovementType) : EnemyMovementType).Launch, new (_crd && WaveEnemyMover === void 0 ? (_reportPossibleCrUseOfWaveEnemyMover({
            error: Error()
          }), WaveEnemyMover) : WaveEnemyMover)(targetNode));
          this.movementTypeToMover.set((_crd && EnemyMovementType === void 0 ? (_reportPossibleCrUseOfEnemyMovementType({
            error: Error()
          }), EnemyMovementType) : EnemyMovementType).PeriodicFollow, new (_crd && PeriodicFollowMovers === void 0 ? (_reportPossibleCrUseOfPeriodicFollowMovers({
            error: Error()
          }), PeriodicFollowMovers) : PeriodicFollowMovers)(targetNode, settings.periodicFollowMovers));
        }

        gameTick(deltaTime) {
          for (var spawner of this.spawners) {
            spawner.gameTick(deltaTime);
          }

          for (var kvp of this.movementTypeToMover) {
            kvp[1].gameTick(deltaTime);
          }
        }

        get EnemyAddedEvent() {
          return this.enemySpawner.EnemyAddedEvent;
        }

        get EnemyRemovedEvent() {
          return this.enemySpawner.EnemyRemovedEvent;
        }

        onEnemyAdded(enemy) {
          this.getEnemyMover(enemy).addEnemy(enemy);
        }

        onEnemyRemoved(enemy) {
          this.getEnemyMover(enemy).removeEnemy(enemy);
        }

        getEnemyMover(enemy) {
          if (this.movementTypeToMover.has(enemy.MovementType)) {
            return this.movementTypeToMover.get(enemy.MovementType);
          }

          throw new Error("Does not have mover of type " + enemy.MovementType);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemySpawner", [_dec2], {
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
//# sourceMappingURL=e5e68795af051d6d4c534be8f2c24bef28b05592.js.map