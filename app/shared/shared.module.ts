import { NgModule } from '@angular/core';
import { StarComponent } from './star.component';
import { NotFoundComponent } from './NotFound/notfound.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../home/welcome.component';

@NgModule({
    imports : [ FormsModule, CommonModule, 
        RouterModule.forChild([
              { path: 'welcome', component: WelcomeComponent },
              { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: 'notfound/:parameters', component: NotFoundComponent }, //i need this in order to be able to explicltly redirect
            { path: '**', component: NotFoundComponent }
        ])
    ],
    //exports : [StarComponent,NotFoundComponent],
    declarations : [
       StarComponent
       , NotFoundComponent
       ,WelcomeComponent
        ]
})
export class SharedModule {}