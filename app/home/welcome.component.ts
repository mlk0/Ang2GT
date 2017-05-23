import { Component } from '@angular/core';

@Component({
    templateUrl: 'welcome.component.html',
    moduleId : module.id
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
