System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../data/Constants", "../data/CustomEventListener", "../RoadPoint", "./AudioManager"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec3, ParticleSystemComponent, Constants, CustomEventListener, RoadPoint, AudioManager, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, _tempVec, EventName, Car;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomEventListener(extras) {
    _reporterNs.report("CustomEventListener", "../data/CustomEventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoadPoint(extras) {
    _reporterNs.report("RoadPoint", "../RoadPoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
    }, function (_dataConstants) {
      Constants = _dataConstants.Constants;
    }, function (_dataCustomEventListener) {
      CustomEventListener = _dataCustomEventListener.CustomEventListener;
    }, function (_RoadPoint) {
      RoadPoint = _RoadPoint.RoadPoint;
    }, function (_AudioManager) {
      AudioManager = _AudioManager.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3799zYh6lABLC3tbwykreA", "Car", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      _tempVec = new Vec3();
      EventName = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
        error: Error()
      }), Constants) : Constants).EventName;

      _export("Car", Car = (_dec = ccclass('Car'), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Car, _Component);

        function Car() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "maxSpeed", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_currentRoadPoint", null);

          _defineProperty(_assertThisInitialized(_this), "_pointA", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_pointB", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_curSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "_isMoving", false);

          _defineProperty(_assertThisInitialized(_this), "_offset", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_originRotation", 0);

          _defineProperty(_assertThisInitialized(_this), "_targetRotation", 0);

          _defineProperty(_assertThisInitialized(_this), "_centerPoint", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_rotMeasure", 0);

          _defineProperty(_assertThisInitialized(_this), "_acceleration", 0.2);

          _defineProperty(_assertThisInitialized(_this), "_isMain", false);

          _defineProperty(_assertThisInitialized(_this), "_isInOrder", false);

          _defineProperty(_assertThisInitialized(_this), "_isBreaking", false);

          _defineProperty(_assertThisInitialized(_this), "_gas", null);

          _defineProperty(_assertThisInitialized(_this), "_overCD", null);

          return _this;
        }

        var _proto = Car.prototype;

        _proto.start = function start() {
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on(EventName.FINISHID_WALK, this._finishedWalk, this);
        };

        _proto.update = function update(dt) {
          var _this$_currentRoadPoi;

          if (!this._isMoving || this._isInOrder) {
            return;
          }

          this._offset.set(this.node.worldPosition);

          this._curSpeed += this._acceleration * dt;

          if (this._curSpeed > this.maxSpeed) {
            this._curSpeed = this.maxSpeed;
          }

          if (this._curSpeed <= 0.001) {
            this._isMoving = false;

            if (this._isBreaking) {
              this._isBreaking = false;
              (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
                error: Error()
              }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.END_BRANING);
            }
          }

          switch ((_this$_currentRoadPoi = this._currentRoadPoint) === null || _this$_currentRoadPoi === void 0 ? void 0 : _this$_currentRoadPoi.moveType) {
            case (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
              error: Error()
            }), RoadPoint) : RoadPoint).RoadMoveType.BEND:
              var offestRotation = this._targetRotation - this._originRotation;

              var currentRotation = this._conversion(this.node.eulerAngles.y);

              var nextStation = currentRotation - this._originRotation + this._curSpeed * this._rotMeasure * (this._targetRotation > this._originRotation ? 1 : -1);

              if (Math.abs(nextStation) > Math.abs(offestRotation)) {
                nextStation = offestRotation;
              }

              var target = nextStation + this._originRotation;

              _tempVec.set(0, target, 0);

              this.node.eulerAngles = _tempVec; // ????????????????????????????????????????????????
              // const sin = Math.sin(nextStation * Math.PI / 180);
              // const cos = Math.cos(nextStation * Math.PI / 180);
              // const xLength = this._pointA.x - this._centerPoint.x;
              // const zLength = this._pointA.z - this._centerPoint.z;
              // this._offset.set(xLength * cos + zLength * sin + this._centerPoint.x,
              //     0,
              //     -xLength * sin + zLength * cos + this._centerPoint.z)

              Vec3.rotateY(this._offset, this._pointA, this._centerPoint, nextStation * Math.PI / 180);
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
          console.log(_tempVec.length());

          if (_tempVec.length() <= 0.01
          /** ?????????????????????*/
          ) {
              this._arrivalStation();
            }
        };

        _proto.startRunning = function startRunning() {
          if (this._currentRoadPoint) {
            this._isMoving = true;
            this._curSpeed = 0;
            this._acceleration = 0.2;
          }
        };

        _proto.stopRunning = function stopRunning() {
          this._acceleration = -0.3;
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.STARTBRA_KING, this.node);
          this._isBreaking = true;
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).AudioSource.STOP);
        };

        _proto.moveAfterFinished = function moveAfterFinished(cd) {
          this._overCD = cd;
        };

        _proto.setEntry = function setEntry(entry, isMain) {
          if (isMain === void 0) {
            isMain = false;
          }

          this.node.setWorldPosition(entry.worldPosition);
          this._currentRoadPoint = entry.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
            error: Error()
          }), RoadPoint) : RoadPoint);
          this._isMain = isMain;

          if (!this._currentRoadPoint) {
            console.warn("there is no RoadPoint in " + entry.name);
            return;
          }

          this._pointA.set(entry.worldPosition);

          this._pointB.set(this._currentRoadPoint.nextStation.worldPosition); // ???????????????????????????


          var z = this._pointB.z - this._pointA.z;

          if (z !== 0) {
            this.node.eulerAngles = z < 0 ? new Vec3() : new Vec3(0, 180, 0);
          } else {
            var x = this._pointB.x - this._pointA.x;
            this.node.eulerAngles = x < 0 ? new Vec3(0, 90, 0) : new Vec3(0, 270, 0);
          }

          if (this._isMain) {
            var gasNode = this.node.getChildByName('gas');
            this._gas = gasNode === null || gasNode === void 0 ? void 0 : gasNode.getComponent(ParticleSystemComponent);

            this._gas.play();
          }
        };

        _proto._arrivalStation = function _arrivalStation() {
          var _this$_currentRoadPoi2;

          console.log("??????");

          this._pointA.set(this._pointB);

          this._currentRoadPoint = this._currentRoadPoint.nextStation.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
            error: Error()
          }), RoadPoint) : RoadPoint);

          if ((_this$_currentRoadPoi2 = this._currentRoadPoint) === null || _this$_currentRoadPoi2 === void 0 ? void 0 : _this$_currentRoadPoi2.nextStation) {
            this._pointB.set(this._currentRoadPoint.nextStation.worldPosition);

            if (this._isMain) {
              if (this._isBreaking) {
                this._isBreaking = false;
                (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
                  error: Error()
                }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.END_BRANING);
              }

              if (this._currentRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint).RoadPointType.GREETING) {
                // ?????????  
                this._greetingCustomer();
              } else if (this._currentRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint).RoadPointType.GOODBYE) {
                // ?????????
                this._takingCustomer();
              } else if (this._currentRoadPoint.type == (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint).RoadPointType.END) {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).AudioSource.WIN);
              }
            } // ????????????


            if (this._currentRoadPoint.moveType === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
              error: Error()
            }), RoadPoint) : RoadPoint).RoadMoveType.BEND) {
              if (this._currentRoadPoint.clockwise) {
                this._originRotation = this._conversion(this.node.eulerAngles.y);
                this._targetRotation = this._originRotation - 90;

                if (this._pointB.z < this._pointA.z && this._pointB.x > this._pointA.x || this._pointB.z > this._pointA.z && this._pointB.x < this._pointB.x) {
                  this._centerPoint.set(this._pointB.x, 0, this._pointA.z);
                } else {
                  this._centerPoint.set(this._pointA.x, 0, this._pointB.z);
                }
              } else {
                this._originRotation = this._conversion(this.node.eulerAngles.y);
                this._targetRotation = this._originRotation + 90;

                if (this._pointB.z > this._pointA.z && this._pointB.x > this._pointA.x || this._pointB.z < this._pointA.z && this._pointB.x < this._pointB.x) {
                  this._centerPoint.set(this._pointB.x, 0, this._pointA.z);
                } else {
                  this._centerPoint.set(this._pointA.x, 0, this._pointB.z);
                }
              }

              Vec3.subtract(_tempVec, this._pointA, this._centerPoint);

              var r = _tempVec.length();

              this._rotMeasure = 90 / (Math.PI * r / 2);
            }
          } else {
            this._isMoving = false;
            this._currentRoadPoint = null;

            if (this._overCD) {
              this._overCD(this);

              this._overCD = null;
            }
          }
        };

        _proto._greetingCustomer = function _greetingCustomer() {
          var _this$_currentRoadPoi3;

          this._isInOrder = true;
          this._curSpeed = 0;

          this._gas.stop();

          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GREETING, this.node.worldPosition, (_this$_currentRoadPoi3 = this._currentRoadPoint) === null || _this$_currentRoadPoi3 === void 0 ? void 0 : _this$_currentRoadPoi3.direction);
        };

        _proto._takingCustomer = function _takingCustomer() {
          var _this$_currentRoadPoi4;

          this._isInOrder = true;
          this._curSpeed = 0;

          this._gas.stop();

          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GOODBYE, this.node.worldPosition, (_this$_currentRoadPoi4 = this._currentRoadPoint) === null || _this$_currentRoadPoi4 === void 0 ? void 0 : _this$_currentRoadPoi4.direction);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.SHOW_COIN, this.node.worldPosition);
        };

        _proto._finishedWalk = function _finishedWalk() {
          this._gas.play();

          this._isInOrder = false;
        };

        _proto._conversion = function _conversion(value) {
          var a = value;

          if (a <= 0) {
            a += 360;
          }

          return a;
        };

        return Car;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maxSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Car.js.map