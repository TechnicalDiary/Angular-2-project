import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector:'login',
    templateUrl:'./login.component.html'
})

export class LoginComponent implements OnInit{
    model: any = {};
    loading = false;
    loginFailed = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        // private authenticationService: AuthenticationService,
        // private alertService: AlertService
        ) { }

    ngOnInit(){
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        // this.authenticationService.login(this.model.username, this.model.password)
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
        if(this.model.username=='shahbaz' && this.model.password=='123'){
            this.router.navigate(['/home']);
        }
        else{
            this.loginFailed=true;
            this.loading = false;
        }
    }

}