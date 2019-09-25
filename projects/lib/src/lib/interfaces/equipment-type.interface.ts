import { EquipmentEnum } from '../enums/equipment.enum';

export interface EquipmentTypeInterface {
  id: number;
  type: EquipmentEnum;
  brand: string;
  series: string;
}
