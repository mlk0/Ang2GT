"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var NotFoundComponent = (function () {
    function NotFoundComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.info = 'the requested page was not found';
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        var activatedRouteParams = this._activatedRoute.snapshot.params;
        console.log("activatedRouteParams : " + activatedRouteParams);
        this.info += " : " + JSON.stringify(activatedRouteParams);
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    core_1.Component({
        templateUrl: 'notfound.component.html',
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], NotFoundComponent);
exports.NotFoundComponent = NotFoundComponent;
//# sourceMappingURL=notfound.component.js.map