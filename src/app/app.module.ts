import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importing components....
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//importing modules...
import {HomeModule} from './home/home.module';
import {PostsModule} from './posts/posts.module';
import {TweetsModule} from './tweets/tweets.module';
import {UsersModule} from './users/users.module';
import {LoginModule} from './login/login.module';
import {CommonModule} from './common/common.module';

// importing routing...
import {routing} from './app.routing';
// import {userRouting} from './users/users.routing';


@NgModule({
  declarations: [
    AppComponent
      ],
  imports: [
    BrowserModule,LoginModule,HomeModule,PostsModule,UsersModule,TweetsModule,CommonModule,routing
  ],
  providers: [],
  exports:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
