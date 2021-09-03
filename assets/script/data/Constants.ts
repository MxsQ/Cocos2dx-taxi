
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

@ccclass('Constants')
export class Constants extends Component {
  public static EventName = EventName;
  public static CustomerState = CustomerState;
}
