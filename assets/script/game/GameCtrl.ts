
import { _decorator, Component, Node, EventTouch } from 'cc';
import { Constants } from '../data/Constants';
import { AudioManager } from './AudioManager';
import { CarManager } from './CarManager';
import { MapManager } from './MapManager';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {
  @property({
    type: MapManager
  })
  mapManager: MapManager = null;

  @property({
    type: CarManager
  })
  carManager: CarManager = null;

  public onLoad() {
    this.mapManager!.resetMap();
    this.carManager!.reset(this.mapManager!.curPath);
  }

  public start() {
    this.node.on(Node.EventType.TOUCH_START, this._touchStart, this);
    this.node.on(Node.EventType.TOUCH_END, this._touchEnd, this);

    AudioManager.playMusic();
  }

  private _touchStart(touch: Touch, event: EventTouch) {
    this.carManager?.controMoving();
  }

  private _touchEnd(touch: Touch, event: EventTouch) {
    this.carManager?.controMoving(false);
  }
}

