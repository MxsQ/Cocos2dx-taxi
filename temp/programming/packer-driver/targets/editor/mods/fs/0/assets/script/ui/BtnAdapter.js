System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../game/AudioManager"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ButtonComponent, AudioManager, _dec, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BtnAdapter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "../game/AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ButtonComponent = _cc.ButtonComponent;
    }, function (_gameAudioManager) {
      AudioManager = _gameAudioManager.AudioManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38b56jBmYBIS5DR8J8+CtXB", "BtnAdapter", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BtnAdapter", BtnAdapter = (_dec = ccclass('BtnAdapter'), _dec(_class = (_class2 = (_temp = class BtnAdapter extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "soundName", _descriptor, this);

          _initializerDefineProperty(this, "delayTime", _descriptor2, this);
        }

        start() {
          this.node.on(ButtonComponent.EventType.CLICK, this.click, this);
        }

        click() {
          this.scheduleOnce(this.playSound, this.delayTime);
        }

        playSound() {
          if (this.soundName.length <= 0) {
            return;
          }

          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playSound(this.soundName);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "soundName", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "delayTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BtnAdapter.js.map