
import { _decorator, Component, Node } from 'cc';
import { Constants } from '../data/Constants';
import { CustomEventListener } from '../data/CustomEventListener';
import { CustomerManager } from '../game/CustomerManager';
const { ccclass, property } = _decorator;

@ccclass('MainUI')
export class MainUI extends Component {

  public clickStart() {
    CustomEventListener.dispatchEvent(Constants.EventName.GAME_START);
  }
}