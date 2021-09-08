
import { _decorator, Component, Node, Vec3, Enum, macro } from 'cc';
const { ccclass, property } = _decorator;

enum ROAD_POINT_TYPE {
  NORMAL = 1,
  START,   // 玩家小车用
  GREETING,
  GOODBYE,
  END,
  AI_START, // 生成的小车用
}

Enum(ROAD_POINT_TYPE);

enum ROAD_MOVE_TYPE {
  LINE = 1,
  CURVE,
  BEND,
}

Enum(ROAD_MOVE_TYPE);

@ccclass('RoadPoint')
export class RoadPoint extends Component {
  public static RoadPointType = ROAD_POINT_TYPE;
  public static RoadMoveType = ROAD_MOVE_TYPE;


  @property({ type: ROAD_POINT_TYPE })
  type = ROAD_POINT_TYPE.NORMAL;

  @property({
    type: Node,
    visible: function (this: RoadPoint) {
      return this.type !== ROAD_POINT_TYPE.END;
    }
  })
  nextStation: Node = null;

  @property({
    type: ROAD_MOVE_TYPE,
    visible: function (this: RoadPoint) {
      return this.type !== ROAD_POINT_TYPE.END;
    }
  })
  moveType = ROAD_MOVE_TYPE.LINE;

  @property({
    visible: function (this: RoadPoint) {
      return this.type !== ROAD_POINT_TYPE.END && (this.moveType === ROAD_MOVE_TYPE.CURVE || this.moveType === ROAD_MOVE_TYPE.BEND);
    }
  })
  clockwise = true;

  @property({
    type: Vec3,
    visible: function (this: RoadPoint) {
      return this.type === ROAD_POINT_TYPE.GREETING
        || this.type === ROAD_POINT_TYPE.GOODBYE;
    }
  })
  direction = new Vec3(1, 0, 0);

  @property({
    visible: function (this: RoadPoint) {
      return this.type === ROAD_POINT_TYPE.AI_START;
    }
  })
  interval = 3;

  @property({
    visible: function (this: RoadPoint) {
      return this.type === ROAD_POINT_TYPE.AI_START;
    }
  })
  delayTime = 0;

  @property({
    visible: function (this: RoadPoint) {
      return this.type === ROAD_POINT_TYPE.AI_START;
    }
  })
  speed = 0.05;

  @property({
    visible: function (this: RoadPoint) {
      return this.type === ROAD_POINT_TYPE.AI_START;
    }
  })
  cars = "201";

  private _arrCars: string[] = [];
  private _cd: Function = null;

  public start() {
    this._arrCars = this.cars.split(',')
  }

  public startSchedule(cd: Function) {
    if (this.type !== ROAD_POINT_TYPE.AI_START) {
      return;
    }

    this.stopSchedule();
    this._cd = cd;
    this.scheduleOnce(this._startDeley, this.delayTime);
  }

  public stopSchedule() {
    this.unschedule(this._startDeley);
    this.unschedule(this._scheduleCD);
  }

  private _startDeley() {
    this._scheduleCD();
    this.schedule(this._scheduleCD, this.interval, macro.REPEAT_FOREVER);
  }

  private _scheduleCD() {
    const index = Math.floor(Math.random() * this._arrCars.length);
    if (this._cd) {
      this._cd(this, this._arrCars[index]);
    }
  }
}

