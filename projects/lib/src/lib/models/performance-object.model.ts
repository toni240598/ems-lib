import { PerformanceEnum } from '../enums';
import { PerformanceObjectInterface } from '../interfaces';

export class PerformanceObjectModel {

  constructor(input?: PerformanceObjectInterface) {
    if (input) {
      this.id = input.id;
      this.name = input.name;
      this.unit = input.unit;
    }
  }

  private _id: number;
  private _name: PerformanceEnum;
  private _unit: string;

  public get id(): number {
    return this._id;
  }

  public get name(): PerformanceEnum {
    return this._name;
  }

  public get unit(): string {
    return this._unit;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set name(value: PerformanceEnum) {
    this._name = value;
  }

  public set unit(value: string) {
    this._unit = value;
  }

}
