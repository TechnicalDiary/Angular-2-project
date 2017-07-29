import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'tweet',
    template:`
    <div class="media">
        <div class="media-left">
            <a href="#">
            <img class="media-object" src="{{ data.imageUrl }}">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">
                {{ data.author }} <span class="handle">{{ data.handle }}</span>
            </h4>
            {{ data.body}}
            <div>
                <like [totalLikes]="data.totalLikes" [iLike]="data.iLike" (changeLikeStatus)="OnLikeStatusChanged($event)"></like>
            </div>
        </div>
    </div> 
    `,
    styles: [`
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `]
})

export class TweetComponent{
    @Input() data;

    @Output('tweetStatusChanged') change = new EventEmitter();

    OnLikeStatusChanged(e){
        this.data.totalLikes= e.totalLikes;
        this.data.iLike= e.iLike;

        this.change.emit(this.data);
    }

}