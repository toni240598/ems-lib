import { PerformanceObjectInterface } from './performance-object.interface';
import { ManagedObjectInterface } from './managed-object.interface';

export interface CounterInterface {
  id: number;
  perfObj: PerformanceObjectInterface;
  discObj: ManagedObjectInterface;
}
