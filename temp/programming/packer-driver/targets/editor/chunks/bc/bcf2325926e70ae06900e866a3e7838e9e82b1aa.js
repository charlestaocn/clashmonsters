System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function shuffle(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
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
//# sourceMappingURL=bcf2325926e70ae06900e866a3e7838e9e82b1aa.js.map