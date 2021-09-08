
import { _decorator, AudioClip, AudioSource, assert, assetManager } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioManager')
export class AudioManager {

  private static _audioSource?: AudioSource;
  private static _cacheAudioClipMap: Record<string, AudioClip> = {};

  public static init(audioSource: AudioSource) {
    AudioManager._audioSource = audioSource;
  }

  public static playMusic() {
    const audioSource = AudioManager._audioSource!;
    audioSource.play();
  }

  public static playSound(name: string) {
    const audioSource = AudioManager._audioSource!;
    assert(audioSource, 'AudioManager not initted!')


    const path = `audio/sound/${name}`;
    let cacheAudioClip = AudioManager._cacheAudioClipMap[path];
    if (cacheAudioClip) {
      audioSource.playOneShot(cacheAudioClip, 1);
    } else {
      assetManager.resources?.load(path, AudioClip, (err, clip) => {
        if (err) {
          console.warn(err);
          return;
        }

        AudioManager._cacheAudioClipMap[path] = clip;
        audioSource.playOneShot(clip, 1);
      })

    }
  }
}
