
import { _decorator, Component, Node, Label } from 'cc';
import { Constants } from '../data/Constants';
import { CustomEventListener } from '../data/CustomEventListener';
import { RunTimeData } from '../data/GameData';
import { CustomerManager } from '../game/CustomerManager';
const { ccclass, property } = _decorator;

@ccclass('MainUI')
export class MainUI extends Component {

  @property({
    type: Label
  })
  moneyLabel: Label = null;

  private _clickTime = 0;
  private _time = 0;

  public clickStart() {
    CustomEventListener.dispatchEvent(Constants.EventName.GAME_START);
  }

  public onEnable() {
    this.moneyLabel.string = `${RunTimeData.instance().totolMoney}`;
  }

  public clickDebug() {
    const time = Date.now();
    if (time - this._time <= 200) {
      this._clickTime++;
    } else {
      this._clickTime = 0;
    }

    this._time = time;
    if (this._clickTime > 3) {
      cc.sys.localStorage.removeItem(Constants.GameConfigID);
      this._clickTime = 0;
      console.log('clear cache')
    }
  }
}