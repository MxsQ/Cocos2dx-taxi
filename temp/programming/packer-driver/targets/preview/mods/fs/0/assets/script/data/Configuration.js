System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./Constants"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Constants, _dec, _class, _class2, _temp, _crd, ccclass, property, Configuration;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./Constants", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_Constants) {
      Constants = _Constants.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44d01aAk4RJgbB4nh4B3lfh", "Configuration", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Configuration", Configuration = (_dec = ccclass('Configuration'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Configuration, _Component);

        function Configuration() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_jsonData", {});

          _defineProperty(_assertThisInitialized(_this), "_markSave", false);

          return _this;
        }

        Configuration.instance = function instance() {
          if (!this._instance) {
            this._instance = new Configuration();
          }

          return this._instance;
        };

        var _proto = Configuration.prototype;

        _proto.init = function init() {
          var localStorage = cc.sys.localStorage.getItem((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GameConfigID);

          if (localStorage) {
            this._jsonData = JSON.parse(localStorage);
          }

          setInterval(this._scheduleSave, 500);
        };

        _proto.getConfigData = function getConfigData(key) {
          var data = this._jsonData[key];
          return data || '';
        };

        _proto.setConfigData = function setConfigData(key, value) {
          this._jsonData[key] = value;
          this._markSave = true;
        };

        _proto._scheduleSave = function _scheduleSave() {
          if (!this._markSave) {
            return;
          }

          var data = JSON.stringify(this._jsonData);
          cc.sys.localStorage.setItem((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GameConfigID, data);
          this._markSave = false;
        };

        return Configuration;
      }(Component), _defineProperty(_class2, "_instance", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Configuration.js.map