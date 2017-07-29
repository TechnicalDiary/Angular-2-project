import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Operator/map';

@Injectable()

export class UserService{
    private _userUrl = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http:Http){}

    getUsers():Observable<any[]>{
        return this._http.get(this._userUrl)
                        .map(this._extractData)
                        .catch(this._handleError);
    }

    private _extractData(res:Response){
        let body = res.json();
        return body || {};
    }

    private _handleError(error:Response | any){

        let errMsg:string;
        if(error instanceof Response){
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''}
            ${err}`;
        } else {
            errMsg = error.message?error.message:error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


}
