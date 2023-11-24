System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, randomRangeInt, Vec3, SCREEN_HALF_HEIGHT, SCREEN_HALF_WIDTH, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Background;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSCREEN_HALF_HEIGHT(extras) {
    _reporterNs.report("SCREEN_HALF_HEIGHT", "../Data/GameConstants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSCREEN_HALF_WIDTH(extras) {
    _reporterNs.report("SCREEN_HALF_WIDTH", "../Data/GameConstants", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      randomRangeInt = _cc.randomRangeInt;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      SCREEN_HALF_HEIGHT = _unresolved_2.SCREEN_HALF_HEIGHT;
      SCREEN_HALF_WIDTH = _unresolved_2.SCREEN_HALF_WIDTH;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26e600FC3xNlZNOihGlWfAd", "Background", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'randomRangeInt', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Background", Background = (_dec = ccclass("Background"), _dec2 = property(Prefab), _dec(_class = (_class2 = class Background extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "backgroundPrefabs", _descriptor, this);

          this.targetNode = void 0;
          this.instancedBackgrounds = [];
          this.rows = 3;
          this.columns = 3;
          this.nodeSize = 512;
          this.playerGridPosX = 0;
          this.playerGridPosY = 0;
        }

        init(targetNode) {
          this.targetNode = targetNode;

          for (var i = 0; i < this.rows; i++) {
            var rowNodes = [];

            for (var u = 0; u < this.columns; u++) {
              var randomIndex = randomRangeInt(0, this.backgroundPrefabs.length);
              var backgroundNode = instantiate(this.backgroundPrefabs[randomIndex]);
              backgroundNode.setParent(this.node);
              var x = u * this.nodeSize - this.nodeSize + (_crd && SCREEN_HALF_WIDTH === void 0 ? (_reportPossibleCrUseOfSCREEN_HALF_WIDTH({
                error: Error()
              }), SCREEN_HALF_WIDTH) : SCREEN_HALF_WIDTH);
              var y = i * this.nodeSize - this.nodeSize + (_crd && SCREEN_HALF_HEIGHT === void 0 ? (_reportPossibleCrUseOfSCREEN_HALF_HEIGHT({
                error: Error()
              }), SCREEN_HALF_HEIGHT) : SCREEN_HALF_HEIGHT);
              backgroundNode.setWorldPosition(new Vec3(x, y, 0));
              rowNodes.push(backgroundNode);
            }

            this.instancedBackgrounds.push(rowNodes);
          }
        }

        gameTick() {
          this.tryTileX();
          this.tryTileY();
        }

        tryTileX() {
          var playerGridPosX = Math.round((this.targetNode.worldPosition.x - (_crd && SCREEN_HALF_WIDTH === void 0 ? (_reportPossibleCrUseOfSCREEN_HALF_WIDTH({
            error: Error()
          }), SCREEN_HALF_WIDTH) : SCREEN_HALF_WIDTH)) / this.nodeSize);

          if (playerGridPosX < this.playerGridPosX) {
            // move the last column to the left
            var columnIndex = this.columns - 1;

            for (var i = 0; i < this.rows; i++) {
              var instancedNode = this.instancedBackgrounds[i][columnIndex];
              var newPosition = instancedNode.worldPosition;
              newPosition.x -= this.columns * this.nodeSize;
              instancedNode.setWorldPosition(newPosition);
              this.instancedBackgrounds[i].splice(columnIndex, 1);
              this.instancedBackgrounds[i].unshift(instancedNode);
            }
          } else if (this.playerGridPosX < playerGridPosX) {
            // move the first column to the right
            var _columnIndex = 0;

            for (var _i = 0; _i < this.rows; _i++) {
              var _instancedNode = this.instancedBackgrounds[_i][_columnIndex];
              var _newPosition = _instancedNode.worldPosition;
              _newPosition.x += this.columns * this.nodeSize;

              _instancedNode.setWorldPosition(_newPosition);

              this.instancedBackgrounds[_i].splice(_columnIndex, 1);

              this.instancedBackgrounds[_i].push(_instancedNode);
            }
          }

          this.playerGridPosX = playerGridPosX;
        }

        tryTileY() {
          var playerGridPosY = Math.round((this.targetNode.worldPosition.y - (_crd && SCREEN_HALF_HEIGHT === void 0 ? (_reportPossibleCrUseOfSCREEN_HALF_HEIGHT({
            error: Error()
          }), SCREEN_HALF_HEIGHT) : SCREEN_HALF_HEIGHT)) / this.nodeSize);

          if (playerGridPosY < this.playerGridPosY) {
            // move the last row down
            var rowIndex = this.rows - 1;
            var nodesInRow = [];

            for (var i = 0; i < this.columns; i++) {
              var instancedNode = this.instancedBackgrounds[rowIndex][i];
              var newPosition = instancedNode.worldPosition;
              newPosition.y -= this.rows * this.nodeSize;
              instancedNode.setWorldPosition(newPosition);
              nodesInRow.push(instancedNode);
            }

            this.instancedBackgrounds.splice(rowIndex, 1);
            this.instancedBackgrounds.unshift(nodesInRow);
          } else if (this.playerGridPosY < playerGridPosY) {
            // move the first row up
            var _rowIndex = 0;
            var _nodesInRow = [];

            for (var _i2 = 0; _i2 < this.columns; _i2++) {
              var _instancedNode2 = this.instancedBackgrounds[_rowIndex][_i2];
              var _newPosition2 = _instancedNode2.worldPosition;
              _newPosition2.y += this.rows * this.nodeSize;

              _instancedNode2.setWorldPosition(_newPosition2);

              _nodesInRow.push(_instancedNode2);
            }

            this.instancedBackgrounds.splice(_rowIndex, 1);
            this.instancedBackgrounds.push(_nodesInRow);
          }

          this.playerGridPosY = playerGridPosY;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backgroundPrefabs", [_dec2], {
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
//# sourceMappingURL=88febeb09ae065eec95da9e2b9b185444662a189.js.map