import { SiteInterface } from './site.interface';
import { ManagedObjectInterface } from './managed-object.interface';

export interface PositionInterface {
  id: number;
  site: SiteInterface;
  managedObject: ManagedObjectInterface;
  top: number;
  left: number;
}
