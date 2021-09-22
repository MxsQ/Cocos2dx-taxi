System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../data/Constants", "../data/CustomEventListener", "../data/UpdateLabelValue"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, UITransform, Constants, CustomEventListener, UpdateLabelValue, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, LoadingUI;

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

  function _reportPossibleCrUseOfUpdateLabelValue(extras) {
    _reporterNs.report("UpdateLabelValue", "../data/UpdateLabelValue", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      UITransform = _cc.UITransform;
    }, function (_dataConstants) {
      Constants = _dataConstants.Constants;
    }, function (_dataCustomEventListener) {
      CustomEventListener = _dataCustomEventListener.CustomEventListener;
    }, function (_dataUpdateLabelValue) {
      UpdateLabelValue = _dataUpdateLabelValue.UpdateLabelValue;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e0f1fcd0phOuqPDlXMvxKnR", "LoadingUI", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("LoadingUI", LoadingUI = (_dec = ccclass('LoadingUI'), _dec2 = property({
        type: _crd && UpdateLabelValue === void 0 ? (_reportPossibleCrUseOfUpdateLabelValue({
          error: Error()
        }), UpdateLabelValue) : UpdateLabelValue
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(LoadingUI, _Component);

        function LoadingUI() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "progressLabel", _descriptor, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "_progress", 0);

          return _this;
        }

        var _proto = LoadingUI.prototype;

        _proto.onEnable = function onEnable() {
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.UPDATE_PROGRESS, this.updateProgress, this);
        };

        _proto.onDisable = function onDisable() {
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.UPDATE_PROGRESS, this.updateProgress, this);
        };

        _proto.show = function show() {
          this.node.active = true;
          var transForm = this.node.getComponent(UITransform);
          transForm.priority = 100;
          this._progress = 50;
          this.progressLabel.playUpdateValue(this._progress, this._progress, 0);
        };

        _proto.updateProgress = function updateProgress(value) {
          var tmp = this._progress + value > 100 ? 100 : this._progress + value;
          this.progressLabel.playUpdateValue(this._progress, tmp, 0.2);
          this._progress += tmp;
        };

        _proto.finishLoading = function finishLoading() {
          this.progressLabel.playUpdateValue(this._progress, 100, 0.2);
          this._progress = 100;
          this.scheduleOnce(this._hide, 0.5);
        };

        _proto._hide = function _hide() {
          this.node.active = false;
        };

        return LoadingUI;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LoadingUI.js.map