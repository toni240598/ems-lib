import { EquipmentTypeInterface } from '../interfaces/equipment-type.interface';
import { EquipmentEnum } from '../enums/equipment.enum';

export class EquipmentTypeModel {

  constructor(input?: EquipmentTypeInterface) {
    if (input) {
      this.id = input.id;
      this.type = input.type;
      this.brand = input.brand;
      this.series = input.series;
    }
  }

  private _id: number;
  private _type: EquipmentEnum;
  private _brand: string;
  private _series: string;

  public get id(): number {
    return this._id;
  }

  public get type(): EquipmentEnum {
    return this._type;
  }

  public get brand(): string {
    return this._brand;
  }

  public get series(): string {
    return this._series;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set type(value: EquipmentEnum) {
    this._type = value;
  }

  public set brand(value: string) {
    this._brand = value;
  }

  public set series(value: string) {
    this._series = value;
  }

}
