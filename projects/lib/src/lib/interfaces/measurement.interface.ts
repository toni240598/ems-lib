import { CounterInterface } from './counter.interface';

export interface MeasurementInterface {
  id: number;
  counter: CounterInterface;
  measurementValue: number;
  measurementTime: string;
}
