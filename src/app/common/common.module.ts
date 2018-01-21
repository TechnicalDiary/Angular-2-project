import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing components....
// import { NotFoundComponent } from './not-found.component';
// import { NavbarComponent } from './navbar.component';
// import { SummaryPipe } from './summary.pipe';
import {AlertComponent, NotFoundComponent, NavbarComponent, SummaryPipe, AlertService} from './index';

@NgModule({
  declarations: [
        NavbarComponent, NotFoundComponent,AlertComponent,SummaryPipe
    ],
  imports: [
    BrowserModule,RouterModule
  ],
  providers: [AlertService],
  exports:[NavbarComponent,NotFoundComponent,SummaryPipe,AlertComponent]
})
export class CommonModule { }