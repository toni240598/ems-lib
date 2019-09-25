import { ManagedObjectInterface } from '../interfaces/managed-object.interface';
import { EquipmentTypeModel } from './equipment-type.model';
import { GeoLocationModel } from './geo-location.model';


export class ManagedObjectModel {

  constructor(input?: ManagedObjectInterface) {
    if (input) {
      this.id = input.id;
      this.name = input.name;
      this.eqType = input.eqType ? new EquipmentTypeModel(input.eqType) : null;
      this.location = input.location ? new GeoLocationModel(input.location) : null;
      this.parent = input.parent ? new ManagedObjectModel(input.parent) : null;
    }
  }

  private _id: number;
  private _name: string;
  private _location: GeoLocationModel;
  private _eqType: EquipmentTypeModel;
  private _parent: ManagedObjectModel;

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get location(): GeoLocationModel {
    return this._location;
  }

  public get eqType(): EquipmentTypeModel {
    return this._eqType;
  }

  public get parent(): ManagedObjectModel {
    return this._parent;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set name(value: string) {
    this._name = value;
  }

  public set location(value: GeoLocationModel) {
    this._location = value;
  }

  public set eqType(value: EquipmentTypeModel) {
    this._eqType = value;
  }

  public set parent(value: ManagedObjectModel) {
    this._parent = value;
  }

}
