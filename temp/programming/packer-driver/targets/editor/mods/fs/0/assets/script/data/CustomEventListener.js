System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _temp, _crd, ccclass, property, CustomEventListener;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("CustomEventListener", CustomEventListener = (_dec = ccclass('CustomEventListener'), _dec(_class = (_temp = _class2 = class CustomEventListener extends Component {
        static on(eventName, cb, target) {
          if (!this.handle[eventName]) {
            this.handle[eventName] = [];
          } // this 指向性问题，才能理解 target? 工作


          const data = {
            func: cb,
            target
          };
          this.handle[eventName].push(data);
        }

        static off(eventName, cb, target) {
          const list = this.handle[eventName];

          if (!list || list.length <= 0) {
            return;
          }

          for (let i = 0; i < list.length; i++) {
            const event = list[i];

            if (event.func === cb && (!target || target === event.target)) {
              list.splice(i, 1);
              break;
            }
          }
        }

        static dispatchEvent(eventName, ...args) {
          const list = this.handle[eventName];

          if (!list || list.length <= 0) {
            return;
          }

          for (let i = 0; i < list.length; i++) {
            const event = list[i];
            event.func.apply(event.target, args);
          }
        }

      }, _defineProperty(_class2, "handle", {}), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CustomEventListener.js.map