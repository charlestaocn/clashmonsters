System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function shuffle(array) {
    var shuffledArray = [...array];

    for (var i = shuffledArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
  }

  _export("shuffle", shuffle);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4cd53HZVBlEDYgMNs4P4ylV", "ArrayUtils", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=374f1962dd78322c2ea9fb517de463b709cafce9.js.map