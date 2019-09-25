export enum PerformanceEnum {
  // Common performances
  BrightnessLevelSelected = 'Brightness Level Selected',
  Controlled = 'Controlled',

  // DIAM4200 specific performances
  Power = 'Power',
  Current = 'Current',
  Voltage = 'Voltage',
  InputVoltage = 'Input Voltage',
  InputCurrent = 'Input Current',
  NumberOfBurntLamps  = 'Number Of Burnt Lamps',
  HeatsinkTemperature = 'Heatsink Temperature',

  // UR2000 specific performances:
  PowerSwitch  = 'Power Switch',
  CCRFault = 'CCR Fault',
}
