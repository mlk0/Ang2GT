import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { usersRoutes } from "./users.routes";
import { LoginComponent } from "./login.component";
import { UserProfileComponent } from "./profile/user-profile.component";

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule,
        RouterModule.forChild(usersRoutes)
    ],
    declarations : [LoginComponent, UserProfileComponent]
})
export class UsersModule { }