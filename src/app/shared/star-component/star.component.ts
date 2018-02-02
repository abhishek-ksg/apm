import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    public starRatingWidth: number;
    @Input() public starRating: number;

    @Output() public ratingClicked: EventEmitter<string> = new EventEmitter();

    starsClicked() {
        this.ratingClicked.emit(`${this.starRating}`);
    }
    ngOnChanges() {
        this.starRatingWidth = this.starRating * 86 / 5;
        console.log(`the width is ${this.starRatingWidth}`);
    }
}
