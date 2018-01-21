
import {Component} from '@angular/core';
import {NavbarComponent} from '../common/navbar.component';

@Component({
    selector:'home',
    template:`
        <navbar></navbar>
        <div class="container">
        <router-outlet></router-outlet>
        </div>
    `
})

export class HomeComponent{
    
}