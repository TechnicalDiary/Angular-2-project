
import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {CommonModule} from '../common/common.module';


import {routing} from '../app.routing';

@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
    CommonModule,routing
  ],
  providers: [],
  exports:   [HomeComponent],
})
export class HomeModule { }