import {Component} from "@angular/core"

@Component({
    selector:'pm-app',
    // template: `<div>
    // <h1>{{pageTitle}}</h1>
    // my component
    // </div>`
    templateUrl:"app/products/product-list.component.htm"
})
export class AppComponent {
    pageTitle : string = 'Acme Product Management';
}