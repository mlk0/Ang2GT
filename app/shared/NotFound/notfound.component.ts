import { Component } from "@angular/core";

@Component({
    templateUrl : 'notfound.component.html',
    moduleId : module.id

})
export class NotFoundComponent{
    
    info:string = 'the requested page was not found';
}