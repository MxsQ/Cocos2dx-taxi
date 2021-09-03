System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _temp, _crd, ccclass, property, EventName, CustomerState, Constants;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "976abvnKLRJ1pZlf61UoxEu", "Constants", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (EventName) {
        EventName["GREETING"] = "greeting";
        EventName["GOODBYE"] = "goodbye";
        EventName["FINISHID_WALK"] = "finished-walk";
        EventName["STARTBRA_KING"] = "start-braking";
        EventName["END_BRANING"] = "end-braking";
        EventName["SHOW_COIN"] = "show-coin";
      })(EventName || (EventName = {}));

      (function (CustomerState) {
        CustomerState[CustomerState["NONE"] = 0] = "NONE";
        CustomerState[CustomerState["GREETING"] = 1] = "GREETING";
        CustomerState[CustomerState["GOODBYE"] = 2] = "GOODBYE";
      })(CustomerState || (CustomerState = {}));

      _export("Constants", Constants = (_dec = ccclass('Constants'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Constants, _Component);

        function Constants() {
          return _Component.apply(this, arguments) || this;
        }

        return Constants;
      }(Component), _defineProperty(_class2, "EventName", EventName), _defineProperty(_class2, "CustomerState", CustomerState), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Constants.js.map