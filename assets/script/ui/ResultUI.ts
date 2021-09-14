
import { _decorator, Component, Node, Label, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ResulttUI')
export class ResulttUI extends Component {

  @property({
    type: Label,
    displayOrder: 1,
  })
  public targetLevel: Label = null!;

  @property({
    type: Label,
    displayOrder: 2,
  })
  public srcLevel: Label = null!;

  @property({
    type: Sprite,
    displayOrder: 3,
  })
  public targetSp: Sprite = null!;

  @property({
    type: Sprite,
    displayOrder: 4,
  })
  public srcSp: Sprite = null!;

  @property({
    type: SpriteFrame,
    displayOrder: 5,
  })
  public levelFinished: SpriteFrame = null!;

  @property({
    type: SpriteFrame,
    displayOrder: 6,
  })
  public levelUnFinished: SpriteFrame = null!;

  @property({
    type: [Sprite],
    displayOrder: 7,
  })
  public progress: Sprite[] = [];

  @property({
    type: SpriteFrame,
    displayOrder: 8,
  })
  public progress1: SpriteFrame = null!;

  @property({
    type: SpriteFrame,
    displayOrder: 9,
  })
  public progress2: SpriteFrame = null!;

  @property({
    type: SpriteFrame,
    displayOrder: 10,
  })
  public progress3: SpriteFrame = null!;

  @property({
    type: Label,
    displayOrder: 11,
  })
  public progressLabel: Label = null!;

  @property({
    type: Label,
    displayOrder: 12,
  })
  public moneyLabel: Label = null!;

  public show() {

  }

  public hide() {

  }

  public clictBtnNormal() {

  }
}