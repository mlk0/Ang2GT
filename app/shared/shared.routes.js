"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var welcome_component_1 = require("../home/welcome.component");
var notfound_component_1 = require("./NotFound/notfound.component");
exports.sharedRoutes = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'notfound/:parameters', component: notfound_component_1.NotFoundComponent },
];
//# sourceMappingURL=shared.routes.js.map