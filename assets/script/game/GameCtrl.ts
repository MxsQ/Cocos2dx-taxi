
import { _decorator, Component, Node, EventTouch } from 'cc';
import { CarManager } from './CarManager';
import { MapManager } from './MapManager';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {
  @property({
    type: MapManager
  })
  mapManager : MapManager = null;

  @property({
    type: CarManager
  })
  carManager : CarManager = null;

  public onLoad(){
    this.mapManager!.resetMap();
    this.carManager!.resetCars(this.mapManager!.curPath);
  }

  public start(){
    this.node.on(Node.EventType.TOUCH_START, this._touchStart, this);
    this.node.on(Node.EventType.TOUCH_END, this._touchEnd, this);
  }

  private _touchStart(touch: Touch, event: EventTouch){
    this.carManager?.controMoving();
  }

  private _touchEnd(touch: Touch, event: EventTouch){
    this.carManager?.controMoving(false);
  }
}

