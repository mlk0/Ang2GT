import { Routes } from "@angular/router";
import { WelcomeComponent } from "../home/welcome.component";
import { NotFoundComponent } from "./NotFound/notfound.component";

export const sharedRoutes: Routes = [

    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'notfound/:parameters', component: NotFoundComponent } //i need this in order to be able to explicltly redirect
    //{ path: '**', component: NotFoundComponent }

];