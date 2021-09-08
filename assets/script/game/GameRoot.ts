
import { _decorator, Component, Node, AudioSource, assert } from 'cc';
import { AudioManager } from './AudioManager';
const { ccclass, property } = _decorator;

@ccclass('GameRoot')
export class GameRoot extends Component {
  @property(AudioSource)
  private _audioSource: AudioSource = null!;

  onLoad() {
    const audioSource = this.getComponent(AudioSource);
    this._audioSource = audioSource!;

    AudioManager.init(audioSource!);
  }
}
