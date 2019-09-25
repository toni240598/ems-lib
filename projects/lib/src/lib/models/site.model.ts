import { SiteInterface } from '../interfaces';

export class SiteModel {
  constructor(input?: SiteInterface) {
    if (input) {
      this.id = input.id;
    }
  }

  private _id: number;

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

}
