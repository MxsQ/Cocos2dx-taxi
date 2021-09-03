System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./CarManager", "./MapManager"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, CarManager, MapManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, GameCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCarManager(extras) {
    _reporterNs.report("CarManager", "./CarManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "./MapManager", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_CarManager) {
      CarManager = _CarManager.CarManager;
    }, function (_MapManager) {
      MapManager = _MapManager.MapManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a034EDSH5IcJ6nk7+n1DG/", "GameCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCtrl", GameCtrl = (_dec = ccclass('GameCtrl'), _dec2 = property({
        type: _crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
          error: Error()
        }), MapManager) : MapManager
      }), _dec3 = property({
        type: _crd && CarManager === void 0 ? (_reportPossibleCrUseOfCarManager({
          error: Error()
        }), CarManager) : CarManager
      }), _dec(_class = (_class2 = (_temp = class GameCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mapManager", _descriptor, this);

          _initializerDefineProperty(this, "carManager", _descriptor2, this);
        }

        onLoad() {
          this.mapManager.resetMap();
          this.carManager.resetCars(this.mapManager.curPath);
        }

        start() {
          this.node.on(Node.EventType.TOUCH_START, this._touchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this._touchEnd, this);
        }

        _touchStart(touch, event) {
          var _this$carManager;

          (_this$carManager = this.carManager) === null || _this$carManager === void 0 ? void 0 : _this$carManager.controMoving();
        }

        _touchEnd(touch, event) {
          var _this$carManager2;

          (_this$carManager2 = this.carManager) === null || _this$carManager2 === void 0 ? void 0 : _this$carManager2.controMoving(false);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mapManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "carManager", [_dec3], {
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
//# sourceMappingURL=GameCtrl.js.map