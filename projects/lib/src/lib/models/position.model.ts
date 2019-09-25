import { SiteModel } from './site.model';
import { ManagedObjectModel } from './managed-object.model';
import { PositionInterface } from '../interfaces';

export class PositionModel {

  constructor(input?: PositionInterface) {
    if (input) {
      this.id = input.id;
      this.top = input.top;
      this.left = input.left;
      this.managedObject = input.managedObject ? new ManagedObjectModel(input.managedObject) : null;
      this.site = input.site ? new SiteModel(input.site) : null;
    }
  }

  private _id: number;
  private _site: SiteModel;
  private _managedObject: ManagedObjectModel;
  private _top: number;
  private _left: number;

  public get id(): number {
    return this._id;
  }

  public get site(): SiteModel {
    return this._site;
  }

  public get managedObject(): ManagedObjectModel {
    return this._managedObject;
  }

  public get top(): number {
    return this._top;
  }

  public get left(): number {
    return this._left;
  }

  public set id(value: number) {
    this._id = value;
  }

  public set site(value: SiteModel) {
    this._site = value;
  }

  public set managedObject(value: ManagedObjectModel) {
    this._managedObject = value;
  }

  public set top(value: number) {
    this._top = value;
  }

  public set left(value: number) {
    this._left = value;
  }

}
