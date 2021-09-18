System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _class2, _temp, _crd, ccclass, property, RunTimeData;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b08fwDbLBCDJMGTfV3AkaK", "GameData", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RunTimeData", RunTimeData = (_dec = ccclass('RunTimeData'), _dec(_class = (_temp = _class2 = class RunTimeData {
        constructor() {
          _defineProperty(this, "curProgress", 0);

          _defineProperty(this, "maxProgress", 0);

          _defineProperty(this, "isTakeOver", true);
        }

        static instance() {
          if (!this._instance) {
            this._instance = new RunTimeData();
          }

          return this._instance;
        }

      }, _defineProperty(_class2, "_instance", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameData.js.map