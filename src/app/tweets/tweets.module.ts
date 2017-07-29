import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TweetsComponent} from './tweets.component';
import { TweetComponent } from './tweet.component';
import { LikeComponent } from './like.component';


import {TweetService} from './tweet.service';


@NgModule({
  declarations: [
      TweetsComponent,TweetComponent,LikeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [TweetService],
  exports:   [TweetsComponent]
})
export class TweetsModule { }