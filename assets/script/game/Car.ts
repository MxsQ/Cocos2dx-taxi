
import { _decorator, Component, Node, Vec3, TERRAIN_HEIGHT_BASE, ParticleSystemComponent, BoxColliderComponent, RigidBody, ICollisionEvent, BoxCollider, RigidBodyComponent } from 'cc';
import { Constants } from '../data/Constants';
import { CustomEventListener } from '../data/CustomEventListener';
import { RunTimeData } from '../data/GameData';
import { RoadPoint } from '../RoadPoint';
import { AudioManager } from './AudioManager';
const { ccclass, property } = _decorator;


const _tempVec = new Vec3();
const EventName = Constants.EventName;

@ccclass('Car')
export class Car extends Component {
  @property
  maxSpeed = 0.2

  public _currentRoadPoint: RoadPoint | null = null;
  private _pointA = new Vec3();
  private _pointB = new Vec3();
  private _curSpeed = 0;
  private _isMoving = false;
  private _offset = new Vec3();
  private _originRotation = 0;
  private _targetRotation = 0;
  private _centerPoint = new Vec3();
  private _rotMeasure = 0;
  private _acceleration = 0.2
  private _isMain = false;
  private _isInOrder = false;
  private _isBreaking = false;
  private _gas: ParticleSystemComponent = null;
  private _overCD: Function = null;
  private _camera: Node = null;
  private _isOver = false;

  public start() {
    CustomEventListener.on(EventName.FINISHID_WALK, this._finishedWalk, this);
  }

  public update(dt: number) {
    if (!this._isMoving || this._isInOrder) {
      return;
    }

    this._offset.set(this.node.worldPosition);

    this._curSpeed += this._acceleration * dt;
    if (this._curSpeed > this.maxSpeed) {
      this._curSpeed = this.maxSpeed;
    }

    if (this._curSpeed <= 0.001) {
      this._isMoving = false;
      if (this._isBreaking) {
        this._isBreaking = false;
        CustomEventListener.dispatchEvent(EventName.END_BRANING);
      }
    }

    switch (this._currentRoadPoint?.moveType) {
      case RoadPoint.RoadMoveType.BEND:
        const offestRotation = this._targetRotation - this._originRotation;
        const currentRotation = this._conversion(this.node.eulerAngles.y);
        let nextStation = (currentRotation - this._originRotation)
          + (this._curSpeed * this._rotMeasure * (this._targetRotation > this._originRotation ? 1 : -1))
        if (Math.abs(nextStation) > Math.abs(offestRotation)) {
          nextStation = offestRotation;
        }

        const target = nextStation + this._originRotation;
        _tempVec.set(0, target, 0);
        this.node.eulerAngles = _tempVec;

        // 这里需要知道，绕轴旋转的计算公式
        // const sin = Math.sin(nextStation * Math.PI / 180);
        // const cos = Math.cos(nextStation * Math.PI / 180);
        // const xLength = this._pointA.x - this._centerPoint.x;
        // const zLength = this._pointA.z - this._centerPoint.z;
        // this._offset.set(xLength * cos + zLength * sin + this._centerPoint.x,
        //     0,
        //     -xLength * sin + zLength * cos + this._centerPoint.z)

        Vec3.rotateY(this._offset, this._pointA, this._centerPoint, nextStation * Math.PI / 180);

        break;

      default:
        const z = this._pointB.z - this._pointA.z;
        if (z !== 0) {
          if (z > 0) {
            this._offset.z += this._curSpeed;
            if (this._offset.z > this._pointB.z) {
              this._offset.z = this._pointB.z;
            }
          } else {
            this._offset.z -= this._curSpeed;
            if (this._offset.z < this._pointB.z) {
              this._offset.z = this._pointB.z;
            }
          }
        } else {
          const x = this._pointB.x - this._pointA.x;
          if (x > 0) {
            this._offset.x += this._curSpeed;
            if (this._offset.x > this._pointB.x) {
              this._offset.x = this._pointB.x;
            }
          } else {
            this._offset.x -= this._curSpeed;
            if (this._offset.x < this._pointB.x) {
              this._offset.x = this._pointB.x;
            }
          }
        }

        break;
    }
    this.node.setWorldPosition(this._offset);
    Vec3.subtract(_tempVec, this._pointB, this._offset);
    // console.log("tem : " + _tempVec.x + " " + _tempVec.y + " " + _tempVec.z);
    // console.log("offest : " + this._offset.x + " " + this._offset.y + " " + this._offset.z);
    // console.log(_tempVec.length());
    if (_tempVec.length() <= 0.01 /** 这里是步长容错*/) {
      this._arrivalStation();
    }

  }

  public setCamera(camera: Node, pos: Vec3, rotation: number) {
    if (!this._isMain) {
      return;
    }
    this._camera = camera;
    this._camera.parent = this.node;
    this._camera.setPosition(pos);
    this._camera.eulerAngles = new Vec3(rotation, 0, 0);
  }

  public startRunning() {
    if (this._isOver) {
      return;
    }

    if (this._currentRoadPoint) {
      this._isMoving = true;
      this._curSpeed = 0;
      this._acceleration = 0.2;
    }
  }

  public stopRunning() {
    if (this._isOver) {
      return;
    }

    this._acceleration = -0.3;
    CustomEventListener.dispatchEvent(EventName.STARTBRA_KING, this.node);
    this._isBreaking = true;
    AudioManager.playSound(Constants.AudioSource.STOP);
  }

  public moveAfterFinished(cd: Function) {
    this._overCD = cd;
  }

  public stopImmediately() {
    this._isMoving = false;
    this._curSpeed = 0;
  }

  public setEntry(entry: Node, isMain = false) {
    this.node.setWorldPosition(entry.worldPosition);
    this._currentRoadPoint = entry.getComponent(RoadPoint);
    this._isMain = isMain;
    if (!this._currentRoadPoint) {
      console.warn("there is no RoadPoint in " + entry.name);
      return;
    }

    this._pointA.set(entry.worldPosition);
    this._pointB.set(this._currentRoadPoint.nextStation.worldPosition);

    // 调整车子的视角方向
    const z = this._pointB.z - this._pointA.z;
    if (z !== 0) {
      this.node.eulerAngles = z < 0 ? new Vec3() : new Vec3(0, 180, 0);
    } else {
      const x = this._pointB.x - this._pointA.x;
      this.node.eulerAngles = x < 0 ? new Vec3(0, 90, 0) : new Vec3(0, 270, 0);
    }

    this._isOver = false;

    const collider = this.node.getComponent(BoxColliderComponent);
    if (this._isMain) {
      const gasNode = this.node.getChildByName('gas');
      this._gas = gasNode?.getComponent(ParticleSystemComponent) as ParticleSystemComponent;
      this._gas.play()

      collider!.on('onCollisionEnter', this._onCollisionEnter, this);;
      collider!.setGroup(Constants.CarGroup.MAIN_CAR);
      collider!.setMask(Constants.CarGroup.OTHER_CAR);
      // 碰撞的分组和掩码，到底是怎么工作的？？
    } else {
      collider!.setGroup(Constants.CarGroup.OTHER_CAR);
      collider!.setMask(-1);
    }

    this._resetPhysical();
  }

  private _arrivalStation() {
    console.log("到啦")
    if (this._isMain) {
      console.log('i am main');
    }
    this._pointA.set(this._pointB);
    this._currentRoadPoint = this._currentRoadPoint!.nextStation.getComponent(RoadPoint);
    if (this._currentRoadPoint?.nextStation) {
      this._pointB.set(this._currentRoadPoint.nextStation.worldPosition);

      if (this._isMain) {
        if (this._isBreaking) {
          this._isBreaking = false;
          CustomEventListener.dispatchEvent(EventName.END_BRANING);
        }

        if (this._currentRoadPoint.type === RoadPoint.RoadPointType.GREETING) {
          // 接客点  
          this._greetingCustomer();
        } else if (this._currentRoadPoint.type === RoadPoint.RoadPointType.GOODBYE) {
          // 送客点
          this._takingCustomer();
        } else if (this._currentRoadPoint.type == RoadPoint.RoadPointType.END) {
          AudioManager.playSound(Constants.AudioSource.WIN);
          this._gameOver();
        }
      }


      // 弯道处理
      if (this._currentRoadPoint.moveType === RoadPoint.RoadMoveType.BEND) {
        if (this._currentRoadPoint.clockwise) {
          this._originRotation = this._conversion(this.node.eulerAngles.y);
          this._targetRotation = this._originRotation - 90;
          if ((this._pointB.z < this._pointA.z && this._pointB.x > this._pointA.x)
            || (this._pointB.z > this._pointA.z && this._pointB.x < this._pointB.x)) {
            this._centerPoint.set(this._pointB.x, 0, this._pointA.z);
          } else {
            this._centerPoint.set(this._pointA.x, 0, this._pointB.z);
          }
        } else {
          this._originRotation = this._conversion(this.node.eulerAngles.y);
          this._targetRotation = this._originRotation + 90;
          if ((this._pointB.z > this._pointA.z && this._pointB.x > this._pointA.x)
            || (this._pointB.z < this._pointA.z && this._pointB.x < this._pointB.x)) {
            this._centerPoint.set(this._pointB.x, 0, this._pointA.z);
          } else {
            this._centerPoint.set(this._pointA.x, 0, this._pointB.z);
          }
        }

        Vec3.subtract(_tempVec, this._pointA, this._centerPoint);
        const r = _tempVec.length();
        this._rotMeasure = 90 / (Math.PI * r / 2)
      }
    } else {
      this._isMoving = false;
      this._currentRoadPoint = null;

      if (this._overCD) {
        this._overCD(this);
        this._overCD = null;
      }
    }
  }

  private _onCollisionEnter(event: ICollisionEvent) {
    console.log('!!!!撞到了')
    const otherCollider = event.otherCollider;
    if (otherCollider.node.name === 'group') {
      return;
    }
    const otherRigidBody = otherCollider.node.getComponent(RigidBodyComponent);
    otherRigidBody!.useGravity = true;
    otherRigidBody?.applyForce(new Vec3(0, 2500, -1500), new Vec3(0, 0.5, 0));

    const collider = event.selfCollider;
    collider.addMask(Constants.CarGroup.NORMAL);

    const rigidBody = this.node.getComponent(RigidBodyComponent);
    rigidBody!.useGravity = true;
    this._gameOver();
  }

  private _greetingCustomer() {
    const runtimeData = RunTimeData.instance();
    runtimeData.isTakeOver = false;
    this._isInOrder = true;
    this._curSpeed = 0;
    this._gas.stop();
    CustomEventListener.dispatchEvent(EventName.GREETING, this.node.worldPosition, this._currentRoadPoint?.direction)
  }

  private _takingCustomer() {
    const runtimeData = RunTimeData.instance();
    runtimeData.isTakeOver = false;
    runtimeData.curProgress++;
    this._isInOrder = true;
    this._curSpeed = 0;
    this._gas.stop();
    CustomEventListener.dispatchEvent(EventName.GOODBYE, this.node.worldPosition, this._currentRoadPoint?.direction)
    CustomEventListener.dispatchEvent(EventName.SHOW_COIN, this.node.worldPosition);
  }

  private _finishedWalk() {
    if (!this._isMain) {
      return;
    }
    this._gas.play();
    this._isInOrder = false;
  }

  private _resetPhysical() {
    const rigidBody = this.node.getComponent(RigidBodyComponent);
    rigidBody!.useGravity = false;
    rigidBody!.sleep();
    rigidBody!.wakeUp();
  }

  private _gameOver() {
    this._isMoving = false;
    this._curSpeed = 0;
    this._isOver = true;
    CustomEventListener.dispatchEvent(EventName.GAME_OVER);
  }

  private _conversion(value: number) {
    let a = value;
    if (a <= 0) {
      a += 360;
    }
    return a;
  }

}

