
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import {UsersComponent} from './users.component';
import {CustomModal } from './custom-modal-sample';
import {UserService} from './user.service';
// import {userRouting} from './users.routing';

@NgModule({
  declarations: [
      UsersComponent,CustomModal
  ],
  imports: [
    CommonModule,HttpModule, JsonpModule,ModalModule,BootstrapModalModule
  ],
  providers: [UserService],
  exports:   [UsersComponent],
  entryComponents: [ CustomModal ]
})
export class UsersModule { }