import { Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent{
    title = 'Technical Diary';

    constructor(private _router: Router){
    }
    
}