System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, instantiate, _dec, _class, _class2, _temp, _crd, ccclass, property, PoolManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8e755UvDD9FdprJkp4zNvP6", "PoolManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PoolManager", PoolManager = (_dec = ccclass('PoolManager'), _dec(_class = (_temp = _class2 = class PoolManager extends Component {
        static getNode(prefab, parent) {
          const name = prefab.name;
          let node = null;

          if (this.handle.has(name)) {
            var _this$handle$get;

            node = (_this$handle$get = this.handle.get(name)) === null || _this$handle$get === void 0 ? void 0 : _this$handle$get.pop();
          } else {
            node = instantiate(prefab);
          }

          node.setParent(parent);
          return node;
        }

        static setNode(target) {
          const name = target.name;

          if (this.handle.has(name)) {
            var _this$handle$get2;

            (_this$handle$get2 = this.handle.get(name)) === null || _this$handle$get2 === void 0 ? void 0 : _this$handle$get2.push(target);
          } else {
            this.handle.set(name, [target]);
          }
        }

      }, _defineProperty(_class2, "handle", new Map()), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PoolManager.js.map