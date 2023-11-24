System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, Signal, ObjectPool, getDegreeAngleFromDirection, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ProjectileLauncher;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../../Services/EventSystem/Signal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObjectPool(extras) {
    _reporterNs.report("ObjectPool", "../../../Services/ObjectPool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetDegreeAngleFromDirection(extras) {
    _reporterNs.report("getDegreeAngleFromDirection", "../../../Services/Utils/MathUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIProjectileLauncherSignaler(extras) {
    _reporterNs.report("IProjectileLauncherSignaler", "../IProjectileLauncherSignaler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProjectile(extras) {
    _reporterNs.report("Projectile", "../Projectile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProjectileCollision(extras) {
    _reporterNs.report("ProjectileCollision", "../ProjectileCollision", _context.meta, extras);
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
      Signal = _unresolved_2.Signal;
    }, function (_unresolved_3) {
      ObjectPool = _unresolved_3.ObjectPool;
    }, function (_unresolved_4) {
      getDegreeAngleFromDirection = _unresolved_4.getDegreeAngleFromDirection;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3d066A8exFBaWWn2gx4c4j", "ProjectileLauncher", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ProjectileLauncher", ProjectileLauncher = (_dec = ccclass("ProjectileLauncher"), _dec2 = property(Prefab), _dec(_class = (_class2 = class ProjectileLauncher extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "projectilePrefab", _descriptor, this);

          this.projectileCollisionEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.projectileLaunchedEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.projectileDamage = void 0;
          this.projectilePierces = void 0;
          this.projectileLifetime = void 0;
          this.projectileSpeed = void 0;
          this.projectilePool = void 0;
          this.projectiles = [];
          this.directions = [];
          this.expireTimes = [];
          this.currentTime = 0;
        }

        get ProjectileCollisionEvent() {
          return this.projectileCollisionEvent;
        }

        get ProjectileLaunchedEvent() {
          return this.projectileLaunchedEvent;
        }

        init(projectileLifetime, projectileSpeed, projectileDamage, projectilePierces) {
          this.projectileLifetime = projectileLifetime;
          this.projectileSpeed = projectileSpeed;
          this.projectileDamage = projectileDamage;
          this.projectilePierces = projectilePierces;
          this.projectilePool = new (_crd && ObjectPool === void 0 ? (_reportPossibleCrUseOfObjectPool({
            error: Error()
          }), ObjectPool) : ObjectPool)(this.projectilePrefab, this.node, 6, "Projectile");
        }

        gameTick(deltaTime) {
          this.currentTime += deltaTime;
          this.tryRemoveExpiredProjectiles();
          this.moveAllProjectiles(deltaTime);
        }

        fireProjectiles(startPosition, fireDirections) {
          for (var direction of fireDirections) {
            this.fireProjectile(startPosition, direction);
          }
        }

        fireProjectile(startPosition, direction) {
          direction = direction.normalize();
          var projectile = this.projectilePool.borrow();
          projectile.setup(this.projectileDamage, this.projectilePierces, (_crd && getDegreeAngleFromDirection === void 0 ? (_reportPossibleCrUseOfgetDegreeAngleFromDirection({
            error: Error()
          }), getDegreeAngleFromDirection) : getDegreeAngleFromDirection)(direction.x, direction.y));
          projectile.node.setWorldPosition(startPosition);
          projectile.node.active = true;
          projectile.ContactBeginEvent.on(this.onProjectileCollision, this);
          projectile.PiercesDepletedEvent.on(this.onPiercesDepleted, this);
          this.projectiles.push(projectile);
          this.directions.push(direction);
          this.expireTimes.push(this.currentTime + this.projectileLifetime);
          this.projectileLaunchedEvent.trigger();
        }

        tryRemoveExpiredProjectiles() {
          for (var i = 0; i < this.projectiles.length; i++) {
            if (this.currentTime < this.expireTimes[i]) break; // the oldest particles are at the start of the array

            var projectile = this.projectiles[i];
            this.removeProjectile(projectile, i);
            i--; // Check the same index
          }
        }

        onPiercesDepleted(projectile) {
          var index = this.projectiles.indexOf(projectile);

          if (index === -1) {
            throw new Error("Projectile not found!");
          }

          this.removeProjectile(projectile, index);
        }

        removeProjectile(projectile, index) {
          projectile.ContactBeginEvent.off(this.onProjectileCollision);
          projectile.PiercesDepletedEvent.off(this.onPiercesDepleted);
          this.projectilePool.return(projectile);
          this.projectiles.splice(index, 1);
          this.directions.splice(index, 1);
          this.expireTimes.splice(index, 1);
        }

        moveAllProjectiles(deltaTime) {
          for (var i = 0; i < this.projectiles.length; i++) {
            var newPosition = this.projectiles[i].node.worldPosition;
            newPosition.x += this.directions[i].x * deltaTime * this.projectileSpeed;
            newPosition.y += this.directions[i].y * deltaTime * this.projectileSpeed;
            this.projectiles[i].node.setWorldPosition(newPosition);
          }
        }

        onProjectileCollision(projectlieCollision) {
          this.projectileCollisionEvent.trigger(projectlieCollision);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "projectilePrefab", [_dec2], {
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
//# sourceMappingURL=228adeef5b294aa01bd3df9c6c4e6aba7597f6e3.js.map