System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, ObjectPool, PooledObject, _crd;

  _export("ObjectPool", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a4ed3tMiYlPCJMDTXo66QcD", "ObjectPool", undefined);

      __checkObsolete__(['Component', 'instantiate', 'Node', 'Prefab']);

      _export("ObjectPool", ObjectPool = class ObjectPool {
        constructor(prefab, parent, defaultPoolCount, componentName) {
          this.prefab = void 0;
          this.parent = void 0;
          this.pooledObjects = [];
          this.componentName = void 0;
          this.prefab = prefab;
          this.parent = parent;
          this.componentName = componentName;

          for (var i = 0; i < defaultPoolCount; i++) {
            this.createNew();
          }
        }

        borrow() {
          var objectToBorrow = this.pooledObjects.find(o => !o.IsBorrowed);

          if (objectToBorrow != null) {
            return objectToBorrow.borrow();
          }

          return this.createNew().borrow();
        }

        return(object) {
          var objectToReturn = this.pooledObjects.find(o => o.Equals(object));

          if (objectToReturn == null) {
            throw new Error("Object " + this.prefab.name + " is not a member of the pool");
          }

          objectToReturn.return();
        }

        createNew() {
          var newPooledObject = new PooledObject(this.prefab, this.parent, this.componentName);
          this.pooledObjects.push(newPooledObject);
          return newPooledObject;
        }

      });

      PooledObject = class PooledObject {
        constructor(prefab, defaultParent, componentName) {
          this.isBorrowed = false;
          this.defaultParent = void 0;
          this.instancedNode = void 0;
          this.instancedComponent = void 0;
          this.defaultParent = defaultParent;
          this.instancedNode = instantiate(prefab);
          this.instancedComponent = this.instancedNode.getComponent(componentName);

          if (this.instancedComponent == null) {
            console.error("Object " + prefab.name + " does not have component " + componentName);
          }

          this.clear();
        }

        get IsBorrowed() {
          return this.isBorrowed;
        }

        Equals(component) {
          return this.instancedComponent == component;
        }

        borrow() {
          this.isBorrowed = true;
          return this.instancedComponent;
        }

        return() {
          this.clear();
        }

        clear() {
          this.instancedNode.active = false;
          this.instancedNode.parent = this.defaultParent;
          this.isBorrowed = false;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=67623c7cf13b7bacd799b241f012aac65be271e8.js.map