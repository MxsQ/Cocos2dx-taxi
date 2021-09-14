System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../data/Constants", "../data/CustomEventListener"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Constants, CustomEventListener, _dec, _class, _crd, ccclass, property, MainUI;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomEventListener(extras) {
    _reporterNs.report("CustomEventListener", "../data/CustomEventListener", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_dataConstants) {
      Constants = _dataConstants.Constants;
    }, function (_dataCustomEventListener) {
      CustomEventListener = _dataCustomEventListener.CustomEventListener;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0567clBEcZEEoO026gegw8j", "MainUI", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainUI", MainUI = (_dec = ccclass('MainUI'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainUI, _Component);

        function MainUI() {
          return _Component.apply(this, arguments) || this;
        }

        var _proto = MainUI.prototype;

        _proto.clickStart = function clickStart() {
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.GAME_START);
        };

        return MainUI;
      }(Component)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MainUI.js.map