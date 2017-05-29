import { NgModule } from '@angular/core';
import { StarComponent } from './star.component';
import { NotFoundComponent } from './NotFound/notfound.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../home/welcome.component';
import { ToastrService } from "./toastr.service";
import { sharedRoutes } from "./shared.routes";

@NgModule({
    imports: [FormsModule, CommonModule,
        RouterModule.forChild(

            // [
            //     { path: 'welcome', component: WelcomeComponent },
            //     { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            //     { path: 'notfound/:parameters', component: NotFoundComponent }, //i need this in order to be able to explicltly redirect
            //     { path: '**', component: NotFoundComponent }
            // ]

            sharedRoutes
        )
    ],
    exports : [NotFoundComponent],

    declarations: [
        StarComponent
        , NotFoundComponent
        , WelcomeComponent

    ],
    providers: [ToastrService]
})
export class SharedModule { }