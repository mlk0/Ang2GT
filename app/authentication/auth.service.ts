import { Injectable } from "@angular/core";
import { IUser } from "./user";
import { Router } from "@angular/router";

@Injectable()
export class AuthenticationService {
    constructor(private _router: Router) { }

    currentUser: IUser;
    isAuthenticated(): boolean {
        return this.currentUser != null;
    }

    logOut() {
        console.log('AuthenticationService.logOut');
        this.currentUser = null;
        this._router.navigate(['/welcome']);

    }

    authetnicateUser(userName: string, password: string) {


        if (password === "Test1234") {
            console.log('OK Password');
            this.currentUser = {
                UserId: 123,
                FirstName: "Some",
                LastName: "One",
                UserName: userName,
                IsAdmin: true
            };

            this._router.navigate(['/prd/products']);
        }
        else {
            console.log('BAD Password');
            this.currentUser = null;
            //this.logOut(true);

        }




    }

    updateUser(updatedUser : IUser){
        this.currentUser.FirstName = updatedUser.FirstName;
        this.currentUser.LastName = updatedUser.LastName;
        this.currentUser.UserName = updatedUser.UserName;
        this.currentUser.IsAdmin = updatedUser.IsAdmin;

        console.log('Update currentUser to : ' + JSON.stringify(this.currentUser))
    }
}