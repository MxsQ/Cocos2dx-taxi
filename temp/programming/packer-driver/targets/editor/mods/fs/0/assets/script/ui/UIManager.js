System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, find, loader, Prefab, instantiate, _dec, _class, _class2, _temp, _crd, ccclass, property, UIManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      find = _cc.find;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8bca22fs+lK4LQsqd7GRBx6", "UIManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIManager", UIManager = (_dec = ccclass('UIManager'), _dec(_class = (_temp = _class2 = class UIManager {
        static showDialog(name, cb, ...args) {
          const scriptName = name.substr(0, 1).toUpperCase() + name.substr(1);

          if (this._dictPanel.has(name)) {
            const panel = this._dictPanel.get(name);

            const parent = find('Canvas');
            panel.parent = parent;
            const comp = panel === null || panel === void 0 ? void 0 : panel.getComponent(scriptName);

            if (comp && comp['show']) {
              comp['show'].apply(comp, args);
            }

            if (cb) {
              cb();
            }

            return;
          }

          const path = `ui/${name}`;
          loader.loadRes(path, Prefab, (err, prefab) => {
            if (err) {
              console.warn(err);
              return;
            }

            const panel = instantiate(prefab);

            this._dictPanel.set(name, panel);

            const parent = find('Canvas');
            panel.parent = parent;
            const comp = panel.getComponent(scriptName);

            if (comp && comp['show']) {
              comp['show'].apply(comp, args);
            }

            if (cb) {
              cb();
            }
          });
        }

        static hidDialog(name, cb) {
          if (this._dictPanel.has(name)) {
            const panel = this._dictPanel.get(name);

            const scriptName = name.substr(0, 1).toUpperCase + name.substr(1);
            const comp = panel.getComponent(scriptName);
            panel.parent = null;

            if (comp && comp['hide']) {
              comp['hide'].apply(comp);
            }

            if (cb) {
              cb();
            }
          }
        }

      }, _defineProperty(_class2, "_dictPanel", new Map()), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIManager.js.map