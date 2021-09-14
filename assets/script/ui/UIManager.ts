
import { _decorator, Component, Node, find, loader, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager {
  static _dictPanel = new Map<string, Node>();

  public static showDialog(name: string, cb?: Function, ...args: any[]) {
    const scriptName = name.substr(0, 1).toUpperCase() + name.substr(1);
    if (this._dictPanel.has(name)) {
      const panel = this._dictPanel.get(name);
      const parent = find('Canvas');
      panel!.parent = parent
      const comp = panel?.getComponent(scriptName);
      if (comp && comp['show']) {
        comp['show'].apply(args);
      }

      if (cb) {
        cb();
      }

      return;
    }

    const path = `ui/${name}`
    loader.loadRes(path, Prefab, (err, prefab) => {
      if (err) {
        console.warn(err);
        return;
      }

      const panel = instantiate(prefab!);
      this._dictPanel.set(name, panel);
      const parent = find('Canvas');
      panel.parent = parent;
      const comp = panel.getComponent(scriptName);
      if (comp && comp['show']) {
        comp['show'].apply(comp, args);
      }

      if (cb) {
        cb();
      }
    });

  }

  public static hidDialog(name: string, cb?: Function) {
    if (this._dictPanel.has(name)) {
      const panel = this._dictPanel.get(name)!;
      const scriptName = name.substr(0, 1).toUpperCase + name.substr(1);
      const comp = panel.getComponent(scriptName);
      panel.parent = null;
      if (comp && comp['hide']) {
        comp['hide'].apply(comp);
      }

      if (cb) {
        cb();
      }
    }
  }

}
