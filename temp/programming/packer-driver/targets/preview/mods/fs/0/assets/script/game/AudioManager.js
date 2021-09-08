System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, AudioClip, assert, assetManager, _dec, _class, _class2, _temp, _crd, ccclass, property, AudioManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      assert = _cc.assert;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9e5aac2qZCA5/HbsG3HCPc", "AudioManager", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AudioManager", AudioManager = (_dec = ccclass('AudioManager'), _dec(_class = (_temp = _class2 = /*#__PURE__*/function () {
        function AudioManager() {}

        AudioManager.init = function init(audioSource) {
          AudioManager._audioSource = audioSource;
        };

        AudioManager.playMusic = function playMusic() {
          var audioSource = AudioManager._audioSource;
          audioSource.play();
        };

        AudioManager.playSound = function playSound(name) {
          var audioSource = AudioManager._audioSource;
          assert(audioSource, 'AudioManager not initted!');
          var path = "audio/sound/" + name;
          var cacheAudioClip = AudioManager._cacheAudioClipMap[path];

          if (cacheAudioClip) {
            audioSource.playOneShot(cacheAudioClip, 1);
          } else {
            var _assetManager$resourc;

            (_assetManager$resourc = assetManager.resources) === null || _assetManager$resourc === void 0 ? void 0 : _assetManager$resourc.load(path, AudioClip, function (err, clip) {
              if (err) {
                console.warn(err);
                return;
              }

              AudioManager._cacheAudioClipMap[path] = clip;
              audioSource.playOneShot(clip, 1);
            });
          }
        };

        return AudioManager;
      }(), _defineProperty(_class2, "_audioSource", void 0), _defineProperty(_class2, "_cacheAudioClipMap", {}), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AudioManager.js.map