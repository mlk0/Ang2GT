import {Component} from "@angular/core"
@Component({
    selector : "pm-app",
    template:`
    <div>
    <h1>{{pageTitle}}</h1>
    my app component
    2
    
    </div>
    `
})
export class AppComponent{
    pageTitle : string = "Acme Product Management";

}