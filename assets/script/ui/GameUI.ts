
import { _decorator, Component, Node, Label, LabelComponent, SpriteComponent, SpriteFrame, Sprite, loader, AnimationComponent } from 'cc';
import { Constants } from '../data/Constants';
import { CustomEventListener } from '../data/CustomEventListener';
import { RunTimeData } from '../data/GameData';
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
    type: [Sprite],
    displayOrder: 7,
  })
  progress: Sprite[] = [];

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

  private _runtimeData: RunTimeData = null;

  public show() {
    CustomEventListener.on(Constants.EventName.GREETING, this._greeting, this);
    CustomEventListener.on(Constants.EventName.GOODBYE, this._taking, this);
    CustomEventListener.on(Constants.EventName.SHOW_TALK, this._talking, this);
    CustomEventListener.on(Constants.EventName.SHOW_GUIDE, this._showGuide, this);
    this._runtimeData = RunTimeData.instance();
    this._refreshUI();
    this._showGuide(true);
  }

  public hide() {
    CustomEventListener.off(Constants.EventName.GREETING, this._greeting, this);
    CustomEventListener.off(Constants.EventName.GOODBYE, this._taking, this);
    CustomEventListener.off(Constants.EventName.SHOW_TALK, this._talking, this);
    CustomEventListener.off(Constants.EventName.SHOW_GUIDE, this._showGuide, this);

  }

  private _greeting() {
    this.progress[this._runtimeData.maxProgress - 1 - this._runtimeData.curProgress].spriteFrame = this.progress2;
  }

  private _taking() {
    this.progress[this._runtimeData.maxProgress - this._runtimeData.curProgress].spriteFrame = this.progress1;
    if (this._runtimeData.maxProgress === this._runtimeData.curProgress) {
      this.targetSp.spriteFrame = this.levelFinished;
    }
  }

  private _talking(customerID: string) {
    const table = Constants.talkable as Array;
    const index = Math.floor(Math.random() * table.length);
    const str = table[index]
    this.content.string = str;

    const path = `texture/head/head${customerID + 1}/spriteFrame`;
    loader.loadRes(path, SpriteFrame, (err, sp) => {
      if (err) {
        return;
      }

      if (this.talkNode.active) {
        this.avatar.spriteFrame = sp;
      }
    })
    this.talkNode.active = true;
    this.scheduleOnce(() => {
      this.talkNode.active = false;
    }, 3)
  }

  private _showGuide(isShow: boolean) {
    this.guildNode.active = isShow;

    if (isShow) {
      const animComp = this.guildNode.getComponent(AnimationComponent) as AnimationComponent;
      animComp.play('showGuild');
    }
  }

  private _refreshUI() {
    for (let i = 0; i < this.progress.length; i++) {
      const progress = this.progress[i];
      if (i >= this._runtimeData.maxProgress) {
        progress.node.active = false;
      } else {
        progress.node.active = true;
        progress.spriteFrame = this.progress3
      }
    }

    const level = this._runtimeData.currLevel;
    this.srcLevel.string = '1';
    this.targetLevel.string = '2';
    this.srcSp.spriteFrame = this.levelFinished;
    this.targetSp.spriteFrame = this.levelUnFinished;
  }
}
