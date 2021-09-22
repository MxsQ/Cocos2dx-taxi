System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Label, _dec, _class, _temp, _crd, ccclass, property, UpdateLabelValue;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cfc8aKd0cZAr6sTFNANW+cv", "UpdateLabelValue", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UpdateLabelValue", UpdateLabelValue = (_dec = ccclass('UpdateLabelValue'), _dec(_class = (_temp = class UpdateLabelValue extends Label {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_startVal", 0);

          _defineProperty(this, "_endVal", 0);

          _defineProperty(this, "_diffVal", 0);

          _defineProperty(this, "_currTime", 0);

          _defineProperty(this, "_changeTime", 0);

          _defineProperty(this, "_isPlaying", false);
        }

        playUpdateValue(start, end, changeTime) {
          this._startVal = start;
          this._endVal = end;
          this._diffVal = this._endVal - this._startVal;
          this._currTime = 0;
          this._changeTime = changeTime;

          if (changeTime === 0) {
            this._string = `${this._endVal}`;
          }

          this._isPlaying = true;
          this.string = `${this._endVal}`;
        }

        update(dt) {
          if (!this._isPlaying) {
            return;
          }

          if (this._currTime < this._changeTime) {
            this._currTime += dt;
            const targetVal = this._startVal + Math.floor(this._currTime / this._changeTime * this._diffVal);
            this.string = `${targetVal}`;
            return;
          }

          this.string = `${this._endVal}`;
          this._isPlaying = false;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UpdateLabelValue.js.map