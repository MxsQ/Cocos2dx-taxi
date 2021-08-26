
import { _decorator, Component, Node } from 'cc';
import { CarManager } from './CarManager';
import { MapManager } from './MapManager';
const { ccclass, property } = _decorator;

@ccclass('GameCtrl')
export class GameCtrl extends Component {
  @property({
    type: MapManager,
  })
  mapManager : MapManager = null;

  @property({
    type: CarManager
  })
  carManager : CarManager = null;
}

