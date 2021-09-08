
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

enum EventName {
  GREETING = 'greeting',
  GOODBYE = 'goodbye',
  FINISHID_WALK = 'finished-walk',
  STARTBRA_KING = "start-braking",
  END_BRANING = "end-braking",
  SHOW_COIN = "show-coin",
}

enum CustomerState {
  NONE,
  GREETING,
  GOODBYE,
}

enum AudioSource {
  BACKGROUND = 'background',
  CLICK = 'click',
  CRASH = 'crash',
  INCAR = 'inCar',
  GETMONEY = 'getMoney',
  NEWORDER = 'newOrder',
  START = 'start',
  STOP = 'stop',
  TOOTONG1 = 'tooting1',
  TOOTING2 = 'tootint2',
  WIN = 'win',
}

@ccclass('Constants')
export class Constants extends Component {
  public static EventName = EventName;
  public static CustomerState = CustomerState;
  public static AudioSource = AudioSource;
}
