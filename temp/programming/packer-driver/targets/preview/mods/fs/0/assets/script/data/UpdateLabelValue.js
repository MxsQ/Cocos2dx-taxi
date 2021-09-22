System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Label, _dec, _class, _temp, _crd, ccclass, property, UpdateLabelValue;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("UpdateLabelValue", UpdateLabelValue = (_dec = ccclass('UpdateLabelValue'), _dec(_class = (_temp = /*#__PURE__*/function (_Label) {
        _inheritsLoose(UpdateLabelValue, _Label);

        function UpdateLabelValue() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Label.call.apply(_Label, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_startVal", 0);

          _defineProperty(_assertThisInitialized(_this), "_endVal", 0);

          _defineProperty(_assertThisInitialized(_this), "_diffVal", 0);

          _defineProperty(_assertThisInitialized(_this), "_currTime", 0);

          _defineProperty(_assertThisInitialized(_this), "_changeTime", 0);

          _defineProperty(_assertThisInitialized(_this), "_isPlaying", false);

          return _this;
        }

        var _proto = UpdateLabelValue.prototype;

        _proto.playUpdateValue = function playUpdateValue(start, end, changeTime) {
          this._startVal = start;
          this._endVal = end;
          this._diffVal = this._endVal - this._startVal;
          this._currTime = 0;
          this._changeTime = changeTime;

          if (changeTime === 0) {
            this._string = "" + this._endVal;
          }

          this._isPlaying = true;
          this.string = "" + this._endVal;
        };

        _proto.update = function update(dt) {
          if (!this._isPlaying) {
            return;
          }

          if (this._currTime < this._changeTime) {
            this._currTime += dt;
            var targetVal = this._startVal + Math.floor(this._currTime / this._changeTime * this._diffVal);
            this.string = "" + targetVal;
            return;
          }

          this.string = "" + this._endVal;
          this._isPlaying = false;
        };

        return UpdateLabelValue;
      }(Label), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UpdateLabelValue.js.map