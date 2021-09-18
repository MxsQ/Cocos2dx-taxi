System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../data/Constants", "../data/CustomEventListener", "../data/GameData"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, SpriteFrame, Sprite, loader, AnimationComponent, Constants, CustomEventListener, RunTimeData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _temp, _crd, ccclass, property, GameUI;

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

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      loader = _cc.loader;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_dataConstants) {
      Constants = _dataConstants.Constants;
    }, function (_dataCustomEventListener) {
      CustomEventListener = _dataCustomEventListener.CustomEventListener;
    }, function (_dataGameData) {
      RunTimeData = _dataGameData.RunTimeData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c64bJ5HxhFvKr2Hh1xxgVL", "GameUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameUI", GameUI = (_dec = ccclass('GameUI'), _dec2 = property({
        type: Label,
        displayOrder: 1
      }), _dec3 = property({
        type: Label,
        displayOrder: 2
      }), _dec4 = property({
        type: Sprite,
        displayOrder: 3
      }), _dec5 = property({
        type: Sprite,
        displayOrder: 4
      }), _dec6 = property({
        type: SpriteFrame,
        displayOrder: 5
      }), _dec7 = property({
        type: SpriteFrame,
        displayOrder: 6
      }), _dec8 = property({
        type: [Sprite],
        displayOrder: 7
      }), _dec9 = property({
        type: SpriteFrame,
        displayOrder: 8
      }), _dec10 = property({
        type: SpriteFrame,
        displayOrder: 9
      }), _dec11 = property({
        type: SpriteFrame,
        displayOrder: 10
      }), _dec12 = property({
        type: Sprite,
        displayOrder: 11
      }), _dec13 = property({
        type: Label,
        displayOrder: 12
      }), _dec14 = property({
        type: Node,
        displayOrder: 13
      }), _dec15 = property({
        type: Node,
        displayOrder: 14
      }), _dec(_class = (_class2 = (_temp = class GameUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "targetLevel", _descriptor, this);

          _initializerDefineProperty(this, "srcLevel", _descriptor2, this);

          _initializerDefineProperty(this, "targetSp", _descriptor3, this);

          _initializerDefineProperty(this, "srcSp", _descriptor4, this);

          _initializerDefineProperty(this, "levelFinished", _descriptor5, this);

          _initializerDefineProperty(this, "levelUnFinished", _descriptor6, this);

          _initializerDefineProperty(this, "progress", _descriptor7, this);

          _initializerDefineProperty(this, "progress1", _descriptor8, this);

          _initializerDefineProperty(this, "progress2", _descriptor9, this);

          _initializerDefineProperty(this, "progress3", _descriptor10, this);

          _initializerDefineProperty(this, "avatar", _descriptor11, this);

          _initializerDefineProperty(this, "content", _descriptor12, this);

          _initializerDefineProperty(this, "guildNode", _descriptor13, this);

          _initializerDefineProperty(this, "talkNode", _descriptor14, this);

          _defineProperty(this, "_runtimeData", null);
        }

        show() {
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.GREETING, this._greeting, this);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.GOODBYE, this._taking, this);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.SHOW_TALK, this._talking, this);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.SHOW_GUIDE, this._showGuide, this);
          this._runtimeData = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance();

          this._refreshUI();

          this._showGuide(true);
        }

        hide() {
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.GREETING, this._greeting, this);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.GOODBYE, this._taking, this);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.SHOW_TALK, this._talking, this);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).off((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.SHOW_GUIDE, this._showGuide, this);
        }

        _greeting() {
          this.progress[this._runtimeData.maxProgress - 1 - this._runtimeData.curProgress].spriteFrame = this.progress2;
        }

        _taking() {
          this.progress[this._runtimeData.maxProgress - this._runtimeData.curProgress].spriteFrame = this.progress1;

          if (this._runtimeData.maxProgress === this._runtimeData.curProgress) {
            this.targetSp.spriteFrame = this.levelFinished;
          }
        }

        _talking(customerID) {
          const table = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).talkable;
          const index = Math.floor(Math.random() * table.length);
          const str = table[index];
          this.content.string = str;
          const path = `texture/head/head${customerID + 1}/spriteFrame`;
          loader.loadRes(path, SpriteFrame, (err, sp) => {
            if (err) {
              return;
            }

            if (this.talkNode.active) {
              this.avatar.spriteFrame = sp;
            }
          });
          this.talkNode.active = true;
          this.scheduleOnce(() => {
            this.talkNode.active = false;
          }, 3);
        }

        _showGuide(isShow) {
          this.guildNode.active = isShow;

          if (isShow) {
            const animComp = this.guildNode.getComponent(AnimationComponent);
            animComp.play('showGuild');
          }
        }

        _refreshUI() {
          for (let i = 0; i < this.progress.length; i++) {
            const progress = this.progress[i];

            if (i >= this._runtimeData.maxProgress) {
              progress.node.active = false;
            } else {
              progress.node.active = true;
              progress.spriteFrame = this.progress3;
            }
          }

          this.srcLevel.string = '1';
          this.targetLevel.string = '2';
          this.srcSp.spriteFrame = this.levelFinished;
          this.targetSp.spriteFrame = this.levelUnFinished;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "targetLevel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "srcLevel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "targetSp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "srcSp", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "levelFinished", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "levelUnFinished", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "progress1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "progress2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "progress3", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "content", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "guildNode", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "talkNode", [_dec15], {
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
//# sourceMappingURL=GameUI.js.map