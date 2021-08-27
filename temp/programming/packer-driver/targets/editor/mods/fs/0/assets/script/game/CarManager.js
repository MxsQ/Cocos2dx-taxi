System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./Car"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Car, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CarManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCar(extras) {
    _reporterNs.report("Car", "./Car", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_Car) {
      Car = _Car.Car;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50874cNElZD3rsAjf0qHpM9", "CarManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CarManager", CarManager = (_dec = ccclass('CarManager'), _dec2 = property({
        type: _crd && Car === void 0 ? (_reportPossibleCrUseOfCar({
          error: Error()
        }), Car) : Car
      }), _dec(_class = (_class2 = (_temp = class CarManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mainCar", _descriptor, this);
        }

        resetCars(points) {
          if (points.length <= 0) {
            console.warn("there is no points in this map");
            return;
          } // this.mainCar = this.node.children[0].getComponent(Car);


          this._createMainCar(points[0]);
        }

        controMoving(isRunning = true) {
          if (isRunning) {
            var _this$mainCar;

            (_this$mainCar = this.mainCar) === null || _this$mainCar === void 0 ? void 0 : _this$mainCar.startRunning();
          } else {
            var _this$mainCar2;

            (_this$mainCar2 = this.mainCar) === null || _this$mainCar2 === void 0 ? void 0 : _this$mainCar2.stopRunning();
          }
        }

        _createMainCar(points) {
          this.mainCar.setEntry(points);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCar", [_dec2], {
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
//# sourceMappingURL=CarManager.js.map