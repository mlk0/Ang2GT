import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "../authentication/auth.service";

@Component({
    templateUrl: 'login.component.htm',
    styleUrls : ['login.component.css'],
    moduleId: module.id
}
)
export class LoginComponent {

    constructor(private _authenticationService : AuthenticationService){
        
    }

    loginUser(myForm: NgForm) {

      // console.log('LoginComponent.loginUser : ' +  JSON.stringify(myForm));
     console.log(myForm);
     console.log(myForm.value);
     console.log('myForm.value.userName : ' + myForm.value.userName + ', myForm.value.password : ' + myForm.value.password);
     this._authenticationService.authetnicateUser(myForm.value.userName, myForm.value.password);

    }
}