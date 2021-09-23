System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../data/Constants", "../data/CustomEventListener", "../data/GameData"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Constants, CustomEventListener, RunTimeData, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, MainUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomEventListener(extras) {
    _reporterNs.report("CustomEventListener", "../data/CustomEventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRunTimeData(extras) {
    _reporterNs.report("RunTimeData", "../data/GameData", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_dataConstants) {
      Constants = _dataConstants.Constants;
    }, function (_dataCustomEventListener) {
      CustomEventListener = _dataCustomEventListener.CustomEventListener;
    }, function (_dataGameData) {
      RunTimeData = _dataGameData.RunTimeData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0567clBEcZEEoO026gegw8j", "MainUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainUI", MainUI = (_dec = ccclass('MainUI'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = class MainUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "moneyLabel", _descriptor, this);

          _defineProperty(this, "_clickTime", 0);

          _defineProperty(this, "_time", 0);
        }

        clickStart() {
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.GAME_START);
        }

        onEnable() {
          this.moneyLabel.string = `${(_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance().totolMoney}`;
        }

        clickDebug() {
          const time = Date.now();

          if (time - this._time <= 200) {
            this._clickTime++;
          } else {
            this._clickTime = 0;
          }

          this._time = time;

          if (this._clickTime > 3) {
            cc.sys.localStorage.removeItem((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).GameConfigID);
            this._clickTime = 0;
            console.log('clear cache');
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "moneyLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MainUI.js.map