import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../authentication/auth.service";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IUser } from "../../authentication/user";

@Component({
    templateUrl: 'user-profile.component.htm',
    styleUrls: ['user-profile.component.css'],
    moduleId: module.id

})
export class UserProfileComponent implements OnInit {
    profileFormGroup: FormGroup;

    ngOnInit(): void {

        let firstName = new FormControl(this._authenticationService.currentUser.FirstName, [Validators.required, Validators.pattern("^[a-zA-Z ]+$")]); //must not contain special characters nor numbers, only letters
        let lastName = new FormControl(this._authenticationService.currentUser.LastName);
        let isAdmin = new FormControl(this._authenticationService.currentUser.IsAdmin);

        this.profileFormGroup = new FormGroup({
            givenName: firstName,
            surName: lastName,
            isAdministrator: isAdmin,

            userName: new FormControl(this._authenticationService.currentUser.UserName, Validators.required),
            id: new FormControl(this._authenticationService.currentUser.UserId),

            location: new FormControl({
                address: new FormControl("address sample"),
                zip: new FormControl("12334")
            })
        });
    }

    cancelUpdate() {
        this._router.navigate(['welcome']);
    }

    updateProfile(form: any) {


        console.log(form);

        if (this.profileFormGroup.valid) {

            let updatedUser: IUser;
            updatedUser = {
                UserId: this._authenticationService.currentUser.UserId,
                UserName: form.userName,
                FirstName: form.givenName,
                LastName: form.surName,
                IsAdmin: form.isAdministrator

            }

            console.log(updatedUser);

            this._authenticationService.updateUser(updatedUser);
        }
    }

    isValidUserName(): boolean {
        var userNameValidity = this.profileFormGroup.controls.userName.valid || this.profileFormGroup.controls.userName.untouched;
        console.log('userNameValidity : ' + userNameValidity);
        return userNameValidity;
    }

    isValidGivenName(): boolean {
        var givenNameIsValid = this.profileFormGroup.controls.givenName.valid || this.profileFormGroup.controls.givenName.untouched;
        console.log('givenNameIsValid : ' + givenNameIsValid);
        return givenNameIsValid;
    }

    constructor(private _authenticationService: AuthenticationService,
        private _router: Router) { }
}