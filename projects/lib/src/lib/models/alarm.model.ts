import { AlarmInterface } from '../interfaces';
import { ManagedObjectModel } from './managed-object.model';
import { AlarmTypeEnum } from '../enums/alarm-type.enum';
import { SeverityEnum } from '../enums/severity.enum';

export class AlarmModel {
  constructor(input?: AlarmInterface) {
    if (input) {
      this.id = input.id;
      this.type = input.type;
      this.severity = input.severity;
      this.description = input.description;
      this.alarmObj = input.alarmObj ? new ManagedObjectModel(input.alarmObj) : null;
      this.actTime = input.actTime;
      this.ackTime = input.ackTime;
      this.clearTime = input.clearTime;
      this.ackUser = input.ackUser;
    }
  }

  private _id: string;
  private _alarmObj: ManagedObjectModel;
  private _type: AlarmTypeEnum;
  private _severity: SeverityEnum;
  private _description: string;
  private _actTime: string;
  private _ackTime: string;
  private _ackUser: string;
  private _clearTime: string;

  public get id(): string {
    return this._id;
  }

  public get alarmObj(): ManagedObjectModel {
    return this._alarmObj;
  }

  public get type(): AlarmTypeEnum {
    return this._type;
  }

  public get severity(): SeverityEnum {
    return this._severity;
  }

  public get description(): string {
    return this._description;
  }

  public get actTime(): string {
    return this._actTime;
  }

  public get ackTime(): string {
    return this._ackTime;
  }

  public get ackUser(): string {
    return this._ackUser;
  }

  public get clearTime(): string {
    return this._clearTime;
  }

  public set id(value: string) {
    this._id = value;
  }

  public set alarmObj(value: ManagedObjectModel) {
    this._alarmObj = value;
  }

  public set type(value: AlarmTypeEnum) {
    this._type = value;
  }

  public set severity(value: SeverityEnum) {
    this._severity = value;
  }

  public set description(value: string) {
    this._description = value;
  }

  public set actTime(value: string) {
    this._actTime = value;
  }

  public set ackTime(value: string) {
    this._ackTime = value;
  }

  public set ackUser(value: string) {
    this._ackUser = value;
  }

  public set clearTime(value: string) {
    this._clearTime = value;
  }

}
