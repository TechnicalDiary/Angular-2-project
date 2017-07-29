import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import {LoginComponent} from'./login.component';


// import {routing} from '../app.routing';

@NgModule({
  declarations: [
      LoginComponent
  ],
  imports: [
      BrowserModule, FormsModule
  ],
  providers: [],
  exports:   [LoginComponent],
})
export class LoginModule { }