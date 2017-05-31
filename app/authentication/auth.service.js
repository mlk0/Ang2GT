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
var AuthenticationService = (function () {
    function AuthenticationService(_router) {
        this._router = _router;
    }
    AuthenticationService.prototype.isAuthenticated = function () {
        return this.currentUser != null;
    };
    AuthenticationService.prototype.logOut = function () {
        console.log('AuthenticationService.logOut');
        this.currentUser = null;
        this._router.navigate(['/welcome']);
    };
    AuthenticationService.prototype.authetnicateUser = function (userName, password) {
        if (password === "Test1234") {
            console.log('OK Password');
            this.currentUser = {
                UserId: 123,
                FirstName: "Some",
                LastName: "One",
                UserName: userName,
                IsAdmin: false
            };
            this._router.navigate(['/prd/products']);
        }
        else {
            console.log('BAD Password');
            this.currentUser = null;
            //this.logOut(true);
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=auth.service.js.map