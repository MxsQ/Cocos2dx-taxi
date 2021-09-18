System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../data/Constants", "../data/CustomEventListener", "../data/GameData", "../RoadPoint", "./AudioManager"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec3, ParticleSystemComponent, BoxColliderComponent, RigidBodyComponent, Constants, CustomEventListener, RunTimeData, RoadPoint, AudioManager, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, _tempVec, EventName, Car;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomEventListener(extras) {
    _reporterNs.report("CustomEventListener", "../data/CustomEventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRunTimeData(extras) {
    _reporterNs.report("RunTimeData", "../data/GameData", _context.meta, extras);
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
      BoxColliderComponent = _cc.BoxColliderComponent;
      RigidBodyComponent = _cc.RigidBodyComponent;
    }, function (_dataConstants) {
      Constants = _dataConstants.Constants;
    }, function (_dataCustomEventListener) {
      CustomEventListener = _dataCustomEventListener.CustomEventListener;
    }, function (_dataGameData) {
      RunTimeData = _dataGameData.RunTimeData;
    }, function (_RoadPoint) {
      RoadPoint = _RoadPoint.RoadPoint;
    }, function (_AudioManager) {
      AudioManager = _AudioManager.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3799zYh6lABLC3tbwykreA", "Car", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      _tempVec = new Vec3();
      EventName = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
        error: Error()
      }), Constants) : Constants).EventName;

      _export("Car", Car = (_dec = ccclass('Car'), _dec(_class = (_class2 = (_temp = class Car extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "maxSpeed", _descriptor, this);

          _defineProperty(this, "_currentRoadPoint", null);

          _defineProperty(this, "_pointA", new Vec3());

          _defineProperty(this, "_pointB", new Vec3());

          _defineProperty(this, "_curSpeed", 0);

          _defineProperty(this, "_isMoving", false);

          _defineProperty(this, "_offset", new Vec3());

          _defineProperty(this, "_originRotation", 0);

          _defineProperty(this, "_targetRotation", 0);

          _defineProperty(this, "_centerPoint", new Vec3());

          _defineProperty(this, "_rotMeasure", 0);

          _defineProperty(this, "_acceleration", 0.2);

          _defineProperty(this, "_isMain", false);

          _defineProperty(this, "_isInOrder", false);

          _defineProperty(this, "_isBreaking", false);

          _defineProperty(this, "_gas", null);

          _defineProperty(this, "_overCD", null);

          _defineProperty(this, "_camera", null);

          _defineProperty(this, "_isOver", false);
        }

        start() {
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on(EventName.FINISHID_WALK, this._finishedWalk, this);
        }

        update(dt) {
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
              const offestRotation = this._targetRotation - this._originRotation;

              const currentRotation = this._conversion(this.node.eulerAngles.y);

              let nextStation = currentRotation - this._originRotation + this._curSpeed * this._rotMeasure * (this._targetRotation > this._originRotation ? 1 : -1);

              if (Math.abs(nextStation) > Math.abs(offestRotation)) {
                nextStation = offestRotation;
              }

              const target = nextStation + this._originRotation;

              _tempVec.set(0, target, 0);

              this.node.eulerAngles = _tempVec; // 这里需要知道，绕轴旋转的计算公式
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
              const z = this._pointB.z - this._pointA.z;

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
                const x = this._pointB.x - this._pointA.x;

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
          Vec3.subtract(_tempVec, this._pointB, this._offset); // console.log("tem : " + _tempVec.x + " " + _tempVec.y + " " + _tempVec.z);
          // console.log("offest : " + this._offset.x + " " + this._offset.y + " " + this._offset.z);
          // console.log(_tempVec.length());

          if (_tempVec.length() <= 0.01
          /** 这里是步长容错*/
          ) {
              this._arrivalStation();
            }
        }

        setCamera(camera, pos, rotation) {
          if (!this._isMain) {
            return;
          }

          this._camera = camera;
          this._camera.parent = this.node;

          this._camera.setPosition(pos);

          this._camera.eulerAngles = new Vec3(rotation, 0, 0);
        }

        startRunning() {
          if (this._isOver) {
            return;
          }

          if (this._currentRoadPoint) {
            this._isMoving = true;
            this._curSpeed = 0;
            this._acceleration = 0.2;
          }
        }

        stopRunning() {
          if (this._isOver) {
            return;
          }

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
        }

        moveAfterFinished(cd) {
          this._overCD = cd;
        }

        stopImmediately() {
          this._isMoving = false;
          this._curSpeed = 0;
        }

        setEntry(entry, isMain = false) {
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

          this._pointB.set(this._currentRoadPoint.nextStation.worldPosition); // 调整车子的视角方向


          const z = this._pointB.z - this._pointA.z;

          if (z !== 0) {
            this.node.eulerAngles = z < 0 ? new Vec3() : new Vec3(0, 180, 0);
          } else {
            const x = this._pointB.x - this._pointA.x;
            this.node.eulerAngles = x < 0 ? new Vec3(0, 90, 0) : new Vec3(0, 270, 0);
          }

          this._isOver = false;
          const collider = this.node.getComponent(BoxColliderComponent);

          if (this._isMain) {
            const gasNode = this.node.getChildByName('gas');
            this._gas = gasNode === null || gasNode === void 0 ? void 0 : gasNode.getComponent(ParticleSystemComponent);

            this._gas.play();

            collider.on('onCollisionEnter', this._onCollisionEnter, this);
            ;
            collider.setGroup((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CarGroup.MAIN_CAR);
            collider.setMask((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CarGroup.OTHER_CAR); // 碰撞的分组和掩码，到底是怎么工作的？？
          } else {
            collider.setGroup((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CarGroup.OTHER_CAR);
            collider.setMask(-1);
          }

          this._resetPhysical();
        }

        _arrivalStation() {
          var _this$_currentRoadPoi2;

          console.log("到啦");

          if (this._isMain) {
            console.log('i am main');
          }

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
                // 接客点  
                this._greetingCustomer();
              } else if (this._currentRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint).RoadPointType.GOODBYE) {
                // 送客点
                this._takingCustomer();
              } else if (this._currentRoadPoint.type == (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint).RoadPointType.END) {
                (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                  error: Error()
                }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).AudioSource.WIN);

                this._gameOver();
              }
            } // 弯道处理


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

              const r = _tempVec.length();

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
        }

        _onCollisionEnter(event) {
          console.log('!!!!撞到了');
          const otherCollider = event.otherCollider;

          if (otherCollider.node.name === 'group') {
            return;
          }

          const otherRigidBody = otherCollider.node.getComponent(RigidBodyComponent);
          otherRigidBody.useGravity = true;
          otherRigidBody === null || otherRigidBody === void 0 ? void 0 : otherRigidBody.applyForce(new Vec3(0, 2500, -1500), new Vec3(0, 0.5, 0));
          const collider = event.selfCollider;
          collider.addMask((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CarGroup.NORMAL);
          const rigidBody = this.node.getComponent(RigidBodyComponent);
          rigidBody.useGravity = true;

          this._gameOver();
        }

        _greetingCustomer() {
          var _this$_currentRoadPoi3;

          const runtimeData = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance();
          runtimeData.isTakeOver = false;
          this._isInOrder = true;
          this._curSpeed = 0;

          this._gas.stop();

          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GREETING, this.node.worldPosition, (_this$_currentRoadPoi3 = this._currentRoadPoint) === null || _this$_currentRoadPoi3 === void 0 ? void 0 : _this$_currentRoadPoi3.direction);
        }

        _takingCustomer() {
          var _this$_currentRoadPoi4;

          const runtimeData = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance();
          runtimeData.isTakeOver = false;
          runtimeData.curProgress++;
          this._isInOrder = true;
          this._curSpeed = 0;

          this._gas.stop();

          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GOODBYE, this.node.worldPosition, (_this$_currentRoadPoi4 = this._currentRoadPoint) === null || _this$_currentRoadPoi4 === void 0 ? void 0 : _this$_currentRoadPoi4.direction);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.SHOW_COIN, this.node.worldPosition);
        }

        _finishedWalk() {
          if (!this._isMain) {
            return;
          }

          this._gas.play();

          this._isInOrder = false;
        }

        _resetPhysical() {
          const rigidBody = this.node.getComponent(RigidBodyComponent);
          rigidBody.useGravity = false;
          rigidBody.sleep();
          rigidBody.wakeUp();
        }

        _gameOver() {
          this._isMoving = false;
          this._curSpeed = 0;
          this._isOver = true;
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GAME_OVER);
        }

        _conversion(value) {
          let a = value;

          if (a <= 0) {
            a += 360;
          }

          return a;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maxSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Car.js.map