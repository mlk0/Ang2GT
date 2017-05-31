import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../authentication/auth.service";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { IUser } from "../../authentication/user";

@Component({
    templateUrl: 'user-profile.component.htm',
    moduleId: module.id

})
export class UserProfileComponent implements OnInit
{
    profileFormGroup: FormGroup;
    
    ngOnInit(): void {

        let firstName = new FormControl(this._authenticationService.currentUser.FirstName);
        let lastName = new FormControl(this._authenticationService.currentUser.LastName);
        let isAdmin = new FormControl(this._authenticationService.currentUser.IsAdmin);

        this.profileFormGroup = new FormGroup({
            givenName : firstName,
            surName : lastName,
            isAdministrator : isAdmin,

            userName : new FormControl(this._authenticationService.currentUser.UserName),
            id : new FormControl(this._authenticationService.currentUser.UserId)
        });
    }

    cancelUpdate(){
        this._router.navigate(['welcome']);
    }

    updateProfile(form : NgForm){
        let updatedUser : IUser;
        updatedUser = {
            UserId : this._authenticationService.currentUser.UserId,
            UserName : form.userName,
            FirstName : form.givenName,
            LastName : form.surName,
            IsAdmin : form.isAdministrator

        }

        console.log(updatedUser);

        this._authenticationService.updateUser(updatedUser);
    }
    constructor(private _authenticationService: AuthenticationService,
                private _router : Router) { }
}