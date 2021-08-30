
import { _decorator, Component, Node, Vec3, Enum } from 'cc';
const { ccclass, property } = _decorator;

enum ROAD_POINT_TYPE{
  NORMAL = 1,
  START,   // 玩家小车用
  GREETING,
  GOODBYE,
  END,
  AI_START, // 生成的小车用
}

Enum(ROAD_POINT_TYPE);

enum ROAD_MOVE_TYPE{
  LINE = 1,
  CURVE,
  BEND,
}

Enum(ROAD_MOVE_TYPE);

@ccclass('RoadPoint')
export class RoadPoint extends Component {
  public static RoadPointType = ROAD_POINT_TYPE;
  public static RoadMoveType = ROAD_MOVE_TYPE;


  @property({type: ROAD_POINT_TYPE})
  type = ROAD_POINT_TYPE.NORMAL;

  @property({
    type : Node,
    visible : function (this:RoadPoint) {
      return this.type !== ROAD_POINT_TYPE.END;
    }
  })
  nextStation : Node = null;

  @property({
    type: ROAD_MOVE_TYPE, 
    visible : function (this:RoadPoint) {
      return this.type !== ROAD_POINT_TYPE.END;
    }
  })
  moveType = ROAD_MOVE_TYPE.LINE;

  @property({
    visible : function (this:RoadPoint) {
      return this.type !== ROAD_POINT_TYPE.END && (this.moveType === ROAD_MOVE_TYPE.CURVE || this.moveType === ROAD_MOVE_TYPE.BEND);
    }
  })
  clockwise = true;

  @property({
    type: Vec3,
    visible : function (this:RoadPoint) {
      return this.type === ROAD_POINT_TYPE.GREETING 
        || this.type === ROAD_POINT_TYPE.GOODBYE;
    }
  })
  direction = new Vec3(1, 0, 0);

  @property({
    visible : function (this:RoadPoint) {
      return this.type === ROAD_POINT_TYPE.AI_START;
    }
  })
  interval = 3;

  @property({
    visible : function (this:RoadPoint) {
      return this.type === ROAD_POINT_TYPE.AI_START;
    }
  })
  delayTime = 0;

  @property({
    visible : function (this:RoadPoint) {
      return this.type === ROAD_POINT_TYPE.AI_START;
    }
  })
  speed = 0.05;

  @property({
    visible : function (this:RoadPoint) {
      return this.type === ROAD_POINT_TYPE.AI_START;
    }
  })
  cars = "201";
}
 
