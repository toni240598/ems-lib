import { EquipmentTypeInterface } from './equipment-type.interface';
import { GeoLocationInterface } from './geo-location.interface';

export interface ManagedObjectInterface {
  id: number;
  name: string;
  location: GeoLocationInterface;
  eqType: EquipmentTypeInterface;
  parent: ManagedObjectInterface;
}
