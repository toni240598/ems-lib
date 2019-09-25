import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EMSLibModule } from 'projects/lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EMSLibModule.forRoot({
      restUrl: 'http://localhost:3002',
      socketUrl: 'http://localhost:3002'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
