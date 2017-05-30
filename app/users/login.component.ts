import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    templateUrl: 'login.component.htm',
    styleUrls : ['login.component.css'],
    moduleId: module.id
}
)
export class LoginComponent {
    loginUser(myForm: NgForm) {

      // console.log('LoginComponent.loginUser : ' +  JSON.stringify(myForm));
 console.log(myForm);


    }
}