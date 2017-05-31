
import { Routes } from "@angular/router";
import { LoginComponent } from "./login.component";
import { UserProfileComponent } from "./profile/user-profile.component";

export const usersRoutes: Routes =
    [
        { path: 'login', component: LoginComponent },
        { path: 'profile', component: UserProfileComponent }
    ]