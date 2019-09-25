import { PerformanceEnum } from '../enums/performance.enum';

export interface PerformanceObjectInterface {
  id: number;
  name: PerformanceEnum;
  unit: string;
}
