System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./Constants"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Constants, _dec, _class, _class2, _temp, _crd, ccclass, property, Configuration;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("Configuration", Configuration = (_dec = ccclass('Configuration'), _dec(_class = (_temp = _class2 = class Configuration extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_jsonData", {});

          _defineProperty(this, "_markSave", false);
        }

        static instance() {
          if (!this._instance) {
            this._instance = new Configuration();
          }

          return this._instance;
        }

        init() {
          const localStorage = cc.sys.localStorage.getItem((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GameConfigID);

          if (localStorage) {
            this._jsonData = JSON.parse(localStorage);
          }

          setInterval(this._scheduleSave, 500);
        }

        getConfigData(key) {
          const data = this._jsonData[key];
          return data || '';
        }

        setConfigData(key, value) {
          this._jsonData[key] = value;
          this._markSave = true;
        }

        _scheduleSave() {
          if (!this._markSave) {
            return;
          }

          const data = JSON.stringify(this._jsonData);
          cc.sys.localStorage.setItem((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).GameConfigID, data);
          this._markSave = false;
        }

      }, _defineProperty(_class2, "_instance", null), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Configuration.js.map