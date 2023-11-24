System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Signal, _dec, _class, _crd, ccclass, property, UIButton;

  function _reportPossibleCrUseOfISignal(extras) {
    _reporterNs.report("ISignal", "../../EventSystem/ISignal", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignal(extras) {
    _reporterNs.report("Signal", "../../EventSystem/Signal", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Signal = _unresolved_2.Signal;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55e5f5nQ8dHiL5fPWjgdXbH", "UIButton", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'NodeEventType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIButton", UIButton = (_dec = ccclass("UIButton"), _dec(_class = class UIButton extends Component {
        constructor() {
          super(...arguments);
          this.interactedEvent = new (_crd && Signal === void 0 ? (_reportPossibleCrUseOfSignal({
            error: Error()
          }), Signal) : Signal)();
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this.interact, this);
        }

        get InteractedEvent() {
          return this.interactedEvent;
        }

        interact() {
          console.log("interact");
          this.interactedEvent.trigger(this);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2d289d843f012322f68dd8f48b5b690eb5c6b5e1.js.map