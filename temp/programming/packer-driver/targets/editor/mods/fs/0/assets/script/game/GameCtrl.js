System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../data/Constants", "../data/CustomEventListener", "../data/GameData", "../ui/LoadingUI", "../ui/UIManager", "./AudioManager", "./CarManager", "./MapManager"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, BoxCollider, loader, Prefab, instantiate, Constants, CustomEventListener, RunTimeData, LoadingUI, UIManager, AudioManager, CarManager, MapManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, GameCtrl;

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

  function _reportPossibleCrUseOfLoadingUI(extras) {
    _reporterNs.report("LoadingUI", "../ui/LoadingUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIManager(extras) {
    _reporterNs.report("UIManager", "../ui/UIManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCarManager(extras) {
    _reporterNs.report("CarManager", "./CarManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "./MapManager", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      BoxCollider = _cc.BoxCollider;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_dataConstants) {
      Constants = _dataConstants.Constants;
    }, function (_dataCustomEventListener) {
      CustomEventListener = _dataCustomEventListener.CustomEventListener;
    }, function (_dataGameData) {
      RunTimeData = _dataGameData.RunTimeData;
    }, function (_uiLoadingUI) {
      LoadingUI = _uiLoadingUI.LoadingUI;
    }, function (_uiUIManager) {
      UIManager = _uiUIManager.UIManager;
    }, function (_AudioManager) {
      AudioManager = _AudioManager.AudioManager;
    }, function (_CarManager) {
      CarManager = _CarManager.CarManager;
    }, function (_MapManager) {
      MapManager = _MapManager.MapManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5a034EDSH5IcJ6nk7+n1DG/", "GameCtrl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameCtrl", GameCtrl = (_dec = ccclass('GameCtrl'), _dec2 = property({
        type: _crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
          error: Error()
        }), MapManager) : MapManager
      }), _dec3 = property({
        type: _crd && CarManager === void 0 ? (_reportPossibleCrUseOfCarManager({
          error: Error()
        }), CarManager) : CarManager
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: _crd && LoadingUI === void 0 ? (_reportPossibleCrUseOfLoadingUI({
          error: Error()
        }), LoadingUI) : LoadingUI
      }), _dec(_class = (_class2 = (_temp = class GameCtrl extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mapManager", _descriptor, this);

          _initializerDefineProperty(this, "carManager", _descriptor2, this);

          _initializerDefineProperty(this, "group", _descriptor3, this);

          _initializerDefineProperty(this, "loadingUI", _descriptor4, this);

          _defineProperty(this, "_progress", 5);
        }

        onLoad() {
          this.loadingUI.show();

          this._loadMap(1);

          const collider = this.group.getComponent(BoxCollider);
          collider.setGroup((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CarGroup.NORMAL);
          collider.setMask(-1);
        }

        start() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).showDialog((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UIPage.mainUI);
          this.node.on(Node.EventType.TOUCH_START, this._touchStart, this);
          this.node.on(Node.EventType.TOUCH_END, this._touchEnd, this);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.GAME_START, this._gameStart, this);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.GAME_OVER, this._gameOver, this);
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.NEW_LEVEL, this._newLevel, this);
          (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
            error: Error()
          }), AudioManager) : AudioManager).playMusic();
        }

        _touchStart(touch, event) {
          var _this$carManager;

          (_this$carManager = this.carManager) === null || _this$carManager === void 0 ? void 0 : _this$carManager.controMoving();
        }

        _touchEnd(touch, event) {
          var _this$carManager2;

          (_this$carManager2 = this.carManager) === null || _this$carManager2 === void 0 ? void 0 : _this$carManager2.controMoving(false);
        }

        _gameStart() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).hidDialog((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UIPage.mainUI);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).showDialog((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UIPage.gameUI);
        }

        _gameOver() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).hidDialog((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UIPage.gameUI);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).showDialog((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UIPage.resultUI);
        }

        _newLevel() {
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).hidDialog((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UIPage.resultUI);
          (_crd && UIManager === void 0 ? (_reportPossibleCrUseOfUIManager({
            error: Error()
          }), UIManager) : UIManager).showDialog((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).UIPage.mainUI);
          this.mapManager.recycle();
          this.loadingUI.show();

          this._loadMap(1);
        }

        _reset() {
          this.mapManager.resetMap();
          this.carManager.reset(this.mapManager.curPath);
          const runtimeData = (_crd && RunTimeData === void 0 ? (_reportPossibleCrUseOfRunTimeData({
            error: Error()
          }), RunTimeData) : RunTimeData).instance();
          runtimeData.curProgress = 0;
          runtimeData.maxProgress = this.mapManager.maxProgress;
        }

        _loadMap(level, cb) {
          let map = `map/map`;

          if (level >= 100) {
            map += `${level}`;
          } else if (level >= 10) {
            map += `1${level}`;
          } else {
            map += `10${level}`;
          }

          loader.loadRes(map, Prefab, (err, prefab) => {
            if (err) {
              console.warn(err);
              return;
            }

            this._progress = 5;
            this.scheduleOnce(this._loadingSchedule, 0.2);
            const mapNode = instantiate(prefab);
            mapNode.parent = this.mapManager.node;

            if (cb) {
              cb();
            }

            this._progress = 0;

            this._reset();

            this.loadingUI.finishLoading();
          });
        }

        _loadingSchedule() {
          if (this._progress < 0) {
            return;
          }

          this._progress--;
          (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
            error: Error()
          }), CustomEventListener) : CustomEventListener).dispatchEvent((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).EventName.UPDATE_PROGRESS, 40 / 5);
          this.scheduleOnce(this._loadingSchedule, 0.2);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mapManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "carManager", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "group", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "loadingUI", [_dec5], {
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
//# sourceMappingURL=GameCtrl.js.map