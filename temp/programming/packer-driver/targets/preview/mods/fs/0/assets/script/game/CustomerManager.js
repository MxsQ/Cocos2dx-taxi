System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../data/Constants", "../data/CustomEventListener"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, AnimationComponent, Constants, CustomEventListener, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, EventName, _tempVec, CustomerManager;

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

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_dataConstants) {
      Constants = _dataConstants.Constants;
    }, function (_dataCustomEventListener) {
      CustomEventListener = _dataCustomEventListener.CustomEventListener;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50471bA2eNNaIsTubEDOkAV", "CustomerManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      EventName = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
        error: Error()
      }), Constants) : Constants).EventName;
      _tempVec = new Vec3();

      _export("CustomerManager", CustomerManager = (_dec = ccclass('CustomerManager'), _dec2 = property({
        type: [Node]
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CustomerManager, _Component);

        function CustomerManager() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "customers", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "walkTime", _descriptor2, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_curCustomer", null);

          _defineProperty(_assertThisInitialized(_this), "_startPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_endPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_inTheOrder", false);

          _defineProperty(_assertThisInitialized(_this), "_deltaTime", 0);

          _defineProperty(_assertThisInitialized(_this), "_state", (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CustomerState.NONE);

          return _this;
        }

        var _proto = CustomerManager.prototype;

        _proto.start = function start() {
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on(EventName.GREETING, this._greetingCustomer, this);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on(EventName.GOODBYE, this._takingCustomer, this);
        };

        _proto.update = function update(dt) {
          if (this._inTheOrder) {
            this._deltaTime += dt;

            if (this._deltaTime > this.walkTime) {
              this._deltaTime = 0;
              this._inTheOrder = false;
              this._curCustomer.active = false;

              if (this._state == (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).CustomerState.GOODBYE) {
                this._curCustomer = null;
              }

              (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
                error: Error()
              }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.FINISHID_WALK);
            } else {
              var _this$_curCustomer;

              Vec3.lerp(_tempVec, this._startPos, this._endPos, this._deltaTime / this.walkTime);
              (_this$_curCustomer = this._curCustomer) === null || _this$_curCustomer === void 0 ? void 0 : _this$_curCustomer.setWorldPosition(_tempVec);
            }
          }
        };

        _proto._greetingCustomer = function _greetingCustomer() {
          this._curCustomer = this.customers[Math.floor(Math.random() * this.customers.length)];
          this._state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CustomerState.GREETING;
          this._inTheOrder = true;

          if (!this.customers) {
            return;
          }

          var carPos = arguments.length <= 0 ? undefined : arguments[0];
          var direction = arguments.length <= 1 ? undefined : arguments[1];
          Vec3.multiplyScalar(this._startPos, direction, 1.4);

          this._startPos.add(carPos);

          Vec3.multiplyScalar(this._endPos, direction, 0.5);

          this._endPos.add(carPos);

          this._curCustomer.setWorldPosition(this._startPos);

          this._curCustomer.active = true;

          if (direction.x !== 0) {
            // 设置朝向
            if (direction.x > 0) {
              this._curCustomer.eulerAngles = new Vec3(0, -90, 0);
            } else {
              this._curCustomer.eulerAngles = new Vec3(0, 90, 0);
            }
          } else {
            if (direction.z > 0) {
              this._curCustomer.eulerAngles = new Vec3(0, 180, 0);
            } else {
              this._curCustomer.eulerAngles = new Vec3();
            }
          }

          var animComp = this._curCustomer.getComponent(AnimationComponent);

          animComp.play('walk');
        };

        _proto._takingCustomer = function _takingCustomer() {
          this._state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CustomerState.GOODBYE;
          this._inTheOrder = true;
          var carPos = arguments.length <= 0 ? undefined : arguments[0];
          var direction = arguments.length <= 1 ? undefined : arguments[1];
          Vec3.multiplyScalar(this._startPos, direction, 0.5);

          this._startPos.add(carPos);

          Vec3.multiplyScalar(this._endPos, direction, 1.4);

          this._endPos.add(carPos);

          this._curCustomer.setWorldPosition(this._startPos);

          this._curCustomer.active = true;

          if (direction.x !== 0) {
            // 设置朝向
            if (direction.x > 0) {
              this._curCustomer.eulerAngles = new Vec3(0, 90, 0);
            } else {
              this._curCustomer.eulerAngles = new Vec3(0, -90, 0);
            }
          } else {
            if (direction.z > 0) {
              this._curCustomer.eulerAngles = new Vec3();
            } else {
              this._curCustomer.eulerAngles = new Vec3(0, 180, 0);
            }
          }

          var animComp = this._curCustomer.getComponent(AnimationComponent);

          animComp.play('walk');
        };

        return CustomerManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "customers", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "walkTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CustomerManager.js.map