
import { _decorator, Component, Node, loader, Prefab, Vec3, macro } from 'cc';
import { Constants } from '../data/Constants';
import { CustomEventListener } from '../data/CustomEventListener';
import { RunTimeData } from '../data/GameData';
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

  @property({
    type: Node
  })
  camera: Node = null!;

  @property
  cameraPos = new Vec3(0, 2, 2);

  @property
  cameraRotation = -40;

  private _curPath: Node[] = [];
  private _aiCars: Car[] = [];

  public start() {
    CustomEventListener.on(Constants.EventName.GAME_OVER, this._gameOver, this);
    CustomEventListener.on(Constants.EventName.GAME_START, this._gameStart, this);
  }

  public reset(points: Node[]) {
    if (points.length <= 0) {
      console.warn("there is no points in this map");
      return;
    }

    this._recycleAllAICar();
    this._curPath = points;
    this._createMainCar(points[0]);
  }

  public controMoving(isRunning = true) {
    if (isRunning) {
      CustomEventListener.dispatchEvent(Constants.EventName.SHOW_GUIDE, false);
      this.mainCar?.startRunning();
    } else {
      this.mainCar?.stopRunning();
    }
  }

  private _createMainCar(points: Node) {
    this.mainCar!.setEntry(points, true);
    this.mainCar?.setCamera(this.camera, this.cameraPos, this.cameraRotation);
  }

  private _gameStart() {
    this.mainCar?.startWithMinSpeed();
    this.schedule(this._checkCarIsClose, 0.2, macro.REPEAT_FOREVER);
    this._startSchedule();
  }

  private _gameOver() {
    this._stopSchedule();
    this.camera.setParent(this.node.parent, true);
    for (let i = 0; i < this._aiCars.length; i++) {
      const car = this._aiCars[i];
      car.stopImmediately();
    }

    this.unschedule(this._checkCarIsClose);
  }

  private _checkCarIsClose() {
    const mainCarPos = this.mainCar?.node.worldPosition;
    for (let i = 0; i < this._aiCars.length; i++) {
      const aiCar = this._aiCars[i];
      const pos = aiCar.node.worldPosition;
      if (Math.abs(pos.x - mainCarPos!.x) <= 2 && Math.abs(pos.z - mainCarPos!.z) <= 2) {
        this.mainCar?.tooting();
        break;
      }
    }
  }

  private _startSchedule() {
    for (let i = 1; i < this._curPath.length; i++) {
      const node = this._curPath[i]
      const roadPoint = node.getComponent(RoadPoint);
      roadPoint?.startSchedule(this._createEnemy.bind(this));
    }
  }

  private _stopSchedule() {
    for (let i = 1; i < this._curPath.length; i++) {
      const node = this._curPath[i]
      const roadPoint = node.getComponent(RoadPoint);
      roadPoint?.stopSchedule();
    }
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
    if (index >= 0) {
      PoolManager.setNode(car.node);
      this._aiCars.splice(index, 1);
    }
  }

  private _recycleAllAICar() {
    for (let i = 0; i < this._aiCars.length; i++) {
      const car = this._aiCars[i];
      PoolManager.setNode(car.node);
    }

    this._aiCars.length = 0;
  }
}