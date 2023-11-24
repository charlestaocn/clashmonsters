System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function formatString(text, params) {
    let textWithParams = text;

    for (let i = 0; i < params.length; i++) {
      textWithParams = textWithParams.replace(`{${i}}`, params[i]);
    }

    return textWithParams;
  }

  _export("formatString", formatString);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ceda7TLix5L05z7C78DFfxA", "StringUtils", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=22468ed6ce295be0bef0a3d3c1e291257db4d6df.js.map