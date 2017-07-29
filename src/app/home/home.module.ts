
import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {FleetCommon} from '../fleet-common/fleet-common.module';


import {routing} from '../app.routing';

@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
    FleetCommon,routing
  ],
  providers: [],
  exports:   [HomeComponent],
})
export class HomeModule { }