System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: async function () {
      // Auto generated represents the prerequisite imports of project modules.
      await (async () => {
        const requests = [() => _context.import("file:///Users/qinx/coding/cocos2dx/taxi/assets/script/RoadPoint.ts"), () => _context.import("file:///Users/qinx/coding/cocos2dx/taxi/assets/script/data/CustomEventListener.ts"), () => _context.import("file:///Users/qinx/coding/cocos2dx/taxi/assets/script/game/Car.ts"), () => _context.import("file:///Users/qinx/coding/cocos2dx/taxi/assets/script/game/CarManager.ts"), () => _context.import("file:///Users/qinx/coding/cocos2dx/taxi/assets/script/game/GameCtrl.ts"), () => _context.import("file:///Users/qinx/coding/cocos2dx/taxi/assets/script/game/GameMap.ts"), () => _context.import("file:///Users/qinx/coding/cocos2dx/taxi/assets/script/game/MapManager.ts"), () => _context.import("file:///Users/qinx/coding/cocos2dx/taxi/assets/script/game/typescript.ts")];

        for (const request of requests) {
          try {
            await request();
          } catch (_err) {// The error should have been caught by executor.
          }
        }
      })();
    }
  };
});
//# sourceMappingURL=prerequisite-imports.js.map