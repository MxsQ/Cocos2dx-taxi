
import { _decorator, Component, Node, Vec3 } from 'cc';
import { RoadPoint } from '../RoadPoint';
const { ccclass, property } = _decorator;


const _tempVec = new Vec3();

@ccclass('Car')
export class Car extends Component {

  public _currentRoadPoint: RoadPoint | null = null;
  private _pointA = new Vec3();
  private _pointB = new Vec3();
  private _curSpeed = 0.1;
  private _isMoving = false;
  private _offset = new Vec3();

  public update(dt: number){
    if(this._isMoving){
      this._offset.set(this.node.worldPosition);

      switch (this._currentRoadPoint?.moveType){
        case RoadPoint.RoadMoveType.BEND:
          break;

          default:
            const z = this._pointB.z - this._pointA.z;
            if(z !== 0){
              if(z > 0){
                this._offset.z += this._curSpeed;
                if(this._offset.z > this._pointB.z){
                  this._offset.z = this._pointB.z;
                }
              } else{
                this._offset.z -= this._curSpeed;
                if(this._offset.z < this._pointB.z){
                  this._offset.z = this._pointB.z;
                }
              }
            } else{
              const x = this._pointB.x - this._pointA.x;
              if(x > 0){
                this._offset.x += this._curSpeed;
                if(this._offset.x > this._pointB.x){
                  this._offset.x = this._pointB.x;
                }
              } else{
                this._offset.x -= this._curSpeed;
                if(this._offset.x < this._pointB.x){
                  this._offset.x = this._pointB.x;
                }
              }
            }

            break;
      }
      this.node.setWorldPosition(this._offset);
      Vec3.subtract(_tempVec, this._pointB, this._offset);
      if(_tempVec.length() <= 0.01 /** 这里是步长容错*/){
         this._arrivalStation();
      }
    }
  }

  public startRunning(){
    if(this._currentRoadPoint){
      this._isMoving = true;
    }
  }

  public stopRunning(){
    this._isMoving = false;
  }

  public setEntry(entry: Node){
    this.node.setWorldPosition(entry.worldPosition);
    this._currentRoadPoint = entry.getComponent(RoadPoint);
    if(!this._currentRoadPoint){
      console.warn("there is no RoadPoint in " + entry.name);
      return;
    }

    this._pointA.set(entry.worldPosition);
    this._pointB.set(this._currentRoadPoint.nextStation.worldPosition);

    // 调整车子的视角方向
    const z = this._pointB.z - this._pointA.z;
    if(z !== 0){
      this.node.eulerAngles = z < 0 ? new Vec3() : new Vec3(0, 180, 0);
    } else{
      const x = this._pointB.x - this._pointA.x;
      this.node.eulerAngles = x < 0 ? new Vec3(0, 90, 0) : new Vec3(0, 270, 0);
    }
  }

  private _arrivalStation(){
    console.log("doooooooo..........")
    this._pointA.set(this._pointB);
    this._currentRoadPoint = this._currentRoadPoint!.nextStation.getComponent(RoadPoint);
    if(this._currentRoadPoint?.nextStation){
      this._pointB.set(this._currentRoadPoint.nextStation.worldPosition);
    } else{
      this._isMoving = false;
      this._currentRoadPoint = null;
    }
  }
}

