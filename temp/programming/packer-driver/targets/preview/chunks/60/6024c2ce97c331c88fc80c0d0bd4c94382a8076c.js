System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function formatString(text, params) {
    var textWithParams = text;

    for (var i = 0; i < params.length; i++) {
      textWithParams = textWithParams.replace("{" + i + "}", params[i]);
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
//# sourceMappingURL=6024c2ce97c331c88fc80c0d0bd4c94382a8076c.js.map