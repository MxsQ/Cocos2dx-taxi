
import { _decorator, Component, Node, Prefab } from 'cc';
import { Constants } from '../data/Constants';
import { CustomEventListener } from '../data/CustomEventListener';
import { PoolManager } from '../data/PoolManager';
const { ccclass, property } = _decorator;

@ccclass('EffectManager')
export class EffectManager extends Component {

  @property({
    type: Prefab
  })
  brakeTrail: Prefab = null;

  @property({
    type: Prefab
  })
  coin: Prefab = null;

  private _followTarget: Node = null;
  private _curBraking: Node = null;

  public start() {
    CustomEventListener.on(Constants.EventName.STARTBRA_KING, this._startBraking, this);
    CustomEventListener.on(Constants.EventName.END_BRANING, this._endBraking, this);
    CustomEventListener.on(Constants.EventName.SHOW_COIN, this._showCoin, this);
  }

  private _startBraking(...args: any[]) {
    const follow = this._followTarget = args[0];
    this._curBraking = PoolManager.getNode(this.brakeTrail, this.node);
    this._curBraking.setWorldRotation(follow);
  }

  private _endBraking() {

  }

  private _showCoin() {

  }

}