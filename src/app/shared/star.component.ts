import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    public starRatingWidth: number;
    @Input() public starRating: number;;

    ngOnChanges() {
        this.starRatingWidth = this.starRating * 86/5;
        console.log(`the width is ${this.starRatingWidth}`);
    }
}