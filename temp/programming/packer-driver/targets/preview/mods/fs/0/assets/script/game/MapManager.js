System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./GameMap"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, GameMap, _dec, _class, _temp, _crd, ccclass, property, MapManager;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfGameMap(extras) {
    _reporterNs.report("GameMap", "./GameMap", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_GameMap) {
      GameMap = _GameMap.GameMap;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2516GHBjFPmL6Gzb9sYFFY", "MapManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MapManager", MapManager = (_dec = ccclass('MapManager'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MapManager, _Component);

        function MapManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "curPath", []);

          return _this;
        }

        var _proto = MapManager.prototype;

        _proto.resetMap = function resetMap() {
          var curMap = this.node.children[0].getComponent(_crd && GameMap === void 0 ? (_reportPossibleCrUseOfGameMap({
            error: Error()
          }), GameMap) : GameMap);
          this.curPath = curMap.path;
        };

        return MapManager;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapManager.js.map