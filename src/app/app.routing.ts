import {Router, RouterModule} from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './fleet-common/not-found.component';
import { PostsComponent }   from './posts/posts.component';
import { TweetsComponent }  from './tweets/tweets.component';
import { UsersComponent } from './users/users.component';


export const routing = RouterModule.forRoot([
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:HomeComponent,
        children: [
            {
                path: '',
                redirectTo:'users',
                pathMatch:'full'
            },
            {
                path:'users',
                component:UsersComponent 
            },
            {
                path:'posts',
                component:PostsComponent
            },
            {
                path:'tweets',
                component: TweetsComponent
            },
            {
                path:'**' ,
                component: NotFoundComponent
            }
        ]
    },
    
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'**' , component: NotFoundComponent}
    ])
