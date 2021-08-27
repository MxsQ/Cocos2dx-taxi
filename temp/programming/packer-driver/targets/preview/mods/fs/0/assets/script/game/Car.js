System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../RoadPoint"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec3, RoadPoint, _dec, _class, _temp, _crd, ccclass, property, _tempVec, Car;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfRoadPoint(extras) {
    _reporterNs.report("RoadPoint", "../RoadPoint", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }, function (_RoadPoint) {
      RoadPoint = _RoadPoint.RoadPoint;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3799zYh6lABLC3tbwykreA", "Car", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      _tempVec = new Vec3();

      _export("Car", Car = (_dec = ccclass('Car'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Car, _Component);

        function Car() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_currentRoadPoint", null);

          _defineProperty(_assertThisInitialized(_this), "_pointA", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_pointB", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curSpeed", 0.1);

          _defineProperty(_assertThisInitialized(_this), "_isMoving", false);

          _defineProperty(_assertThisInitialized(_this), "_offset", new Vec3());

          return _this;
        }

        var _proto = Car.prototype;

        _proto.update = function update(dt) {
          var _this$_currentRoadPoi;

          if (this._isMoving) {
            this._offset.set(this.node.worldPosition);

            switch ((_this$_currentRoadPoi = this._currentRoadPoint) === null || _this$_currentRoadPoi === void 0 ? void 0 : _this$_currentRoadPoi.moveType) {
              case (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint).RoadMoveType.BEND:
                break;

              default:
                var z = this._pointB.z - this._pointA.z;

                if (z !== 0) {
                  if (z > 0) {
                    this._offset.z += this._curSpeed;

                    if (this._offset.z > this._pointB.z) {
                      this._offset.z = this._pointB.z;
                    }
                  } else {
                    this._offset.z -= this._curSpeed;

                    if (this._offset.z < this._pointB.z) {
                      this._offset.z = this._pointB.z;
                    }
                  }
                } else {
                  var x = this._pointB.x - this._pointA.x;

                  if (x > 0) {
                    this._offset.x += this._curSpeed;

                    if (this._offset.x > this._pointB.x) {
                      this._offset.x = this._pointB.x;
                    }
                  } else {
                    this._offset.x -= this._curSpeed;

                    if (this._offset.x < this._pointB.x) {
                      this._offset.x = this._pointB.x;
                    }
                  }
                }

                break;
            }

            this.node.setWorldPosition(this._offset);
            Vec3.subtract(_tempVec, this._pointB, this._offset);

            if (_tempVec.length() <= 0.01
            /** 这里是步长容错*/
            ) {
                this._arrivalStation();
              }
          }
        };

        _proto.startRunning = function startRunning() {
          if (this._currentRoadPoint) {
            this._isMoving = true;
          }
        };

        _proto.stopRunning = function stopRunning() {
          this._isMoving = false;
        };

        _proto.setEntry = function setEntry(entry) {
          this.node.setWorldPosition(entry.worldPosition);
          this._currentRoadPoint = entry.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
            error: Error()
          }), RoadPoint) : RoadPoint);

          if (!this._currentRoadPoint) {
            console.warn("there is no RoadPoint in " + entry.name);
            return;
          }

          this._pointA.set(entry.worldPosition);

          this._pointB.set(this._currentRoadPoint.nextStation.worldPosition); // 调整车子的视角方向


          var z = this._pointB.z - this._pointA.z;

          if (z !== 0) {
            this.node.eulerAngles = z < 0 ? new Vec3() : new Vec3(0, 180, 0);
          } else {
            var x = this._pointB.x - this._pointA.x;
            this.node.eulerAngles = x < 0 ? new Vec3(0, 90, 0) : new Vec3(0, 270, 0);
          }
        };

        _proto._arrivalStation = function _arrivalStation() {
          var _this$_currentRoadPoi2;

          console.log("doooooooo..........");

          this._pointA.set(this._pointB);

          this._currentRoadPoint = this._currentRoadPoint.nextStation.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
            error: Error()
          }), RoadPoint) : RoadPoint);

          if ((_this$_currentRoadPoi2 = this._currentRoadPoint) === null || _this$_currentRoadPoi2 === void 0 ? void 0 : _this$_currentRoadPoi2.nextStation) {
            this._pointB.set(this._currentRoadPoint.nextStation.worldPosition);
          } else {
            this._isMoving = false;
            this._currentRoadPoint = null;
          }
        };

        return Car;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Car.js.map