System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _temp, _crd, ccclass, property, CustomEventListener;

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

      _cclegacy._RF.push({}, "d028dPqeuNI9YwiZ7xK9Wo4", "CustomEventListener", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("CustomEventListener", CustomEventListener = (_dec = ccclass('CustomEventListener'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CustomEventListener, _Component);

        function CustomEventListener() {
          return _Component.apply(this, arguments) || this;
        }

        CustomEventListener.on = function on(eventName, cb, target) {
          if (!this.handle[eventName]) {
            this.handle[eventName] = [];
          } // this 指向性问题，才能理解 target? 工作


          var data = {
            func: cb,
            target: target
          };
          this.handle[eventName].push(data);
        };

        CustomEventListener.off = function off(eventName, cb, target) {
          var list = this.handle[eventName];

          if (!list || list.length <= 0) {
            return;
          }

          for (var i = 0; i < list.length; i++) {
            var event = list[i];

            if (event.func === cb && (!target || target === event.target)) {
              list.splice(i, 1);
              break;
            }
          }
        };

        CustomEventListener.dispatchEvent = function dispatchEvent(eventName) {
          var list = this.handle[eventName];

          if (!list || list.length <= 0) {
            return;
          }

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          for (var i = 0; i < list.length; i++) {
            var event = list[i];
            event.func.apply(event.target, args);
          }
        };

        return CustomEventListener;
      }(Component), _defineProperty(_class2, "handle", {}), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CustomEventListener.js.map