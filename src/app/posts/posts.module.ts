import { NgModule } from '@angular/core';
import {PostsComponent} from './posts.component';

@NgModule({
  declarations: [
      PostsComponent
  ],
  imports: [
    //  AppModule
  ],
  providers: [],
  exports:   [PostsComponent],
})
export class PostsModule { }