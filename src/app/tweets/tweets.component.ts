import { Component} from '@angular/core';
import { TweetService } from './tweet.service';

@Component({
    selector: 'tweets',
    template: `
        <div *ngFor=" let tweet of tweets">
            <tweet [data]="tweet" (tweetStatusChanged)="OnTweetStatusChanged($event)"></tweet>
        </div>
    `
})

export class TweetsComponent{
    filterKey= "";
    tweets;
    constructor(tweetService: TweetService){
        this.tweets= tweetService.getTweets();
    }

    OnTweetStatusChanged($event){
        console.log("Tweets Component");
        console.log($event);
    }
}