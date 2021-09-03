
import { _decorator, Component, Node } from 'cc';
import { Car } from "./Car";

const { ccclass, property } = _decorator;

@ccclass('CarManager')
export class CarManager extends Component {

  @property({
    type: Car
  })
  mainCar: Car | null = null;

  public resetCars(points: Node[]) {
    if (points.length <= 0) {
      console.warn("there is no points in this map");
      return;
    }

    // this.mainCar = this.node.children[0].getComponent(Car);
    this._createMainCar(points[0]);
  }

  public controMoving(isRunning = true) {
    if (isRunning) {
      this.mainCar?.startRunning();
    } else {
      this.mainCar?.stopRunning();
    }
  }

  private _createMainCar(points: Node) {
    this.mainCar!.setEntry(points, true);
  }
}