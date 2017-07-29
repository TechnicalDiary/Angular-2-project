import { Injectable } from '@angular/core';

@Injectable()

export class TweetService {
    getTweets() {
        return [
        { 
            imageUrl: "http://lorempixel.com/100/100/people?1",
            author: "Windward",
            handle: "@windwardstudios",
            body: "Looking for a better company reporting or docgen app?",
            totalLikes: 90,
            iLike: false
        },
        { 
            imageUrl: "http://lorempixel.com/100/100/people?2",
            author: "AngularJS News",
            handle: "@angularjs_news",
            body: "Right Relevance : Influencers, Articles and Conversations ",
            totalLikes: 59,
            iLike: true
        },
        { 
            imageUrl: "http://lorempixel.com/100/100/sports?3",
            author: "UX & Bootstrap",
            handle: "@3rdwave",
            body: "10 Reasons Why Web Projects Fail ",
            totalLikes: 61,
            iLike: true
        },
        { 
            imageUrl: "http://lorempixel.com/100/100/fashion?4",
            author: "Windward",
            handle: "@windwardstudios",
            body: "Looking for a better company reporting or docgen app?",
            totalLikes: 0,
            iLike: false
        },
        // { 
        //     imageUrl: "http://lorempixel.com/100/100/nature?26",
        //     author: "AngularJS News",
        //     handle: "@angularjs_news",
        //     body: "Right Relevance : Influencers, Articles and Conversations ",
        //     totalLikes: 55,
        //     iLike: true
        // },
        { 
            imageUrl: "http://lorempixel.com/100/100/people?8",
            author: "UX & Bootstrap",
            handle: "@3rdwave",
            body: "10 Reasons Why Web Projects Fail ",
            totalLikes: 31,
            iLike: true
        }];
    }
}