
import { _decorator, Component, Node, Label, LabelComponent, SpriteComponent, SpriteFrame, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameUI')
export class GameUI extends Component {
  @property({
    type: Label,
    displayOrder: 1,
  })
  targetLevel: Label = null;

  @property({
    type: Label,
    displayOrder: 2,
  })
  srcLevel: Label = null;

  @property({
    type: Sprite,
    displayOrder: 3,
  })
  targetSp: Sprite = null;

  @property({
    type: Sprite,
    displayOrder: 4,
  })
  srcSp: Sprite = null;

  @property({
    type: SpriteFrame,
    displayOrder: 5,
  })
  levelFinished: SpriteFrame = null;

  @property({
    type: SpriteFrame,
    displayOrder: 6,
  })
  levelUnFinished: SpriteFrame = null;

  @property({
    type: [Node],
    displayOrder: 7,
  })
  progress: Node[] = [];

  @property({
    type: SpriteFrame,
    displayOrder: 8,
  })
  progress1: SpriteFrame = null;

  @property({
    type: SpriteFrame,
    displayOrder: 9,
  })
  progress2: SpriteFrame = null;

  @property({
    type: SpriteFrame,
    displayOrder: 10,
  })
  progress3: SpriteFrame = null;

  @property({
    type: Sprite,
    displayOrder: 11,
  })
  avatar: Sprite = null;

  @property({
    type: Label,
    displayOrder: 12,
  })
  content: Label = null;

  @property({
    type: Node,
    displayOrder: 13,
  })
  guildNode: Node = null;

  @property({
    type: Node,
    displayOrder: 14,
  })
  talkNode: Node = null;

  public show() {

  }

  public hide() {

  }
}
