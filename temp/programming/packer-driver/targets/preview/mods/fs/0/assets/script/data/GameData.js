System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./Configuration", "./Constants"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Configuration, Constants, _dec, _class, _class2, _temp, _dec2, _class3, _class4, _temp2, _crd, ccclass, property, RunTimeData, PlayerData;

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfConfiguration(extras) {
    _reporterNs.report("Configuration", "./Configuration", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./Constants", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_Configuration) {
      Configuration = _Configuration.Configuration;
    }, function (_Constants) {
      Constants = _Constants.Constants;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b08fwDbLBCDJMGTfV3AkaK", "GameData", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("RunTimeData", RunTimeData = (_dec = ccclass('RunTimeData'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        RunTimeData.instance = function instance() {
          if (!this._instance) {
            this._instance = new RunTimeData();
          }

          return this._instance;
        };

        function RunTimeData() {
          _defineProperty(this, "playerData", null);

          _defineProperty(this, "curProgress", 0);

          _defineProperty(this, "maxProgress", 0);

          _defineProperty(this, "isTakeOver", true);

          _defineProperty(this, "money", 0);

          this.playerData = PlayerData.instance();
        }

        _createClass(RunTimeData, [{
          key: "currLevel",
          get: function get() {
            return this.playerData.playerInfo.level;
          }
        }, {
          key: "totolMoney",
          get: function get() {
            return this.playerData.playerInfo.money;
          }
        }]);

        return RunTimeData;
      }(), _defineProperty(_class2, "_instance", null), _temp)) || _class));

      _export("PlayerData", PlayerData = (_dec2 = ccclass('PlayerData'), _dec2(_class3 = (_temp2 = _class4 = /*#__PURE__*/function () {
        function PlayerData() {
          _defineProperty(this, "playerInfo", {
            money: 0,
            level: 1
          });
        }

        PlayerData.instance = function instance() {
          if (!this._instance) {
            this._instance = new PlayerData();
          }

          return this._instance;
        };

        var _proto = PlayerData.prototype;

        _proto.loadFromCache = function loadFromCache() {
          var info = (_crd && Configuration === void 0 ? (_reportPossibleCrUseOfConfiguration({
            error: Error()
          }), Configuration) : Configuration).instance().getConfigData((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PlayerConfigID);

          if (info) {
            this.playerInfo = JSON.parse(info);
          }
        };

        _proto.passLevel = function passLevel(rewarMoney) {
          this.playerInfo.level++;
          this.playerInfo.money += rewarMoney;
          this.savePlayerInfoToCache();
        };

        _proto.savePlayerInfoToCache = function savePlayerInfoToCache() {
          var data = JSON.stringify(this.playerInfo);
          (_crd && Configuration === void 0 ? (_reportPossibleCrUseOfConfiguration({
            error: Error()
          }), Configuration) : Configuration).instance().setConfigData((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).PlayerConfigID, data);
        };

        return PlayerData;
      }(), _defineProperty(_class4, "_instance", null), _temp2)) || _class3));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameData.js.map