import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl : 'notfound.component.html',
    moduleId : module.id

})
export class NotFoundComponent implements OnInit{ 
    ngOnInit(): void {
        let activatedRouteParams = this._activatedRoute.snapshot.params;
        console.log(`activatedRouteParams : ${activatedRouteParams}`);
        this.info+=` : ${ JSON.stringify(activatedRouteParams)}`;
    }

    info:string = 'the requested page was not found';

    constructor(private _activatedRoute : ActivatedRoute){
        
    }
}