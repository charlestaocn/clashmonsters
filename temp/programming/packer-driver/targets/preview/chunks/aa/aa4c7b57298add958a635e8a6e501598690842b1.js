System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Contact2DType, Signal, GameTimer, GroupType, Item, Projectile, Enemy, PlayerCollisionSystem, _crd;

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../Services/EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../Services/EventSystem/Signal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameTimer(extras) {
    _reporterNs.report("GameTimer", "../../Services/GameTimer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGroupType(extras) {
    _reporterNs.report("GroupType", "../GroupType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "../Items/Item", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemManager(extras) {
    _reporterNs.report("ItemManager", "../Items/ItemManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProjectile(extras) {
    _reporterNs.report("Projectile", "../Projectile/Projectile", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "../Unit/Enemy/Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "../Unit/Player/Player", _context.meta, extras);
  }

  _export("PlayerCollisionSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      Signal = _unresolved_2.Signal;
    }, function (_unresolved_3) {
      GameTimer = _unresolved_3.GameTimer;
    }, function (_unresolved_4) {
      GroupType = _unresolved_4.GroupType;
    }, function (_unresolved_5) {
      Item = _unresolved_5.Item;
    }, function (_unresolved_6) {
      Projectile = _unresolved_6.Projectile;
    }, function (_unresolved_7) {
      Enemy = _unresolved_7.Enemy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ea4efzvyfVBFrQ9fK6FvymP", "PlayerCollisionSystem", undefined);

      __checkObsolete__(['Collider2D', 'Contact2DType', 'Node']);

      _export("PlayerCollisionSystem", PlayerCollisionSystem = class PlayerCollisionSystem {
        constructor(player, collisionDelay, itemManager) {
          this.playerContacts = [];
          this.collisionTimer = void 0;
          this.groupToResolver = new Map();
          this.itemPickedUpEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
          this.player = player;
          this.itemManager = itemManager;
          this.player = player;
          player.Collider.on(Contact2DType.BEGIN_CONTACT, this.onPlayerContactBegin, this);
          player.Collider.on(Contact2DType.END_CONTACT, this.onPlayerContactEnd, this);
          this.collisionTimer = new (_crd && GameTimer === void 0 ? (_reportPossibleCrUseOfGameTimer({
            error: Error()
          }), GameTimer) : GameTimer)(collisionDelay);
          this.groupToResolver.set((_crd && GroupType === void 0 ? (_reportPossibleCrUseOfGroupType({
            error: Error()
          }), GroupType) : GroupType).ENEMY, this.resolveEnemyContact.bind(this));
          this.groupToResolver.set((_crd && GroupType === void 0 ? (_reportPossibleCrUseOfGroupType({
            error: Error()
          }), GroupType) : GroupType).ENEMY_PROJECTILE, this.resolveEnemyProjectileContact.bind(this));
          this.groupToResolver.set((_crd && GroupType === void 0 ? (_reportPossibleCrUseOfGroupType({
            error: Error()
          }), GroupType) : GroupType).ITEM, this.resolveItemContact.bind(this));
        }

        gameTick(deltaTime) {
          this.collisionTimer.gameTick(deltaTime);

          if (this.collisionTimer.tryFinishPeriod()) {
            this.resolveAllContacts();
          }
        }

        get ItemPickedUpEvent() {
          return this.itemPickedUpEvent;
        }

        onPlayerContactBegin(_selfCollider, otherCollider) {
          this.playerContacts.push(otherCollider);
          this.resolveContact(otherCollider);
        }

        onPlayerContactEnd(_selfCollider, otherCollider) {
          var index = this.playerContacts.indexOf(otherCollider);

          if (index != -1) {
            this.playerContacts.splice(index, 1);
          }
        }

        resolveAllContacts() {
          for (var i = 0; i < this.playerContacts.length; i++) {
            this.resolveContact(this.playerContacts[i]);
          }
        }

        resolveContact(otherCollider) {
          if (!this.player.Health.IsAlive) return;

          if (this.groupToResolver.has(otherCollider.group)) {
            this.groupToResolver.get(otherCollider.group)(otherCollider);
          } else {
            console.log("Collided with undefined group: " + otherCollider.group);
          }
        }

        resolveEnemyContact(enemyCollider) {
          var damage = enemyCollider.node.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
            error: Error()
          }), Enemy) : Enemy).Damage;
          console.log("Collided with enemy: Damage: " + damage);
          this.player.Health.damage(damage);
        }

        resolveEnemyProjectileContact(enemyCollider) {
          var projectile = enemyCollider.node.getComponent(_crd && Projectile === void 0 ? (_reportPossibleCrUseOfProjectile({
            error: Error()
          }), Projectile) : Projectile);
          var damage = projectile.Damage;
          projectile.pierce();
          console.log("Collided with enemy projectile: Damage: " + damage);
          this.player.Health.damage(damage);
        }

        resolveItemContact(xpCollider) {
          console.log("Collided with item");
          this.itemManager.pickupItem(xpCollider.node.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
            error: Error()
          }), Item) : Item));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aa4c7b57298add958a635e8a6e501598690842b1.js.map