import {Component, OnInit, ViewContainerRef, ViewEncapsulation  } from '@angular/core';
import {UserService} from './user.service';
import { ModalModule, OverlayRenderer, DOMOverlayRenderer, Overlay, overlayConfigFactory }  from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { CustomModalContext, CustomModal } from './custom-modal-sample';

@Component({
    selector:'users',
    templateUrl:'./users.component.html',
    providers: [Modal,Overlay,
        { provide: OverlayRenderer, useClass: DOMOverlayRenderer }]
})

export class UsersComponent implements OnInit {
    errorMessage: string;
    users: Array<any>;
    mode = 'Observable';

    constructor (private userService: UserService,public modal: Modal) {}
    
    ngOnInit() { this.getUsers(); }

    getUsers() {
        this.userService.getUsers()
                        .subscribe(
                            users => this.users = users,
                            error => this.errorMessage = <any>error);
    }

    onDelete() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
  }
  openCustom() {
    return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }
}