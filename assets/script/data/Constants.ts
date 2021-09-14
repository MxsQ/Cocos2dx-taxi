
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

enum EventName {
  GREETING = 'greeting',
  GOODBYE = 'goodbye',
  FINISHID_WALK = 'finished-walk',
  STARTBRA_KING = "start-braking",
  END_BRANING = "end-braking",
  SHOW_COIN = "show-coin",
  GAME_START = "game-start",
  GAME_OVER = "game-over",
  NEW_LEVEL = 'new-level',
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

enum CarGroup {
  NORMAL = 1 << 0,
  MAIN_CAR = 1 << 1,
  OTHER_CAR = 1 << 2,
}

@ccclass('Constants')
export class Constants extends Component {
  public static EventName = EventName;
  public static CustomerState = CustomerState;
  public static AudioSource = AudioSource;
  public static CarGroup = CarGroup;
  public static talkable = [
    'Please hurry up.\n I have a plane to catch',
    'The most beatiful day \nis not the rainy day',
  ];

  public static UIPage = {
    mainUI: 'mainUI',
    gameUI: 'gameUI',
    resultUI: 'resultUI',
  }
}
