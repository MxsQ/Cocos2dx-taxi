
import { _decorator, Component, Node, Vec3, AnimationComponent } from 'cc';
import { Constants } from '../data/Constants';
import { CustomEventListener } from '../data/CustomEventListener';
const { ccclass, property } = _decorator;

const EventName = Constants.EventName;
const _tempVec = new Vec3()

@ccclass('CustomerManager')
export class CustomerManager extends Component {

  @property({
    type: [Node]
  })
  customers: Node[] = [];

  @property
  walkTime = 2;

  private _curCustomer: Node | null = null;
  private _startPos = new Vec3();
  private _endPos = new Vec3();
  private _inTheOrder = false;
  private _deltaTime = 0;
  private _state = Constants.CustomerState.NONE;

  public start() {
    CustomEventListener.on(EventName.GREETING, this._greetingCustomer, this);
    CustomEventListener.on(EventName.GOODBYE, this._takingCustomer, this);
  }

  public update(dt: number) {
    if (this._inTheOrder) {
      this._deltaTime += dt;
      if (this._deltaTime > this.walkTime) {
        this._deltaTime = 0;
        this._inTheOrder = false;
        this._curCustomer!.active = false;
        if (this._state == Constants.CustomerState.GOODBYE) {
          this._curCustomer = null;
        }
        CustomEventListener.dispatchEvent(EventName.FINISHID_WALK);

      } else {
        Vec3.lerp(_tempVec, this._startPos, this._endPos, this._deltaTime / this.walkTime)
        this._curCustomer?.setWorldPosition(_tempVec);
      }
    }
  }

  private _greetingCustomer(...args: any[]) {
    this._curCustomer = this.customers[Math.floor(Math.random() * this.customers.length)];
    this._state = Constants.CustomerState.GREETING;
    this._inTheOrder = true;
    if (!this.customers) {
      return;
    }

    const carPos = args[0];
    const direction = args[1];
    Vec3.multiplyScalar(this._startPos, direction, 1.4);
    this._startPos.add(carPos)
    Vec3.multiplyScalar(this._endPos, direction, 0.5);
    this._endPos.add(carPos)

    this._curCustomer.setWorldPosition(this._startPos);
    this._curCustomer.active = true

    if (direction.x !== 0) {
      // 设置朝向
      if (direction.x > 0) {
        this._curCustomer.eulerAngles = new Vec3(0, -90, 0);
      } else {
        this._curCustomer.eulerAngles = new Vec3(0, 90, 0);
      }
    } else {
      if (direction.z > 0) {
        this._curCustomer.eulerAngles = new Vec3(0, 180, 0);
      } else {
        this._curCustomer.eulerAngles = new Vec3();
      }
    }

    const animComp = this._curCustomer.getComponent(AnimationComponent);
    animComp.play('walk');

  }

  private _takingCustomer(...args: any[]) {
    this._state = Constants.CustomerState.GOODBYE;
    this._inTheOrder = true;

    const carPos = args[0];
    const direction = args[1];
    Vec3.multiplyScalar(this._startPos, direction, 0.5);
    this._startPos.add(carPos)
    Vec3.multiplyScalar(this._endPos, direction, 1.4);
    this._endPos.add(carPos)

    this._curCustomer.setWorldPosition(this._startPos);
    this._curCustomer.active = true

    if (direction.x !== 0) {
      // 设置朝向
      if (direction.x > 0) {
        this._curCustomer.eulerAngles = new Vec3(0, 90, 0);
      } else {
        this._curCustomer.eulerAngles = new Vec3(0, -90, 0);
      }
    } else {
      if (direction.z > 0) {
        this._curCustomer.eulerAngles = new Vec3();
      } else {
        this._curCustomer.eulerAngles = new Vec3(0, 180, 0);
      }
    }

    const animComp = this._curCustomer.getComponent(AnimationComponent);
    animComp.play('walk');
  }
}


