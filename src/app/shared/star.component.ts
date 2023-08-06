import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: "app-star",
    templateUrl: "./star.component.html",
    styleUrls: ["./star.component.css"]
})
export class starComponent implements OnChanges{
    @Input() rating: number = 0;
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        //as the total width is 75px, 5 stars is 75, so our multiplication factor is 15 
        this.cropWidth = this.rating * 75/5;        
    }

    OnClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    } 
}