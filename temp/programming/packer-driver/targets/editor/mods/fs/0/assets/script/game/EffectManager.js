System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../data/Constants", "../data/CustomEventListener", "../data/PoolManager"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, Constants, CustomEventListener, PoolManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, EffectManager;

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

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "../data/PoolManager", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
    }, function (_dataConstants) {
      Constants = _dataConstants.Constants;
    }, function (_dataCustomEventListener) {
      CustomEventListener = _dataCustomEventListener.CustomEventListener;
    }, function (_dataPoolManager) {
      PoolManager = _dataPoolManager.PoolManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5f95edtZMlA/5ucLAGdRp0U", "EffectManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EffectManager", EffectManager = (_dec = ccclass('EffectManager'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = class EffectManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "brakeTrail", _descriptor, this);

          _initializerDefineProperty(this, "coin", _descriptor2, this);

          _defineProperty(this, "_followTarget", null);

          _defineProperty(this, "_curBraking", null);
        }

        start() {
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.STARTBRA_KING, this._startBraking, this);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.END_BRANING, this._endBraking, this);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.SHOW_COIN, this._showCoin, this);
        }

        _startBraking(...args) {
          const follow = this._followTarget = args[0];
          this._curBraking = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
            error: Error()
          }), PoolManager) : PoolManager).getNode(this.brakeTrail, this.node);

          this._curBraking.setWorldRotation(follow);
        }

        _endBraking() {}

        _showCoin() {}

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "brakeTrail", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec3], {
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
//# sourceMappingURL=EffectManager.js.map