
import { _decorator, Component, Node, Prefab, ParticleUtils, ParticleSystemComponent, instantiate } from 'cc';
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
  coin: Prefab | Node | null = null;

  private _followTarget: Node | null = null;
  private _curBraking: Node | null = null;
  private _coin: ParticleSystemComponent = null;
  // privete _coin: ParticleSystemComponent = null;

  public update() {
    if (this._curBraking && this._followTarget) {
      this._curBraking.setWorldPosition(this._followTarget.worldPosition);
    }
  }

  public start() {
    CustomEventListener.on(Constants.EventName.STARTBRA_KING, this._startBraking, this);
    CustomEventListener.on(Constants.EventName.END_BRANING, this._endBraking, this);
    CustomEventListener.on(Constants.EventName.SHOW_COIN, this._showCoin, this);
  }

  private _startBraking(...args: any[]) {
    const follow = this._followTarget = args[0];
    this._curBraking = PoolManager.getNode(this.brakeTrail, this.node);
    this._curBraking.setWorldRotation(follow);
    ParticleUtils.play(this._curBraking);
  }

  private _endBraking() {
    const curBraking = this._curBraking!;
    this.scheduleOnce(() => {
      PoolManager.setNode(curBraking);
    }, 2);

    this._curBraking = null;
    this._followTarget = null;
  }

  private _showCoin(...args: any) {
    const pos = args[0];
    if (!this._coin) {
      const coin = instantiate(this.coin) as Node;
      coin.setParent(this.node);
      this._coin = coin.getComponent(ParticleSystemComponent) as ParticleSystemComponent;
    }

    this._coin.node.setWorldPosition(pos);
    this._coin.play();
  }

}