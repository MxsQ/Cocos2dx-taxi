
import { _decorator, Component, Node, loader, Prefab } from 'cc';
import { PoolManager } from '../data/PoolManager';
import { RoadPoint } from '../RoadPoint';
import { Car } from "./Car";

const { ccclass, property } = _decorator;

@ccclass('CarManager')
export class CarManager extends Component {

  @property({
    type: Car
  })
  mainCar: Car | null = null;

  private _curPath: Node[] = [];
  private _aiCars: Car[] = [];

  public reset(points: Node[]) {
    if (points.length <= 0) {
      console.warn("there is no points in this map");
      return;
    }

    this._curPath = points;
    this._createMainCar(points[0]);
    this._startSchedule();
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

  private _startSchedule() {
    for (let i = 1; i < this._curPath.length; i++) {
      const node = this._curPath[i]
      const roadPoint = node.getComponent(RoadPoint);
      roadPoint?.startSchedule(this._createEnemy.bind(this));
    }
  }

  private _stopSchedule() {

  }

  private _createEnemy(road: RoadPoint, carID: string) {
    const self = this;
    loader.loadRes(`car/car${carID}`, Prefab, (err, prefab) => {
      if (err) {
        console.warn(err);
        return;
      }

      const car = PoolManager.getNode(prefab, self.node);
      const carComp = car.getComponent(Car) as Car;
      this._aiCars.push(carComp);
      carComp.setEntry(road.node)
      carComp.maxSpeed = road.speed;
      carComp.startRunning();
      carComp.moveAfterFinished(this._recycleAICae.bind(this))
    })
  }

  private _recycleAICae(car: Car) {
    const index = this._aiCars.indexOf(car);
    if (index < 0) {
      return;
    }

    PoolManager.setNode(car.node);
    this._aiCars.splice(index, 1);
  }
}