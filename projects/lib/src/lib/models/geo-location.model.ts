import { GeoLocationInterface } from '../interfaces/geo-location.interface';

export class GeoLocationModel {
  constructor(input?: GeoLocationInterface) {
    if (input) {
      this.latitude = input.latitude;
      this.longitude = input.longitude;
      this.zoom = input.zoom;
    }
  }

  private _latitude: number;
  private _longitude: number;
  private _zoom: number;


  public get latitude(): number {
    return this._latitude;
  }

  public get longitude(): number {
    return this._longitude;
  }

  public get zoom(): number {
    return this._zoom;
  }

  public set latitude(value: number) {
    this._latitude = value;
  }

  public set longitude(value: number) {
    this._longitude = value;
  }

  public set zoom(value: number) {
    this._zoom = value;
  }

}
