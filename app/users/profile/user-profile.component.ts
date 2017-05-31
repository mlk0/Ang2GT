import { Component } from "@angular/core";
import { AuthenticationService } from "../../authentication/auth.service";

@Component({
    templateUrl: 'user-profile.component.htm',
    moduleId: module.id

})
export class UserProfileComponent {
    constructor(private _authenticationService: AuthenticationService) { }
}