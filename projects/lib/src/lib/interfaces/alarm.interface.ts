import { ManagedObjectInterface } from './managed-object.interface';
import { SeverityEnum } from '../enums/severity.enum';
import { AlarmTypeEnum } from '../enums/alarm-type.enum';

export interface AlarmInterface {
  id: string;
  alarmObj: ManagedObjectInterface;
  severity: SeverityEnum;
  type: AlarmTypeEnum;
  description: string;
  actTime: string;
  ackUser: string;
  clearTime: string;
  ackTime: string;
}
