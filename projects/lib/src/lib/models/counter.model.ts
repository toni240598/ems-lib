import { CounterInterface } from '../interfaces';
import { ManagedObjectModel } from './managed-object.model';
import { PerformanceObjectModel } from './performance-object.model';

export class CounterModel {

  constructor(input?: CounterInterface) {
    if (input) {
      this.id = input.id;
      this.discObj = input.discObj ? new ManagedObjectModel(input.discObj) : null;
      this.perfObj = input.perfObj ? new PerformanceObjectModel(input.perfObj) : null;
    }
  }

  private _id: number;
  private _discObj: ManagedObjectModel;
  private _perfObj: PerformanceObjectModel;


  public get id(): number {
    return this._id;
  }

  public get discObj(): ManagedObjectModel {
    return this._discObj;
  }

  public get perfObj(): PerformanceObjectModel {
    return this._perfObj;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set discObj(value: ManagedObjectModel) {
    this._discObj = value;
  }

  public set perfObj(value: PerformanceObjectModel) {
    this._perfObj = value;
  }

}
