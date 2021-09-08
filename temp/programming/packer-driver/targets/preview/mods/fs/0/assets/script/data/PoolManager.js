System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, instantiate, _dec, _class, _class2, _temp, _crd, ccclass, property, PoolManager;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PoolManager", PoolManager = (_dec = ccclass('PoolManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PoolManager, _Component);

        function PoolManager() {
          return _Component.apply(this, arguments) || this;
        }

        PoolManager.getNode = function getNode(prefab, parent) {
          var name = prefab.name;
          var node = null;

          if (this.handle.has(name)) {
            var _this$handle$get;

            node = (_this$handle$get = this.handle.get(name)) === null || _this$handle$get === void 0 ? void 0 : _this$handle$get.pop();
          } else {
            node = instantiate(prefab);
          }

          node.setParent(parent);
          return node;
        };

        PoolManager.setNode = function setNode(target) {
          var name = target.name;
          target.parent = null;

          if (this.handle.has(name)) {
            var _this$handle$get2;

            (_this$handle$get2 = this.handle.get(name)) === null || _this$handle$get2 === void 0 ? void 0 : _this$handle$get2.push(target);
          } else {
            this.handle.set(name, [target]);
          }
        };

        return PoolManager;
      }(Component), _defineProperty(_class2, "handle", new Map()), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PoolManager.js.map