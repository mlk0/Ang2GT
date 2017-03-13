import { Component, Input, OnChanges, SimpleChanges, OnInit } from "@angular/core";

@Component({
    selector : 'ai-star',
    moduleId : module.id,
    templateUrl : "star.component.html",
    styleUrls : ["star.component.css"]
})
export class StarComponent implements OnChanges, OnInit {
        ngOnInit(): void {

            this.starWidth = this.rating * 86 / 5;
            console.log('starWidth : ' + this.starWidth + ' rating : ' + this.rating);
        }

        ngOnChanges(changes: SimpleChanges): void {
           this.starWidth = this.rating * 86 / 5;
           console.log('starWidth : ' + this.starWidth + ' rating : ' + this.rating);
        }

    starWidth : number;
    @Input() rating : number;
}