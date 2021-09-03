System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, Enum, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _temp, _crd, ccclass, property, ROAD_POINT_TYPE, ROAD_MOVE_TYPE, RoadPoint;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Enum = _cc.Enum;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "125ceo0iZ5Dboj1CQCshiJI", "RoadPoint", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      (function (ROAD_POINT_TYPE) {
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["NORMAL"] = 1] = "NORMAL";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["START"] = 2] = "START";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["GREETING"] = 3] = "GREETING";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["GOODBYE"] = 4] = "GOODBYE";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["END"] = 5] = "END";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["AI_START"] = 6] = "AI_START";
      })(ROAD_POINT_TYPE || (ROAD_POINT_TYPE = {}));

      Enum(ROAD_POINT_TYPE);

      (function (ROAD_MOVE_TYPE) {
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["LINE"] = 1] = "LINE";
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["CURVE"] = 2] = "CURVE";
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["BEND"] = 3] = "BEND";
      })(ROAD_MOVE_TYPE || (ROAD_MOVE_TYPE = {}));

      Enum(ROAD_MOVE_TYPE);

      _export("RoadPoint", RoadPoint = (_dec = ccclass('RoadPoint'), _dec2 = property({
        type: ROAD_POINT_TYPE
      }), _dec3 = property({
        type: Node,
        visible: function () {
          return this.type !== ROAD_POINT_TYPE.END;
        }
      }), _dec4 = property({
        type: ROAD_MOVE_TYPE,
        visible: function () {
          return this.type !== ROAD_POINT_TYPE.END;
        }
      }), _dec5 = property({
        visible: function () {
          return this.type !== ROAD_POINT_TYPE.END && (this.moveType === ROAD_MOVE_TYPE.CURVE || this.moveType === ROAD_MOVE_TYPE.BEND);
        }
      }), _dec6 = property({
        type: Vec3,
        visible: function () {
          return this.type === ROAD_POINT_TYPE.GREETING || this.type === ROAD_POINT_TYPE.GOODBYE;
        }
      }), _dec7 = property({
        visible: function () {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec8 = property({
        visible: function () {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec9 = property({
        visible: function () {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec10 = property({
        visible: function () {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec(_class = (_class2 = (_temp = _class3 = class RoadPoint extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "type", _descriptor, this);

          _initializerDefineProperty(this, "nextStation", _descriptor2, this);

          _initializerDefineProperty(this, "moveType", _descriptor3, this);

          _initializerDefineProperty(this, "clockwise", _descriptor4, this);

          _initializerDefineProperty(this, "direction", _descriptor5, this);

          _initializerDefineProperty(this, "interval", _descriptor6, this);

          _initializerDefineProperty(this, "delayTime", _descriptor7, this);

          _initializerDefineProperty(this, "speed", _descriptor8, this);

          _initializerDefineProperty(this, "cars", _descriptor9, this);
        }

      }, _defineProperty(_class3, "RoadPointType", ROAD_POINT_TYPE), _defineProperty(_class3, "RoadMoveType", ROAD_MOVE_TYPE), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ROAD_POINT_TYPE.NORMAL;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nextStation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveType", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ROAD_MOVE_TYPE.LINE;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "clockwise", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Vec3(1, 0, 0);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "delayTime", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.05;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cars", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "201";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RoadPoint.js.map