System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./GameMap"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, GameMap, _dec, _class, _temp, _crd, ccclass, property, MapManager;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("MapManager", MapManager = (_dec = ccclass('MapManager'), _dec(_class = (_temp = class MapManager extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "curPath", []);

          _defineProperty(this, "maxProgress", 0);

          _defineProperty(this, "_curMap", null);
        }

        resetMap() {
          this._curMap = this.node.children[0];

          const curMap = this._curMap.getComponent(_crd && GameMap === void 0 ? (_reportPossibleCrUseOfGameMap({
            error: Error()
          }), GameMap) : GameMap);

          this.curPath = curMap.path;
          this.maxProgress = curMap === null || curMap === void 0 ? void 0 : curMap.maxProgress;
        }

        recycle() {
          if (this._curMap) {
            this._curMap.destroy();

            this._curMap = null;
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MapManager.js.map