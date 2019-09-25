import { NgModule, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { ConfigInterface } from './interfaces/config.interface';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';
import { PositionService } from './services/position.service';
import { ManagedObjectService } from './services/managed-object.service';
import { CounterService } from './services/counter.service';
import { AlarmService } from './services/alarm.service';
import { MeasurementService } from './services/measurement.service';
import indonesia from '@angular/common/locales/id';
import { registerLocaleData } from '@angular/common';
registerLocaleData(indonesia);
import { SocketService } from './services/socket.service';


@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: []
})
export class EMSLibModule {
  static forRoot(config: ConfigInterface): ModuleWithProviders {
    return {
      ngModule: EMSLibModule,
      providers: [
        CommonService,
        PositionService,
        ManagedObjectService,
        CounterService,
        AlarmService,
        MeasurementService,
        SocketService,
        { provide: 'config', useValue: config },
        { provide: LOCALE_ID, useValue: 'id'}
      ],
    };
  }
}
